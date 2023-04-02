import React from "react";

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

import homeStyles from "../assets/css/Home.module.css";
import MusicCard from "./MusicCard";

const Recommendation = () => {
  return (
    <div className={homeStyles.recommendation_wrapper}>
      <h2 style={{ color: "#ffffff" }}>What Your Friends Are Listening To</h2>
      <Row>
        <Col span={8}>
          <MusicCard />
        </Col>
        <Col span={8}>
          <MusicCard />
        </Col>
        <Col span={8}>
          <MusicCard />
        </Col>
        
      </Row>
    </div>
  );
};

export default Recommendation;
