import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

type VideoItem = {
  videoId: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
};

// const getVideos = async (): Promise<VideoItem[]> => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://www.youtube.com/@VlogNoCopyrightMusic/videos");

//   // Wait for the video elements to load
//   await page.waitForSelector("#contents");

//   const videos = await page.$$eval("#contents #thumbnail", (items) =>
//     items.map((item) => {
//       console.log(item);
//       const title =
//         item.querySelector("a > #video-title")?.getAttribute("title") ?? "";
//       const url = item.closest("a")?.getAttribute("href") ?? "";
//       const thumbnail = item.querySelector("img")?.getAttribute("src") ?? "";
//       const description =
//         item.closest("#metadata-line")?.querySelector("span:nth-child(2)")
//           ?.textContent ?? "";

//       return {
//         videoId:url,
//         title: url.replace(/\/watch\?v=(\w+)/, "$1"),
//         url: `https://www.youtube.com${url}`,
//         thumbnail,
//         description,
//       };
//     })
//   );

//   await browser.close();

//   return videos;
// };

// fetch videos from multiple urls without pagination
const getVideos = async (): Promise<VideoItem[]> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const urls = [
    "https://www.youtube.com/@VlogNoCopyrightMusic/videos",
    "https://www.youtube.com/@NoCopyrightSounds",
    "https://www.youtube.com/@RFM_NCM/videos",
  ];

  const videos: VideoItem[] = [];

  for (const url of urls) {
    await page.goto(url);
    // Wait for the video elements to load
    await page.waitForSelector("#contents");
    const pageVideos = await page.$$eval("#contents #thumbnail", (items) =>
      items.map((item) => {
        console.log(item);
        const title =
          item.querySelector("a > #video-title")?.getAttribute("title") ?? "";
        const url = item.closest("a")?.getAttribute("href") ?? "";
        const thumbnail = item.querySelector("img")?.getAttribute("src") ?? "";
        const description =
          item.closest("#metadata-line")?.querySelector("span:nth-child(2)")
            ?.textContent ?? "";

        return {
          videoId: url,
          title: url.replace(/\/watch\?v=(\w+)/, "$1"),
          url: `https://www.youtube.com${url}`,
          thumbnail,
          description,
        };
      })
    );
    videos.push(...pageVideos);
  }

  await browser.close();

  return videos;
};

// fetch videos from multiple urls with pagination
// const getVideos = async (
//   pageNo: number
// ): Promise<{ videos: VideoItem[]; hasNextPage: boolean }> => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   const urls = [
//     "https://www.youtube.com/@VlogNoCopyrightMusic/videos",
//     "https://www.youtube.com/@NoCopyrightSounds",
//     "https://www.youtube.com/@RFM_NCM/videos",
//   ];

//   const videos: VideoItem[] = [];

//   // Fetch all videos from all URLs
//   for (const url of urls) {
//     await page.goto(url);
//     await page.waitForSelector("#contents");
//     const pageVideos = await page.$$eval("#contents #thumbnail", (items) =>
//       items.map((item) => {
//         console.log(item);
//         const title =
//           item.querySelector("a > #video-title")?.getAttribute("title") ?? "";
//         const url = item.closest("a")?.getAttribute("href") ?? "";
//         const thumbnail = item.querySelector("img")?.getAttribute("src") ?? "";
//         const description =
//           item.closest("#metadata-line")?.querySelector("span:nth-child(2)")
//             ?.textContent ?? "";

//         return {
//           videoId: url,
//           title: url.replace(/\/watch\?v=(\w+)/, "$1"),
//           url: `https://www.youtube.com${url}`,
//           thumbnail,
//           description,
//         };
//       })
//     );
//     videos.push(...pageVideos);
//   }

//   // Slice the videos array to return only the required page
//   const start = (pageNo - 1) * 20;
//   const end = start + 20;
//   const pageVideos = videos.slice(start, end);

//   // Check if there's a next page
//   const hasNextPage = end < videos.length;

//   await browser.close();

//   return {
//     videos: pageVideos,
//     hasNextPage,
//   };
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const videos = await getVideos();

      res.status(200).json({ data: videos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
