import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Row, Col } from "antd";
import { Button } from "antd/es/radio";

interface musicVideos {
  id: number;
  imageUrl: string;
  name: string;
  title: string;
}

import Video from "./Video";

interface Video {
  id: string;
  url: string;
  title: string;
  thumbnail: string;
  description: string;
}

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const domain = process.env.DOMAIN_NAME || "localhost";
  const port = process.env.PORT || 3000;

  useEffect(() => {
    axios
      .get(`${protocol}://${domain}:${port}/api/videos`)
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

  return (
    <>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "5%" }}>
        {videos ? (
          videos.map((item) => {
            return (
              <>
                <Col span={8}>
                  <Video />
                </Col>
              </>
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </Row>
    </>
  );
};

export default Videos;
