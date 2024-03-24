import React from "react";
import "antd/dist/antd";
import "./home.css";
import { Row, Col, Image, theme, Layout, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

const imageStyle = {
  height: "300px",
  width: "100vw",
};

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const history = useNavigate();

  const handleFirstCategory = () => {
    history("/categories");
    localStorage.setItem("categorySelect", "drugs");
  };

  const handleSecondCategory = () => {
    history("/categories");
    localStorage.setItem("categorySelect", "fireArms");
  };

  const handleThirdCategory = () => {
    history("/categories");
    localStorage.setItem("categorySelect", "digitalEvidence");
  };

  const handleFourtCategory = () => {
    history("/categories");
    localStorage.setItem("categorySelect", "documents");
  };

  const handleFifthCategory = () => {
    history("/categories");
    localStorage.setItem("categorySelect", "dna");
  };

  const handleSixthCategory = () => {
    history("/categories");
    localStorage.setItem("categorySelect", "physical");
  };

  const handleSeventhCategory = () => {
    history("/categories");
    localStorage.setItem("categorySelect", "photographs");
  };
  return (
    <div
      style={{
        background: colorBgContainer,
        minHeight: 280,
        padding: 24,
        backgroundColor: "rgba(19, 55, 95, 1)",
        // borderRadius: borderRadiusLG,
      }}
    >
      <Content
        style={{
          padding: "24px 48px",
        }}
      >
        <Carousel autoplay autoplaySpeed={5000}>
          <div>
            <Image
              style={imageStyle}
              preview={false}
              src="/assets/HOME page picture (2).jpeg"
            />
          </div>
          <div>
            <Image
              style={imageStyle}
              preview={false}
              src="/assets/HOME page picture (5).jpeg"
            />
          </div>
          <div>
            <Image
              style={imageStyle}
              preview={false}
              src="/assets/HOME page picture (1).jpeg"
            />
          </div>
        </Carousel>
        <div className="home-tagline">
          <h1>
            Secure. Track. Guard. Ensuring every piece of evidence is accounted
            for.
          </h1>
        </div>
        <Row>
          <div
            className="image-row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "20px",
              marginTop: "3rem",
            }}
          >
            <Col
              xs={{
                flex: "100%",
              }}
              sm={{
                flex: "50%",
              }}
              md={{
                flex: "40%",
              }}
              lg={{
                flex: "20%",
              }}
              xl={{
                flex: "10%",
              }}
            >
              <div
                className="image-column"
                onClick={() => handleFirstCategory()}
              >
                <h3>DRUGS</h3>
                <Image
                  style={{ cursor: "pointer", width: "200px", height: "200px" }}
                  preview={false}
                  src="/assets/DRUGS.jpeg"
                />
              </div>
            </Col>
            <Col
              xs={{
                flex: "100%",
              }}
              sm={{
                flex: "50%",
              }}
              md={{
                flex: "40%",
              }}
              lg={{
                flex: "20%",
              }}
              xl={{
                flex: "10%",
              }}
            >
              <div
                className="image-column"
                onClick={() => handleSecondCategory()}
              >
                <h3>FIREARMS</h3>
                <Image
                  style={{ cursor: "pointer", width: "200px", height: "200px" }}
                  preview={false}
                  src="/assets/FIREARMS IDENTIFICATION.jpeg"
                />
              </div>
            </Col>
            <Col
              xs={{
                flex: "100%",
              }}
              sm={{
                flex: "50%",
              }}
              md={{
                flex: "40%",
              }}
              lg={{
                flex: "20%",
              }}
              xl={{
                flex: "10%",
              }}
            >
              <div
                className="image-column"
                onClick={() => handleThirdCategory()}
              >
                <h3>DIGITAL EVIDENCE</h3>
                <Image
                  style={{ cursor: "pointer", width: "200px", height: "200px" }}
                  preview={false}
                  src="/assets/Extra picture.jpeg"
                />
              </div>
            </Col>
            <Col
              xs={{
                flex: "100%",
              }}
              sm={{
                flex: "50%",
              }}
              md={{
                flex: "40%",
              }}
              lg={{
                flex: "20%",
              }}
              xl={{
                flex: "10%",
              }}
            >
              <div
                className="image-column"
                onClick={() => handleFourtCategory()}
              >
                <h3>DOCUMENTS</h3>
                <Image
                  style={{ cursor: "pointer", width: "200px", height: "200px" }}
                  preview={false}
                  src="/assets/images (8) (1).jpeg"
                />
              </div>
            </Col>
            <Col
              xs={{
                flex: "100%",
              }}
              sm={{
                flex: "50%",
              }}
              md={{
                flex: "40%",
              }}
              lg={{
                flex: "20%",
              }}
              xl={{
                flex: "10%",
              }}
            >
              <div
                className="image-column"
                onClick={() => handleFifthCategory()}
              >
                <h3>DNA</h3>
                <Image
                  style={{ cursor: "pointer", width: "200px", height: "200px" }}
                  preview={false}
                  src="/assets/images (5) (1).jpeg"
                />
              </div>
            </Col>
            <Col
              xs={{
                flex: "100%",
              }}
              sm={{
                flex: "50%",
              }}
              md={{
                flex: "40%",
              }}
              lg={{
                flex: "20%",
              }}
              xl={{
                flex: "10%",
              }}
            >
              <div
                className="image-column"
                onClick={() => handleSixthCategory()}
              >
                <h3>PHYSICAL</h3>
                <Image
                  style={{ cursor: "pointer", width: "200px", height: "200px" }}
                  preview={false}
                  src="/assets/images (10).jpeg"
                />
              </div>
            </Col>
            <Col
              xs={{
                flex: "100%",
              }}
              sm={{
                flex: "50%",
              }}
              md={{
                flex: "40%",
              }}
              lg={{
                flex: "20%",
              }}
              xl={{
                flex: "10%",
              }}
            >
              <div
                className="image-column"
                onClick={() => handleSeventhCategory()}
              >
                <h3>PHOTOGRAHPS</h3>
                <Image
                  style={{ cursor: "pointer", width: "200px", height: "200px" }}
                  preview={false}
                  src="/assets/PHOTOGRAPHY.jpeg"
                />
              </div>
            </Col>
          </div>
        </Row>
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "30px",
              marginBottom: "50px",
              gap: "20px",
            }}
          >
            <LeftOutlined style={{ color: "white" }} />
            <Button className="btn-grad" style={{ width: "400px" }}>
              Show More
            </Button>
            <RightOutlined style={{ color: "white" }} />
          </div>
        </Row>
      </Content>
    </div>
  );
};

export default Home;
