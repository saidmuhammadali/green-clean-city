import React from "react";
import video from "../../img/video.mp4";
import { DIv, H1, P, Row } from "./style";

function About() {
  return (
    <>
      <Row>
        <DIv>
          <H1>About Us</H1>
          <P>
            Lorem ipsum dolor <br /> sit, amet consectetur <br /> adipisicing
            elit.Perspiciatis <br /> atque voluptatem sunt ex.
          </P>
        </DIv>
        <div>
          <video width="320" height="240" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </Row>
    </>
  );
}

export default About;
