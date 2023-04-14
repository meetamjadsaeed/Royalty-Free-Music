import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";


import Link from "next/link";

const about = () => {
  return (
    <>
      {/* <Header/> */}

      {/* <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
        status="success"
        colorTextHeading="#ffffff"
        extra={
          <Link href="/">
            <Button type="primary">Home</Button>
          </Link>
        }
      /> */}
      <h2>About</h2>
      <p>
        A wide range of music genres and styles, from classical to modern, to
        cater to the diverse tastes of your audience. A search function that
        allows users to quickly find the type of music they are looking for.
        Audio previews of each track, so users can listen to a sample before
        downloading. High-quality audio files in various formats (e.g. MP3, WAV)
        that users can easily download.
      </p>
      <h2>Features (Pending)</h2>
      <p>
        User accounts, which allow users to create playlists, save their
        favorite tracks, and access their download history. Advanced search
        filters, such as tempo, mood, and instrumentation, to help users find
        exactly what they need. Licensing options for different types of usage
        (e.g. personal, commercial), with clear terms and conditions for each.
        Recommendations and playlists curated by music experts, to help users
        discover new music they may enjoy. Integration with popular video
        editing or content creation software, so users can easily incorporate
        the music into their projects.
      </p>

      <Link href="/">
        <Button type="primary">Home</Button>
      </Link>

      {/* <MainFooter /> */}
    </>
  );
};

export default about;
