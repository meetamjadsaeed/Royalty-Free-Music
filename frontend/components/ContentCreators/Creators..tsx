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
  id: number;
  name: string;
  description: string;
  url: string;
  // thumbnail: string;
  // description: string;
}

interface CreatorPropsData {
  id: number;
  name: string;
  description: string;
  url: string;
}

interface CreatorProps {
  propsData: CreatorPropsData;
}

const Creators = () => {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/creators`)
      .then((response) => {
        // const items = response.data.data.slice(0, 4);
        const items = response.data;

        const creatorsList = items.map((item: any) => {
          const channelId = item.videoId;
          const channelName = item.name;
          const channelDescription = item.description;
          const channelURL = item.url;
          return {
            id: channelId,
            name: channelName,
            description: channelDescription,
            url: channelURL,
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
            creators.map((item, index) => {
              return (
                <Col span={8} key={index}>
                  <Creator
                    propsData={{
                      id: index,
                      name: item.name,
                      description: item.description,
                      url: item.url,
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
