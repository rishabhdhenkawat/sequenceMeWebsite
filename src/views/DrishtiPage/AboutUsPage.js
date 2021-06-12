import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {
  HelpOutline,
  Info,
  AssignmentInd,
  AssignmentTurnedIn,
} from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import img1 from "assets/img/ab1.jpeg";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import YoutubeEmbed from "./YoutubeEmbed";
import "assets/css/custom.css";
import CanvaVideo from "./Sections/CanvaVideo";


const useStyles = makeStyles(styles);

const AboutUsPage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h3>
                <strong>
                  <Info className="mb-1" /> About SequenceME
                </strong>
              </h3>
            </div>

            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="info"
                  tabs={[
                    {
                      tabButton: "Who are we?",
                      tabIcon: HelpOutline,
                      tabContent: (
                        <span>
                          <CanvaVideo embedId="DAEhGCl9gkk" />
                          {/* <div className="video-responsive">
                            <iframe
                              width="830"
                              height="420"
                              src="https://www.canva.com/design/DAEexPY4QBE/view?embed"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title="Embedded youtube"
                            />
                          </div> */}
                          {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                            <ul>
                              <li>
                                Our Product intends to solve a very basic
                                problem faced by visually impaired people i.e;
                                navigating through obstacles.As they don't have
                                any visual input from surroundings, so they
                                cannot take any non-intuitive decision to avoid
                                the obstacles and this usually leads to
                                accidents.
                              </li>
                              <li>
                                So in order to solve this problem we are
                                providing them Computer-Aided Navigation system
                                which can analyse visual input , take decisions
                                and aid them in navigation by sending electrical
                                impulses directly to the muscles using
                                electrodes. Solving this problem is important as
                                visually impaired people find a lot of
                                difficulty in navigating through obstacles
                                especially in a new unknown environment.
                              </li>
                              <li>
                                They generally use cane (which are not that much
                                effective) or else they need to depend on human
                                assistance.
                              </li>
                            </ul>
                          </p> */}
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
                      tabButton: "For whom we are?",
                      tabIcon: AssignmentInd,
                      tabContent: (
                        <span>
                          <CanvaVideo embedId="DAEhAcd0JsU" />
                          {/* <div className="video-responsive">
                            <iframe
                              width="830"
                              height="420"
                              src="https://www.canva.com/design/DAEezZZTW54/view?embed"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title="Embedded youtube"
                            />
                          </div> */}
                          {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                            <img className="img-fluid" src={img1} />
                            There is a huge market for such products as the
                            basic challenges of blind people still remain
                            unsolved, even in the year 2021.{" "}
                            <strong>
                              The shortage is of solutions, not the demand.
                            </strong>
                          </p>
                          <br />
                          <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                            <ul>
                              <li>
                                Our solution, being one of its kind is expected
                                to be a revolution to the healthcare market and
                                this will soon be a reality after it launches as
                                a product in the market.
                              </li>
                              <li>
                                The technology can be monetized as a compact
                                product that can be sold directly to the
                                end-users.
                              </li>
                              <li>
                                It can also be integrated with bionic products
                                of some other firms to give them an edge.
                              </li>
                              <li>
                                The data of obstacles generated from the device
                                can also act as a secondary revenue source.
                              </li>
                            </ul>
                          </p> */}
                        </span>
                      ),
                    },
                    {
                      tabButton: "How we are?",
                      tabIcon: AssignmentTurnedIn,
                      tabContent: (
                        <span>
                          <CanvaVideo embedId="DAEhAX_6ji0" />
                          {/* <div className="video-responsive">
                            <iframe
                              width="830"
                              height="420"
                              src="https://www.canva.com/design/DAEezJ1NP7s/view?embed"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title="Embedded youtube"
                            />
                          </div> */}
                          {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                            Our Idea is surely innovative as we are providing an
                            interface between intelligence of a computer and the
                            human nervous system (specifically motor neurones).
                            Here we are providing a microcontroller computer
                            (Beaglebone Black in our case ) as an alternative
                            for the brain (of visually impaired people) to
                            process visual data and take decisions accordingly.
                            We are also providing intelligence (artificially) to
                            the device, due to which it can learn and will be
                            better at its job with every use.
                          </p>
                          <br />
                          <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                            Using an involuntary method of actuation through
                            electrical muscle stimulation to avoid any delay
                            involved in other methods(verbal, vibration).
                          </p>
                          <br />
                          <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                            Real-time obstacle avoidance with No involvement
                            from the user like holding a cane or positioning the
                            mobile camera.
                          </p> */}
                          <br />
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
    </>
  );
};

export default AboutUsPage;
