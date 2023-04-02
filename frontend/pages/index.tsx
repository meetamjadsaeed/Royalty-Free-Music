import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../assets/css/Home.module.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Fresh from "../components/Fresh";
import Recommendation from "../components/Recommendation";
import WeekendHits from "../components/WeekendHits";

const Home: NextPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Fresh />
      <Recommendation />
      <WeekendHits />
    </>
  );
};

export default Home;
