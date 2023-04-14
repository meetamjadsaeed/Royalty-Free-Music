import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../assets/css/Home.module.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useState, useEffect } from "react";
import { Modal } from "antd";

// import Header from "../components/Layout/MainHeader/MainHeader";
// import Hero from "../components/Layout/Hero/Hero";
// import Fresh from "../components/Audio/Fresh/Fresh";
// import Recommendation from "../components/Recommendation/Recommendation";
// import WeekendHits from "../components/WeekendHits/WeekendHits";
// import Creators from "../components/Video/Creator/Creators.";
// import MainFooter from "../components/Layout/MainFooter/MainFooter";


import MainHeader from "../components/layout/mainHeader/MainHeader";
// import MainFooter from "../components/layout/mainFooter/MainFooter;
import Hero from "../components/layout/hero/Hero";



const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      {/* <Header /> */}
      <div>
        <Modal
          title="Welcome to Top Royalty Free Music Downloader"
          open={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Thank you for visiting our website!</p>
          <p>
            Please wait for a few minutes as we are retrieving the data from
            multiple sources, which may take some time due to the large amount
            of data. Once the data is fetched, you can download your music. We
            hope you have a pleasant experience.
          </p>
        </Modal>
      </div>
      <Hero />
      {/* <Fresh />
      <Creators />
      <Recommendation />
      <WeekendHits />
      <MainFooter/> */}
    </>
  );
};

export default Home;


// music with categories 
// all musics
// musics from top youtube channels 
// Browse By Creators ( youtube channels )


