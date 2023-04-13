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
  PlayCircleOutlined,
  ArrowRightOutlined,
  CloudDownloadOutlined
} from "@ant-design/icons";

const AudioCard = () => {
  return (
    <>
      <div className="audioCard">
        <div className="image">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimge.kugou.com%2Fstdmusic%2F20150718%2F20150718170411961983.jpg&f=1&nofb=1"
            alt=""
          />
        </div>
        <div className="content">
          <h1>Dark paradise</h1>
          <p>Lana dey ray</p>
          <div className="controlls">
            <a href="">
            <PlusOutlined />
              {/* <i className="fa fa-backward" aria-hidden="true"></i> */}
            </a>
            <a href="">
            <PlayCircleOutlined />
              {/* <i className="fa fa-pause" aria-hidden="true"></i> */}
            </a>
            <a href="">
            <CloudDownloadOutlined />
              {/* <i className="fa fa-forward" aria-hidden="true"></i> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioCard;
