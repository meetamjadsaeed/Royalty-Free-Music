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

// import homeStyles from "../../assets/css/Home.module.css";
// import MusicCard from "../../Audio/Music/MusicCard";
// import Music from "../../Audio/Music/Music";
// import Categories from "../../Audio/Categories/Categories";
import MusicCard from "../../audio/music/MusicCard";
import Music from "../../audio/music/Music";
import Categories from "../../audio/categories/Categories";


const HeroRight = () => {
  return (
    <>
      <h2 style={{ color: "#ffffff" }}>Browse By Categories</h2>
      <div className="musiclist_wrapper">
        <Categories />
      </div>
    </>
  );
};

export default HeroRight;
