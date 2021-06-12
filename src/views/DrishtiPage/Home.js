import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import SectionPills from "./Sections/SectionPills.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import FeatureComponent from "./Sections/FeatureComponent.js";
import FirstSection from "./Sections/FirstSection.js";
import SectionVideo from "./Sections/SectionVideo.js";

import SectionResearch from "./Sections/SectionResearch.js";
import AboutUsPage from "./AboutUsPage.js";
import CarouselVideo from "./Sections/CarouselVideo.js";
import "assets/css/custom.css";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Parallax image={require("assets/img/bg8.png")}>
        <div className={classes.container}>
          <GridContainer>
            <Fade top>
              <GridItem>
                <div className={classes.brand}>
                  <h2
                    id="mainHeading"
                    style={{ color: "#000000" }}
                    className={classes.title}
                  >
                    <span style={{ letterSpacing: "1rem", color: "#000000" }}>
                     SequenceME
                    </span>
                    <br />
                    Recreating Healthcare
                  </h2>
                  <h3
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className={classes.subtitle}
                  >
                   A frontier of health & medicine for the 21st c.e.
	Revolutionizing health with DNA sequencing technology at the comfort of your home

                  </h3>
                </div>
              </GridItem>
            </Fade>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Fade right>
          <AboutUsPage />
        </Fade>
        {/* <CarouselVideo/> */}
        <Fade left>
          <FirstSection />
        </Fade>
        {/* <AboutUsPage /> */}
        <Fade right>
          <SectionPills />
        </Fade>
        {/* <SectionTabs /> */}
        <Fade left>
          <SectionResearch />
        </Fade>
        <Fade right>
          <FeatureComponent />
        </Fade>
        <Fade left>
          <SectionVideo />
        </Fade>
      </div>
    </>
  );
}
