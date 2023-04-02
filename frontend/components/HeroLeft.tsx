import React from "react";

import { Carousel } from "antd";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  ReconciliationOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const contentStyle = {
  height: "160px",
  color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
};
import { Button, Space } from "antd";

import homeStyles from "../assets/css/Home.module.css";

const HeroLeft = () => {
  return (
    <>
      <Carousel autoplay style={{ marginTop: "300px" }}>
        <div>
          <div style={contentStyle}>
            <h1>Listen to what is trending</h1>
            <Button type="primary">Play Now</Button>
            <ul className={homeStyles.menu_wrapper}>
              <a>
                <li className={homeStyles.menu_item}>
                  <InstagramOutlined />
                </li>
              </a>
              <a>
                <li className={homeStyles.menu_item}>
                  <InstagramOutlined />
                </li>
              </a>
              <a>
                <li className={homeStyles.menu_item}>
                  <InstagramOutlined />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h1>Listen to what is trending</h1>
            <Button type="primary">Play Now</Button>
            <ul className={homeStyles.menu_wrapper}>
              <a>
                <li className={homeStyles.menu_item}>
                  <InstagramOutlined />
                </li>
              </a>
              <a>
                <li className={homeStyles.menu_item}>
                  <InstagramOutlined />
                </li>
              </a>
              <a>
                <li className={homeStyles.menu_item}>
                  <InstagramOutlined />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HeroLeft;
