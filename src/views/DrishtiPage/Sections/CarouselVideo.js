import React from "react";
import { Carousel } from "react-bootstrap";
import YoutubeEmbed from "../YoutubeEmbed";

const CarouselVideo = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <YoutubeEmbed autoplay={0} embedId="oZ79gEps3kA" sound={1} />
          <Carousel.Caption>
            <h3 className="font-weight-bold">Blind Person with Device Drishti</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <YoutubeEmbed autoplay={0} embedId="dxedsV1GjXA" sound={1}/>

          <Carousel.Caption>
            <h3 className="font-weight-bold">Blind Person Changing Direction using Drishti</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <YoutubeEmbed embedId="0Kl1ucZuSZ8" sound={1}/>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default CarouselVideo;
