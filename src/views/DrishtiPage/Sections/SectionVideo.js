import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import img1 from "assets/img/d1.jpg";
import img2 from "assets/img/d2.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import SectionCarousel from "./SectionCarousel";
import { Carousel } from "react-bootstrap";
import YoutubeEmbed from "../YoutubeEmbed";

const useStyles = makeStyles(styles);

const SectionVideo = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>WHAT THEY SAY</h2>
            {/* <SectionCarousel
              image1={img2}
              image2={img2}
              image3={img2}
              text={`Dr R
                P Govt. Medical College & Hospital, Kangra-HP (India)`}
            /> */}
            <div className="container">
              <Carousel>
                <Carousel.Item>
                  <YoutubeEmbed autoplay={0} embedId="N-oso2rF-gU" sound={1} />

                  <Carousel.Caption>
                    {/* <h3 className="font-weight-bold">
                      Dr. Ashish Verma Observing Drishti
                    </h3> */}
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
            <h3>
              <strong>
              </strong>
            </h3>
            <h4 className={classes.description}>
            </h4>
            {/* <Button
              color="info"
              size="lg"
              href="https://drive.google.com/file/d/1Wtz4WFoSEYPVyvoEXikJW-i7p6nDYYiD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-play" />
              Watch video
            </Button> */}
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
};

export default SectionVideo;
