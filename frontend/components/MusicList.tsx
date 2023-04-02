import axios from 'axios';
import ytdl from 'ytdl-core';

import { useState, useEffect } from "react";


const API_KEY = 'AIzaSyCuQOzuD-LbT8KsMc4Bq9f7pS83cx14mFU';
const CHANNEL_ID = '@VlogNoCopyrightMusic';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  audioUrl: string;
}

export default function MusicList() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCu36GMRLVnTQX9a4GvozkoQ&maxResults=50&order=date&type=video&key=AIzaSyCuQOzuD-LbT8KsMc4Bq9f7pS83cx14mFU`
      )
      .then((response) => {
        const items = response.data.items;

        const videoList = items.map((item: any) => {
          const videoId = item.id.videoId;
          const title = item.snippet.title;
          const thumbnailUrl = item.snippet.thumbnails.medium.url;
          const audioUrl = `http://www.youtube.com/watch?v=${videoId}`;

          return { id: videoId, title, thumbnailUrl, audioUrl };
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

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <img src={video.thumbnailUrl} alt={video.title} />
          <p>{video.title}</p>
          <button onClick={() => handlePlay(video.audioUrl)}>Play</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={() => handleDownload(video.audioUrl, video.title)}>Download</button>
        </div>
      ))}
    </div>
  );
}
