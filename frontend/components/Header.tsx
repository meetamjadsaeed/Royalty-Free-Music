import React from "react";

import { Col, Row } from "antd";
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  ReconciliationOutlined,
} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

import MainNav from "./MainNav";
import MainSearchBar from "./MainSearchBar";

import homeStyles from '../assets/css/Home.module.css'


const Header = () => {
  return (
    <>
    <div className={homeStyles.header_wrapper}>
    <Row>
        <Col span={16}><MainNav /></Col>
        <Col span={4}><MainSearchBar/></Col>
        <Col span={2}><ReconciliationOutlined /></Col>
        <Col span={2}><Avatar size={64} icon={<UserOutlined />} /></Col>
      </Row>

    </div>
     
      
    </>
  );
};

export default Header;
