import React from "react";
import { Carousel } from "antd";
import Expensify1 from "../../assets/projectimages/Expensify Front.png";
import Expensify2 from "../../assets/projectimages/expensify2.png";
import Expensify3 from "../../assets/projectimages/expenfify 3.png";
import Expensify4 from "../../assets/projectimages/expenfiy 4.png";
import Expensify5 from "../../assets/projectimages/logout.png";

const StudentCommunity = () => {
  const contentStyle = {
    borderRadius: "5px",
    objectFit: "cover",
  };
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <Carousel {...settings}>
      <div>
        <img
          src={Expensify1}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode1"
        ></img>
      </div>
      <div>
        <img
          src={Expensify2}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode2"
        ></img>
      </div>
      <div>
        <img
          src={Expensify3}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode3"
        ></img>
      </div>
      <div>
        <img
          src={Expensify4}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode4"
        ></img>
      </div>
      <div>
        <img
          src={Expensify5}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode5"
        ></img>
      </div>
    </Carousel>
  );
};

export default StudentCommunity;
