import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Col, Row } from "antd";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { Card } from "antd";

import homeStyles from "../../assets/css/Home.module.css";
import MusicCard from "../Card/MusicCard";
import Creator from "./Creator";

interface Creator {
  id: string;
  title: string;
  description: string;
  // thumbnail: string;
  // description: string;
}

interface CreatorPropsData {
  id: string;
  title: string;
  description: string;
}

interface CreatorProps {
  propsData: CreatorPropsData;
}

const Creators = () => {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/videos`)
      .then((response) => {
        // const items = response.data.data.slice(0, 4);
        const items = response.data.data;

        const creatorsList = items.map((item: any) => {
          const videoId = item.videoId;
          // const videoUrl = item.url;
          const VideoTitle = item.title;
          // const thumbnailUrl = item.thumbnail;
          const videDescription = item.description;

          return {
            id: videoId,
            // url: videoUrl,
            title: VideoTitle,
            // thumbnailUrl,
            description: videDescription,
          };
        });

        setCreators(creatorsList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className={homeStyles.creators_wrapper}>
        <h2 style={{ color: "#ffffff" }}>Browse By Creators</h2>
        <Row gutter={16}>
          {creators ? (
            creators.map((item) => {
              return (
                <Col span={8} key={item.id}>
                  <Creator
                    propsData={{
                      id: item.id,
                      title: item.title,
                      description: item.description,
                    }}
                  />
                </Col>
              );
            })
          ) : (
            <p>loading...</p>
          )}
          {/* <Col span={8}>
            <Creator />
          </Col>
          <Col span={8}>
            <Creator />
          </Col> */}
        </Row>
      </div>
    </>
  );
};

export default Creators;
