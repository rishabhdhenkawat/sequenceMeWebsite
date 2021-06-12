import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import image from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(styles);

const ImgComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div id="images">
        <br />
        <GridContainer>
          <GridItem xs={12} sm={2}>
            <h4>Rounded Image</h4>
            <img
              src={image}
              alt="..."
              className={classes.imgRounded + " " + classes.imgFluid}
            />
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginLeft}>
            <h4>Circle Image</h4>
            <img
              src={image}
              alt="..."
              className={classes.imgRoundedCircle + " " + classes.imgFluid}
            />
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginLeft}>
            <h4>Rounded Raised</h4>
            <img
              src={image}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
          <GridItem xs={12} sm={2} className={classes.marginLeft}>
            <h4>Circle Raised</h4>
            <img
              src={image}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
          </GridItem>
        </GridContainer>
        <div className={classes.space50} />
        <GridContainer />
      </div>
    </>
  );
};

export default ImgComponent;
