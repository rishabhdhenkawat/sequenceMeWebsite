import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { HeadsetMic, PinDrop, GpsFixed } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function FeatureComponent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>
              <strong>Top 3 Features of our Device</strong>
            </h3>
          </div>
          <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
            We are fully committed to making our product as accurate and
            fast as possible.{" "}
          </p>
          <div className={classes.title}>
            <h3>{/* <small>With Icons</small> */}</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="info"
                tabs={[
                  {
                    tabButton: "For Everyone",
                    tabIcon: GpsFixed,
                    tabContent: (
                      <span>
                        <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                        Provide a personalized healthcare service which based on a person's own body needs.
                        </p>
                        {/* <br />
                        <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                          Accuracy more than GPS based products and service
                          providers.Those who have tried to target the same
                          issues have used GPS for navigation which does not
                          provide real-time obstacle detection.
                        </p>
                        <br />
                        <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                          Our products do obstacle sensing using sensors as well
                          rather than just simple image processing which
                          increases accuracy.
                        </p> */}
                      </span>
                    ),
                  },
                  {
                    tabButton: "For medical professionals",
                    tabIcon: HeadsetMic,
                    tabContent: (
                      <span>
                        <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                        Providing a tool to analyze DNA for medical professionals on various aspects.
                        </p>
                        <br />
                        {/* <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p> */}
                      </span>
                    ),
                  },
                  {
                    tabButton: "For Pandamic",
                    tabIcon: PinDrop,
                    tabContent: (
                      <span>
                        <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                        In a scenario like covid19 we will tell a person how much his body is immune to various virus, along with we will tell a proper diet to that person.
                        </p>
                        <br />
                        {/* <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p> */}
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
