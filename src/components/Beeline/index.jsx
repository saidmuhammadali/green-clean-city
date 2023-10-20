import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Dow, Img, Wrap } from "./style";
import bee from "../../img/bee.jpg";
import beee from "../../img/bee2.jpg";
import beqe from "../../img/bee3.jpg";

function Beeline() {
  let settings = {
    dots: true,
    infinity: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Dow>
      <Carousel {...settings}>
        <Wrap>
          <Img src={bee} alt="" />
        </Wrap>
        <Wrap>
          <Img src={beee} alt="" />
        </Wrap>
        <Wrap>
          <Img src={beqe} alt="" />
        </Wrap>
      </Carousel>
    </Dow>
  );
}

export default Beeline;
