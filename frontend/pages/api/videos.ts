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
    "https://www.youtube.com/@NoCopyrightSounds/videos",
    "https://www.youtube.com/@RFM_NCM/videos",
    "https://www.youtube.com/@audiolibrary_/videos",
    "https://www.youtube.com/@BassRebels/videos",
    "https://www.youtube.com/@tellyourstorymusicbyikson/videos",
    "https://www.youtube.com/@Infraction/videos",
    "https://www.youtube.com/@incompetech_kmac/videos",
    "https://www.youtube.com/@truly-channel/videos",
    "https://www.youtube.com/@NoCopyrightSounds/videos",
    "https://www.youtube.com/@VlogNoCopyrightMusic/videos",
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



// Audio Library - https://www.youtube.com/channel/UCHae4C99XJORB7Iog62wqvw
// AudioTrend | Background Music - https://www.youtube.com/channel/UCgD_KFNSEUeM6U4xk-c2Q6Q
// Bass Rebels - https://www.youtube.com/channel/UC39WpxsSjJ76sAoXf5nRO5w
// BGM channel - https://www.youtube.com/channel/UC_wnZ_-VJjVDaVTpFMwYv1Q
// CCFM Music - https://www.youtube.com/channel/UCoDxtsaoG_2AgntO_TpvRJw
// Creative Commons Music - https://www.youtube.com/channel/UCzlxWgqG_TERrvLQwJG-_XA
// Free Music for Vlogs - https://www.youtube.com/channel/UCQ5rybK2jrJtLS1G0KcRJIA
// Free Vibes - https://www.youtube.com/channel/UCDS7HtA1fSPDnLDCxPfl_vA
// Ikson - https://www.youtube.com/channel/UCyB3YiRU9OXJgIkRi-Z3wEA
// Infraction - https://www.youtube.com/channel/UCkRrhwhJ2Ia_ZlkTQ4XFWJA
// Joakim Karud - https://www.youtube.com/channel/UCVBUm9tP-AmgxFNZN5lvH1A
// Kevin MacLeod - https://www.youtube.com/channel/UCSZXFhRIx6b0dFX3xS8L1yQ
// Music for Creators - https://www.youtube.com/channel/UCfwx98Wty7LhdlkxL5PZyLA
// NCS: Music Without Limitations - https://www.youtube.com/channel/UC_aEa8K-EOJ3D6gOs7HcyNg
// No Copyright Music - https://www.youtube.com/channel/UCGvPk06_3ipzo5gt5SL-2PQ
// Royalty Free Music - https://www.youtube.com/channel/UCcODEYWjv-MImGJfIgyNtzw
// The Arcadium - https://www.youtube.com/channel/UCZgcVNveYNwXUW-xvzhelKw
// Vlog No Copyright Music - https://www.youtube.com/channel/UCEickjZj99-JJIU8_IJ7J-Q
// AudioJungle - https://www.youtube.com/channel/UCNE0p1bZrFJqF7HKuchYN5Q
// Scott Buckley - https://www.youtube.com/channel/UCUHagesXR7H0wEwJkyYD__g
