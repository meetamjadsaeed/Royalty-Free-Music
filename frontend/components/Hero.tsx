import React from "react";

import { Col, Row } from "antd";

import homeStyles from "../assets/css/Home.module.css";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import CurrentMusic from "./CurrentMusic";

const Hero = () => {
  return (
    <>
      <div className={homeStyles.hero_wrapper}>
        <div className="container">
          <Row>
            <Col span={16}>
              <HeroLeft />
            </Col>
            <Col span={8}>
              <HeroRight />
            </Col>
          </Row>
        </div>
      </div>
      {/* <CurrentMusic/> */}
    </>
  );
};

export default Hero;
