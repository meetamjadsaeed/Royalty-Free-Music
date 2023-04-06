import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

type ChannelItem = {
  name: string;
  url: string;
  description: string;
};

const fetchChannels = async (): Promise<ChannelItem[]> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const urls = [
    "https://www.youtube.com/@VlogNoCopyrightMusic/about",
    "https://www.youtube.com/@NoCopyrightSounds/about",
    "https://www.youtube.com/@RFM_NCM/about",
  ];

  const channels: ChannelItem[] = [];

  for (const url of urls) {
    await page.goto(url);
    // Wait for the video elements to load
    await page.waitForSelector("#description-container");

    const name = await page.$eval(
      "#channel-header-container > div > div > div > h1",
      // Error: Error: failed to find element matching selector "#channel-header-container > div > div > div > h1"
      (el) => el.textContent || ""
    );

    const description = await page.$eval(
      "#description-container > yt-formatted-string",
      (el) => el.textContent || ""
    );

    const channelUrl = await page.$eval(
      "#right-column > yt-formatted-string > a",
      // Error: Error: failed to find element matching selector "#right-column > yt-formatted-string > a"
      (el) => el.getAttribute("href") || ""
    );

    channels.push({
      name,
      description,
      url: `https://www.youtube.com${channelUrl}`,
    });
  }

  await browser.close();

  return channels;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChannelItem[]>
) {
  const channels = await fetchChannels();
  res.status(200).json(channels);
}


// Api in next js and use typescript and puppeteer which will fetch about content from youtube channel.
// I will need to provide youtube links and data should be fetch from multiple urls and in response i need array of objects of channels with name, descriptions channel url of each channel where name is name of channel and descriptions is content from about us tab of channel  


// here are urls 
// https://www.youtube.com/@VlogNoCopyrightMusic
// https://www.youtube.com/@NoCopyrightSounds
// https://www.youtube.com/@RFM_NCM