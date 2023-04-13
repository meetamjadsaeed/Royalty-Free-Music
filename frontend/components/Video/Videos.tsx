import React from "react";
import { Row, Col } from "antd";
import { Button } from "antd/es/radio";

const Videos = () => {
  return (
    <>
      <div className="music-video-container">
        <Row gutter={[16, 16]} justify="center" style={{ marginTop: "5%" }}>
          <Col span={24}>
            <div
              id="card-container"
              data-offset="2"
              style={{ marginTop: "5%" }}
            >
              <div className="pg">
                <img src="http://riccardotartaglia.it/img/deadpool/deadpool.png" />
              </div>
              <div id="card">
                <div className="shine"></div>
                <div className="text-block">
                  <h1>
                    Deadpool <small>(2016)</small>
                  </h1>
                  <h3>Action, Adventure, Sci-Fi</h3>
                  <p>
                    Deadpool is a 2016 American superhero film based on the
                    Marvel Comics character of the same name. It is the eighth
                    installment of the X-Men film series, and is directed by Tim
                    Miller.
                  </p>
                  <button>Download</button>
                </div>
              </div>
            </div>
          </Col>
          {/* <Col span={24}>
            <div
              id="card-container"
              data-offset="2"
              style={{ marginTop: "5%" }}
            >
              <div className="pg">
                <img src="http://riccardotartaglia.it/img/deadpool/deadpool.png" />
              </div>
              <div id="card">
                <div className="shine"></div>
                <div className="text-block">
                  <h1>
                    Deadpool <small>(2016)</small>
                  </h1>
                  <h3>Action, Adventure, Sci-Fi</h3>
                  <p>
                    Deadpool is a 2016 American superhero film based on the
                    Marvel Comics character of the same name. It is the eighth
                    installment of the X-Men film series, and is directed by Tim
                    Miller.
                  </p>
                  <button>Watch Trailer</button>
                </div>
              </div>
            </div>
          </Col> */}
          {/* <Col span={12}>
            <div id="card-container" data-offset="2">
              <div className="pg">
                <img src="http://riccardotartaglia.it/img/deadpool/deadpool.png" />
              </div>
              <div id="card">
                <div className="shine"></div>
                <div className="text-block">
                  <h1>
                    Deadpool <small>(2016)</small>
                  </h1>
                  <h3>Action, Adventure, Sci-Fi</h3>
                  <p>
                    Deadpool is a 2016 American superhero film based on the
                    Marvel Comics character of the same name. It is the eighth
                    installment of the X-Men film series, and is directed by Tim
                    Miller.
                  </p>
                  <button>Watch Trailer</button>
                </div>
              </div>
            </div>
          </Col> */}
          {/* <Col span={8}>
            <div className="music-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Music Video 3"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </Col> */}
        </Row>
        {/* <Row gutter={[16, 16]} justify="center" style={{ marginTop: "5%" }}>
          <Col span={24}>
            <div id="card-container" data-offset="2" style={{ marginTop: "5%" }}>
              <div className="pg">
                <img src="http://riccardotartaglia.it/img/deadpool/deadpool.png" />
              </div>
              <div id="card">
                <div className="shine"></div>
                <div className="text-block">
                  <h1>
                    Deadpool <small>(2016)</small>
                  </h1>
                  <h3>Action, Adventure, Sci-Fi</h3>
                  <p>
                    Deadpool is a 2016 American superhero film based on the
                    Marvel Comics character of the same name. It is the eighth
                    installment of the X-Men film series, and is directed by Tim
                    Miller.
                  </p>
                  <button>Watch Trailer</button>
                </div>
              </div>
            </div>
          </Col>
        </Row> */}
      </div>
    </>
  );
};

export default Videos;
