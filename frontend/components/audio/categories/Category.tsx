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
  CloudDownloadOutlined,
} from "@ant-design/icons";
import Link from "next/link";

interface CategoryProps {
  catProps: {
    id: number;
    url: string;
    name: string;
    catSlug: string;
  };
}

const Category: React.FC<CategoryProps> = ({ catProps }) => {
  const { id, url, name } = catProps;
  return (
    <>
      <>
        <div className="audioCatWrapper">
          <Link href={url ?? url}>
            <div className="audioCat">
              <div className="catContent">
                <h2>{name ?? name}</h2>
              </div>
            </div>
          </Link>
        </div>
      </>
    </>
  );
};

export default Category;
