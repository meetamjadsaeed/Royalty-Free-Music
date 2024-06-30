import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  ReconciliationOutlined,
  PauseCircleOutlined,
  PlusOutlined,
  LineOutlined,
  SmallDashOutlined,
  PlayCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import { Modal } from "antd";

// import homeStyles from "../../assets/css/Home.module.css";
import Link from "next/link";

import Music from "./Music";

interface musicsPropsData {
  id: string;
  url: string;
  title: string;
  thumbnail: string;
  description: string;
}

interface musicsProps {
  propsData: musicsPropsData;
}

interface Music {
  id: number;
  imageUrl: string;
  name: string;
  title: string;
}

const defaultMusicList: Music[] = [
  { id: 1, imageUrl: "#", name: "Music", title: "" },
  { id: 2, imageUrl: "#", name: "Music", title: "" },
  { id: 3, imageUrl: "#", name: "Music", title: "" },
  { id: 4, imageUrl: "#", name: "Music", title: "" },
  { id: 5, imageUrl: "#", name: "Music", title: "" },
];

// // Define interfaces for the YouTube API response data
// interface YouTubeApiResponse {
//   items: YouTubeApiItem[];
// }

// interface YouTubeApiItem {
//   id: YouTubeApiItemId;
//   snippet: YouTubeApiSnippet;
// }

// interface YouTubeApiItemId {
//   videoId: string;
// }

// interface YouTubeApiSnippet {
//   title: string;
//   description: string;
//   thumbnails: YouTubeApiThumbnails;
// }

// interface YouTubeApiThumbnails {
//   default: YouTubeApiThumbnail;
//   medium: YouTubeApiThumbnail;
//   high: YouTubeApiThumbnail;
// }

// interface YouTubeApiThumbnail {
//   url: string;
//   width: number;
//   height: number;
// }

// // Define a function to fetch the list of audio tracks from the YouTube API using axios
// function fetchMusicList(apiKey: string) {
//   // Set up the API request URL with the q parameter set to "Audio Library"
//   const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoDefinition=high&videoDimension=2d&videoEmbeddable=true&videoLicense=youtube&videoSyndicated=true&maxResults=10&q=Audio%20Library&type=video&key=${apiKey}`;

//   // Make the API request using axios and return the response data as a Promise
//   return axios.get<YouTubeApiResponse>(apiUrl);
// }

interface Video {
  id: string;
  url: string;
  title: string;
  thumbnail: string;
  description: string;
}
// Define the MusicList component

const Musics = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/videos`)
      .then((response) => {
        // const items = response.data.data.slice(0, 4);
        const items = response.data.data;

        const videoList = items.map((item: any) => {
          const videoId = item.videoId;
          const videoUrl = item.url;
          const title = item.title;
          const thumbnailUrl = item.thumbnail;
          const videDescription = item.description;

          return {
            id: videoId,
            url: videoUrl,
            title,
            thumbnailUrl,
            videDescription,
          };
        });

        setVideos(videoList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePlay = (audioUrl: string) => {
    // play audio
  };

  const handlePause = () => {
    // pause audio
  };

  const handleDownload = (audioUrl: string, title: string) => {
    // download audio
  };

  const handlePlusClick = () => {
    Modal.info({
      title: "Message",
      content:
        "If you click on the music, you will be taken there and can easily find the download link in the video description. Cheers!",
      onOk() {},
    });
  };

  // // Define a state variable to store the list of audio tracks
  // const [youtubeMusicList, setMusicList] = useState<YouTubeApiItem[]>([]);

  // useEffect(() => {
  //   // Replace YOUR_API_KEY with your actual API key
  //   const apiKey = "AIzaSyCuQOzuD-LbT8KsMc4Bq9f7pS83cx14mFU";

  //   // Call the fetchMusicList function to retrieve the list of audio tracks from the YouTube API
  //   fetchMusicList(apiKey)
  //     .then((response) => {
  //       // Set the state variable to the list of audio tracks returned by the API
  //       setMusicList(response.data.items.slice(0, 3));
  //       console.log(response.data.items)
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occur during the API request
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      {/* {videos.map((item) => ( */}
      {videos ? (
        videos.map((item) => {
          return (
            <Music
              key={item.id}
              propsData={{
                id: item.id,
                url: item.url,
                title: item.title,
                thumbnail: item.thumbnail,
                description: item.description,
              }}
            />
          );
        })
      ) : (
        <p>loading...</p>
      )}
      {/* ))} */}
    </>
  );
};

export default Musics;
