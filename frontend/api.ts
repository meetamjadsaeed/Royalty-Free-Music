import axios from 'axios';

export const getVideos = async () => {
  const url = 'https://www.googleapis.com/youtube/v3/playlistItems';
  const params = {
    part: 'snippet',
    playlistId: 'UUV_x5Aoq2SEbR3Aq8zk8mSQ',
    key: process.env.YOUTUBE_API_KEY,
    maxResults: 20,
  };
  const res = await axios.get(url, { params });
  return res.data.items;
};
