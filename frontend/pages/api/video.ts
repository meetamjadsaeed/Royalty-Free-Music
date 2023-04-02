// import type { NextApiRequest, NextApiResponse } from "next";
// import puppeteer from "puppeteer";

// type VideoItem = {
//     title: string;
//     url: string;
//     thumbnail: string;
//     description: string;
//   };
  
//   const getVideoDetails = async (url: string): Promise<VideoItem> => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
  
//     await page.goto(url);
  
//     // Wait for the video details to load
//     await page.waitForSelector("#container");
  
//     const title = await page.$eval("#container h1.title yt-formatted-string", (el) => (el as HTMLElement).innerText.trim());
//     const thumbnail = await page.$eval("#container #player-container #player #player-container-outer #player-container-inner #movie_player video", (el) => el.getAttribute("poster"));
//     const description = await page.$eval("#container #description #content", (el) => (el as HTMLElement).innerText.trim());
  
//     await browser.close();
  
//     return {
//       title,
//       url,
//       thumbnail,
//       description,
//     };
//   };
  

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const videoDetails = await getVideoDetails(
//         "https://www.youtube.com/watch?v=9KAjzghCEH8"
//       );

//       res.status(200).json({ data: videoDetails });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Something went wrong" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
