import React from "react";

import { Card } from "antd";
import { Button, Space } from "antd";
import Link from "next/link";

interface CreatorPropsData {
  id: number;
  name: string;
  description: string;
  url: string;
}

interface CreatorProps {
  propsData: CreatorPropsData;
}

const Creator = ({ propsData }: CreatorProps) => {
  return (
    <>
      <Card
      key={propsData?.id}
        title={propsData?.name}
        bordered={false}
        style={{
          background: "rgb(255 255 255 / 31%)",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {propsData?.description.slice(0,250)}
        {/* <Link href={propsData?.url}> */}
        <a target="_blank" href={propsData?.url} rel="noopener noreferrer">
          <Button type="primary">Visit Creator</Button>
        {/* </Link> */}
        </a>
      </Card>
    </>
  );
};

export default Creator;
