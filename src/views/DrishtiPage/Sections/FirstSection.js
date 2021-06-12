import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import CarouselVideo from "./CarouselVideo";

const useStyles = makeStyles(styles);

const FirstSection = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        {/* <FirstCarousel /> */}
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>
            How DNA sequencing with AI can help you?
            </h2>
            {/* <CarouselVideo /> */}
            <h5 className={classes.description} style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
            We will provide a personalized healthcare service which based on a person's own body needs using his DNA. Using power of DNA and Artificial Intelligence we will make you aware about your genetic risks like how much you are immune to various diseases and suggest them corrective lifestyle actions in time can help in prevention and management of various health conditions.

            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
};

export default FirstSection;
