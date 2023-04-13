import { Button } from "antd";
import { Modal } from "antd";

import React from "react";

const Video = () => {
  const handlePlusClick = () => {
    Modal.info({
      title: "Message",
      content:
        "If you click on the VIDEO, you will be taken there and can easily find the download link in the video description. Cheers!",
      onOk() {},
    });
  };
  return (
    <>
      <div
        className="music-video"
        style={{
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          //   padding: "10px",
        }}
      >
        <div style={{ marginTop: "10px" }}></div>
        <iframe
          id="myVideo"
          src="https://www.youtube.com/embed/Eq67aA37ssA"
          allowfullscreen
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        ></iframe>
        <div style={{ marginTop: "10px" }}></div>
        <Button style={{ marginTop: "10px" }} onClick={handlePlusClick}>
          Download
        </Button>
      </div>
    </>
  );
};

export default Video;
