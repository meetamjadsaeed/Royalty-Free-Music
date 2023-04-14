import React from "react";

import { Col, Row } from "antd";

import ByGenre from "./ByGenre";
import ByMood from "./ByMood";
import ByCreator from "./ByCreator";

const Filters = () => {
  return (
    <>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <ByGenre />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <ByMood />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <ByCreator />
        </Col>
      </Row>
    </>
  );
};

export default Filters;
