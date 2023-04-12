import React from "react";

import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  ReconciliationOutlined,
  BackwardOutlined,
  PauseOutlined,
  ForwardOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import { Slider, Switch } from "antd";
import { useState } from "react";

import homeStyles from "../assets/css/Home.module.css";

const CurrentMusic = () => {
  const [disabled, setDisabled] = useState(false);
  // const onChange = (checked) => {
  //   setDisabled(checked);
  // };
  return (
    <>
      <div className={homeStyles.currentmusic_wrapper}>
        <div className={homeStyles.currentmusic_items}>
          <a>
            <Image
              width={50}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              // className={homeStyles.currentmusic_item}
            />
          </a>
          <a>
            <h4 className={homeStyles.currentmusic_item}>My Feelings</h4>
          </a>
        </div>
        <div className={homeStyles.currentmusic_items}>
          <a>
            <p className={homeStyles.currentmusic_item}>
            <BackwardOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
            <PauseOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
            <ForwardOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
            <RetweetOutlined />
            </p>
          </a>
        </div>

        {/* <div className={homeStyles.currentmusic_items}>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
        </div> */}

        {/* <div className={homeStyles.currentmusic_items}>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
          <a>
            <p className={homeStyles.currentmusic_item}>
              <HomeOutlined />
            </p>
          </a>
        </div> */}

        {/* <div className={homeStyles.currentmusic_items}>
          <p className={homeStyles.currentmusic_item}>3:25</p>
          <Slider
            defaultValue={30}
            // disabled={disabled}
            // className={homeStyles.currentmusic_item}
          />
          <p className={homeStyles.currentmusic_item}>-0:15</p>
        </div> */}
        {/* <div className={homeStyles.currentmusic_items}>
          <p className={homeStyles.currentmusic_item}>
            {" "}
            <HomeOutlined />
          </p>

          <Slider
            defaultValue={30}
            disabled={disabled}
            className={homeStyles.currentmusic_item}
          />
        </div> */}
      </div>
    </>
  );
};

export default CurrentMusic;
