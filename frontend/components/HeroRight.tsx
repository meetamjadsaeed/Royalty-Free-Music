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

import homeStyles from "../assets/css/Home.module.css";
import MusicCard from "./MusicCard";

const HeroRight = () => {
  return (
    <>
      <h2 style={{ color: "#ffffff" }}>Top Royalty Free Music Download</h2>
      <div className={homeStyles.musiclist_wrapper}>
        {/* <div className={homeStyles.musiccard_wrapper_active}>
          <ul className={homeStyles.musiccard_wrapper}>
            <a>
              <li className={homeStyles.musiccard_item}>
                <PauseCircleOutlined />
              </li>
            </a>
            <a>
              <li className={homeStyles.musiccard_item}>
                <Image
                  width={30}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </li>
            </a>
            <a>
              <li className={homeStyles.musiccard_item}>My Feelings</li>
            </a>
            <a>
              <li className={homeStyles.musiccard_item}>
                <PlusOutlined />
              </li>
            </a>
            <a>
              <li className={homeStyles.musiccard_item}>
                <SmallDashOutlined />
              </li>
            </a>
          </ul>
        </div> */}

        <MusicCard />
      </div>
    </>
  );
};

export default HeroRight;
