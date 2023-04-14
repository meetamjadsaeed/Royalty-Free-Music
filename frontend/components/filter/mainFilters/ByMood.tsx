import React from 'react'
import { Select } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const ByMood = () => {
  return (
    <Select
      mode="tags"
      style={{ width: "100%" }}
      placeholder="Filter By Mood"
      onChange={handleChange}
      options={options}
    />
  )
}

export default ByMood