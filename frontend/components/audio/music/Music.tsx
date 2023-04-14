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
} from "@ant-design/icons";
import { Image } from "antd";
import { Modal } from "antd";

// import homeStyles from "../../assets/css/Home.module.css";
import Link from "next/link";

interface musicsPropsData {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

interface musicsProps {
  propsData: musicsPropsData;
}

const Music = ({ propsData }: musicsProps) => {
  const handlePlusClick = () => {
    Modal.info({
      title: "Message",
      content:
        "If you click on the music, you will be taken there and can easily find the download link in the video description. Cheers!",
      onOk() {},
    });
  };
  return (
    <>
      <div className="musiccard_wrapper">
        <ul className="musiccard_wrapper">
          <a>
            <li className="musiccard_item">
              <PlayCircleOutlined />
            </li>
          </a>

          <li className="musiccard_item">
            <Image width={30} src="https://i.pickadummy.com/300" />
          </li>
          <a href={propsData?.url} target="_blank">
            <li className="musiccard_item">
              {/* {musicItem.snippet.title} */}
              {propsData?.title}
            </li>
          </a>

          <a>
            <li className="musiccard_item" onClick={handlePlusClick}>
              <PlusOutlined />
            </li>
          </a>
          <a href={propsData?.url} target="_blank">
            <li className="musiccard_item">
              <ArrowRightOutlined />
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Music;
