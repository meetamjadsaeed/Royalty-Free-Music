import React from "react";

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
} from "@ant-design/icons";
import { Image } from "antd";

import homeStyles from "../../assets/css/Home.module.css";
import MusicCard from "../Card/MusicCard";
import Music from "../Music/Music";

const HeroRight = () => {
  return (
    <>
      <h2 style={{ color: "#ffffff" }}>Top Royalty Free Music Download</h2>
      <div className={homeStyles.musiclist_wrapper}>
        <MusicCard />
        {/* <Music/> */}
      </div>
    </>
  );
};

export default HeroRight;
