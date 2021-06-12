import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React from "react";
import img1 from "assets/img/tutorial.JPG";
import img2 from "assets/img/flow/t2.png";
import img3 from "assets/img/flow/t3.png";
import img4 from "assets/img/flow/t4.png";
import img5 from "assets/img/flow/t5.png";
import img6 from "assets/img/flow/t6.png";
import img7 from "assets/img/flow/t7.png";
import img8 from "assets/img/flow/t8.png";
import img9 from "assets/img/flow/t9.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/custom.css";
import Fade from "react-reveal/Fade";

const TutorialFlow = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />

      <h2 className="text-center font-weight-bold my-4">
        <strong>How our Device will work?</strong>
      </h2>
      <Fade left>
        <GridContainer justify="right">
          <GridItem xs={12} sm={12} md={16}>
            <img
              src={img1}
              class="img-fluid tutorial-image"
              alt="Responsive image"
            />
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <img
              src={img2}
              class="img-fluid tutorial-image"
              alt="Responsive image"
            />
          </GridItem> */}
          {/* <GridItem xs={12} sm={12} md={4}>
            <img
              src={img3}
              class="img-fluid tutorial-image"
              alt="Responsive image"
            />
          </GridItem> */}
        </GridContainer>
      </Fade>
      <br />
      <br />
      <Fade right>
        <GridContainer justify="center">
          {/* <GridItem xs={12} sm={12} md={4}>
            <img
              src={img6}
              class="img-fluid tutorial-image"
              alt="Responsive image"
            />
          </GridItem> */}
          {/* <GridItem xs={12} sm={12} md={4}>
            <img
              src={img5}
              class="img-fluid tutorial-image"
              alt="Responsive image"
            />
          </GridItem> */}
          {/* <GridItem xs={12} sm={12} md={4}>
            <img
              src={img4}
              class="img-fluid tutorial-image"
              alt="Responsive image"
            />
          </GridItem> */}
        </GridContainer>
      </Fade>
      <br />
      <br />
      <Fade left>
        <GridContainer justify="center">
          {/* <GridItem xs={12} sm={12} md={4}>
            <img
              src={img7}
              class="img-fluid tutorial-image"
              alt="Responsive image"
            />
          </GridItem> */}
          {/* <GridItem xs={12} sm={12} md={4}>
            <img
              src={img8}
              class="img-fluid tutorial-image"
              alt="Responsive image"
            />
          </GridItem> */}
          {/* <GridItem xs={12} sm={12} md={4}>
            <img
              src={img9}
              class="img-fluid tutorial-image"
              alt="Responsive image"
            />
          </GridItem> */}
        </GridContainer>
      </Fade>
      <br />
      <br />
    </div>
  );
};

export default TutorialFlow;
