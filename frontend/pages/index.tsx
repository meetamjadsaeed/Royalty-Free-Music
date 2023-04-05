import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../assets/css/Home.module.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Fresh from "../components/Fresh/Fresh";
import Recommendation from "../components/Recommendation/Recommendation";
import WeekendHits from "../components/WeekendHits/WeekendHits";
import Creators  from "../components/ContentCreators/Creators.";

const Home: NextPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Fresh />
      <Recommendation />
      <WeekendHits />
      <Creators/>
    </>
  );
};

export default Home;
