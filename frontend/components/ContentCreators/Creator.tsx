import React from "react";

import { Card } from "antd";

interface CreatorPropsData {
    id: string;
    title: string;
    description: string;
  }
  
  interface CreatorProps {
    propsData: CreatorPropsData;
  }

const Creator = ({ propsData }: CreatorProps) => {
  return (
    <>
      <Card
        title={propsData?.title}
        bordered={false}
        style={{ background: "rgb(255 255 255 / 31%)", marginTop:"20px", marginBottom:"20px" }}
      >
        {propsData?.description}
      </Card>
    </>
  );
};

export default Creator;
