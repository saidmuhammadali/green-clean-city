import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Dow, Img, Wrap } from "./style";
import mobi from "../../img/mobi.png";
import mobie from "../../img/mobi2.png";
import mobii from "../../img/mobi3.jpg";
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
          <Img src={mobi} alt="" />
        </Wrap>
        <Wrap>
          <Img src={mobie} alt="" />
        </Wrap>
        <Wrap>
          <Img src={mobii} alt="" />
        </Wrap>
      </Carousel>
    </Dow>
  );
}

export default Beeline;
