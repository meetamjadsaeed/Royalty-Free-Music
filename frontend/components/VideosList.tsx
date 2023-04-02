import { NextPage } from "next";
import { useState, useEffect } from "react";
import axios from "axios";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

const VideosList: NextPage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const channelId = "UC_aEa8K-EOJ3D6gOs7HcyNg"; // Channel ID of VlogNoCopyrightMusic
  const ApiKey = "AIzaSyCuQOzuD-LbT8KsMc4Bq9f7pS83cx14mFU"; // 


  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&key=${ApiKey}`
        );
        const videoItems = response.data.items;
        const videoList = videoItems.map((video: any) => ({
          id: video.id.videoId,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.medium.url,
        }));
        setVideos(videoList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideosList;
