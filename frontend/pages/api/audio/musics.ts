// import puppeteer from "puppeteer";
// import { NextApiRequest, NextApiResponse } from "next";

// interface Music {
//   name: string;
//   title: string;
//   thumbnailUrl: string;
//   downloadUrl: string;
//   musicDetails: string;
// }

// async function scrape(): Promise<Music[]> {
//   const browser = await puppeteer.launch();
//   // const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();

//   let currentPage = 1;
//   let hasNextPage = true;
//   const musicList: Music[] = [];

//   while (hasNextPage) {
//     const url = `https://www.silvermansound.com/free-music?page=${currentPage}`;
//     await page.goto(url);

//     const musicData = await page.evaluate(() => {
//       const musicNodes = document.querySelectorAll(
//         ".rfmp-title.item_inside_cell.wpt_title.autoresponsive-label-show"
//       );
//       const musicTitles = document.querySelectorAll(".wpt_product_title_in_td");
//       const thumbnailUrls = document.querySelectorAll(".wpt_thumbnails_url");
//       const mp3Urls = document.querySelectorAll(".mp3-download .wpt_type_url");
//       const detailsUrls = document.querySelectorAll("[data-title='Details'] a");

//       return Array.from(musicNodes).map((node, index) => ({
//         name: node.textContent?.trim() || "",
//         title: (musicTitles[index] as HTMLElement)?.innerText?.trim() || "",
//         thumbnailUrl:
//           (thumbnailUrls[index] as HTMLElement)
//             ?.getAttribute("data-url")
//             ?.trim() || "",
//         downloadUrl: (mp3Urls[index] as HTMLAnchorElement)?.href?.trim() || "",
//         musicDetails:
//           (detailsUrls[index] as HTMLAnchorElement)?.href?.trim() || "",
//       }));
//     });

//     musicList.push(...musicData);

//     const nextLink = await page.$(".wpt_my_pagination a");
//     if (nextLink) {
//       currentPage++;
//     } else {
//       hasNextPage = false;
//     }
//   }

//   await browser.close();

//   return musicList;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Music[]>
// ) {
//   const musicList = await scrape();
//   res.status(200).json(musicList);
// }

// get the data from all pages

import puppeteer, { ElementHandle } from "puppeteer";
import { NextApiRequest, NextApiResponse } from "next";

interface Music {
  name: string;
  title: string;
  thumbnailUrl: string;
  downloadUrl: string;
  musicDetails: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Music[]>
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.silvermansound.com/free-music");

  const musicList: Music[] = [];

  // Extract total number of pages from pagination div
  const totalPages = await page.evaluate(() => {
    const paginationDiv = document.querySelector(".wpt_my_pagination");
    const pageNumbers = paginationDiv?.querySelectorAll(".page-numbers");
    return pageNumbers?.length || 1;
  });

  // Loop through each page and extract music details
  for (let i = 1; i <= totalPages; i++) {
    if (i !== 1) {
      // Click on pagination link
      await page.click(`.page-numbers:nth-child(${i})`);
      // Wait for new entries to load
      await page.waitForSelector(
        ".rfmp-title.item_inside_cell.wpt_title.autoresponsive-label-show"
      );
    }

    // Extract music details from current page
    const musicNodes = await page.$$(
      ".rfmp-title.item_inside_cell.wpt_title.autoresponsive-label-show"
    );
    const musicTitles = await page.$$(".wpt_product_title_in_td");
    const thumbnailUrls = await page.$$(".wpt_thumbnails_url");
    const mp3Urls = await page.$$(".mp3-download .wpt_type_url");
    const detailsUrls = await page.$$("[data-title='Details'] a");

    // Merge current page's music details with previous pages
    for (let j = 0; j < musicNodes.length; j++) {
      const name = await musicNodes[j].getProperty("textContent");
      const title = await musicTitles[j].getProperty("textContent");
      const thumbnailUrls = await page.$$eval(".wpt_thumbnails_url", (nodes) =>
        nodes.map((node) =>
          (node as HTMLImageElement).getAttribute("data-url")?.trim()
        )
      );

      const downloadUrl = await mp3Urls[j].getProperty("href");
      const musicDetails = await detailsUrls[j].getProperty("href");

      musicList.push({
        name: ((await name.jsonValue()) as string) || "",
        title: ((await title.jsonValue()) as string) || "",
        thumbnailUrl: thumbnailUrls.shift() || "",
        downloadUrl: ((await downloadUrl?.jsonValue()) as string) || "",
        musicDetails: ((await musicDetails?.jsonValue()) as string) || "",
      });
    }
  }

  await browser.close();

  res.status(200).json(musicList);
}
