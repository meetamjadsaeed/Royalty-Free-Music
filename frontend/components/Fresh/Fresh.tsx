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

import homeStyles from "../../assets/css/Home.module.css";
import MusicCard from "../Card/MusicCard";
import Filters from "../Filter/Filters";
import AudioCard from "../Card/AudioCard";

const Fresh = () => {
  return (
    <>
      <div className={homeStyles.freshmusic_wrapper}>
        {/* <Filters/> */}
        <h2 style={{ color: "#ffffff" }}>Fresh Music</h2>
        {/* <MusicCard /> */}
        {/* <AudioCard/> */}
        <Row>
          <Col span={12}>
            <AudioCard />
          </Col>
          <Col span={12}>
            <AudioCard />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Fresh;
