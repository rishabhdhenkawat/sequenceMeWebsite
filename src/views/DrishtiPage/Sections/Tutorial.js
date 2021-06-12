import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

const Tutorial = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>How our Device will work?</h2>
            <br />
            <img className="img-fluid" src={image} alt="..." /> <br />
            <br />
            <h5 className="text-left text-justify justify-content-start">
                  Real Time obstacle Detection through Beaglebone and camera
                  module Dynamic Obstacle Detection using Computer Vision:
                  TMDSCM572X camera module is used to detect dynamic obstacles,
                  analyse and send the data to Beaglebone Black Micro-controller
                  for dynamic obstacle detection using computer vision
                  Technology.
                
                <br/><br/>
                  Actuating the legs according to obstacle and distance from it
                  Distance Calculation using Ultrasonic sensors: Distance of the
                  obstacle from user is sensed using TIDA-00151 Ultrasonic
                  Sensor Interface and the data is sent to Beaglebone Black. The
                  data from above two sent to Beaglebone Black Micro-controller
                  is analysed using previously trained algorithm of Computer
                  Vision Model and decision signal is sent to Switching
                  mechanism.
                
                <br/><br/>
                  Integrating Lidar for better performance: Distance Calculation
                  using Lidar sensor: Distance of the obstacle from user is
                  sensed using 3D Lidar Sensor Interface for better accuracy,
                  range of obstacle distance and the data is sent to Beaglebone
                  Black.
                
                <br/><br/>
                  Avoiding Stairs and on surface Potholes: By using Lidar we are
                  able to detect Stairs and potholes on surface and avoid them.
                <br/><br/>
                  Compacting the overall product upto a size of smartphone: Now
                  by using our personal PCB and integrating everything in a
                  single device the final product can be made as much compact as
                  of size of an Smart Phone.
                
            </h5>
            <Button
              color="info"
              size="lg"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-play" />
              Watch video
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
};

export default Tutorial;
