import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {
  EmojiObjects,
  CommuteOutlined,
  ClassOutlined,
} from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import img1 from "assets/img/majorProblem.JPG";
import img3 from "assets/img/ncbi.JPG";
import ab2 from "assets/img/solution.JPG";
import ab3 from "assets/img/solution2.JPG";
import ab1 from "assets/img/solution3.JPG";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import SectionCarousel from "./SectionCarousel";

const useStyles = makeStyles(styles);

export default function SectionResearch() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>
              <b>Research {"&"} Survey Behind our Product</b>
            </h3>
          </div>
          <div className={classes.title}>
            <h3>{/* <small>With Icons</small> */}</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="info"
                tabs={[
                  {
                    tabButton: "NCBI Survey",
                    tabIcon: EmojiObjects,
                    tabContent: (
                      <span>
                        <p
                          style={{ fontSize: "1.5rem", lineHeight: "2rem" }}
                          className={classes.textCenter}
                        >
                          <img src={img3} className="img-fluid" />

                          {/* As per the given data by the National Programme for
                          Control of Blindness& Visual Impairment(NPCBVI).
                          1,04,09,383 patients with visual impairment handled by
                          1,255 NGOs and 471 low vison dedicated hospitals in
                          India hence. To make their life obstacles free with
                          the power of today's technology Drishti is the
                          solution. */}
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Root Cause Of The Problem",
                    tabIcon: ClassOutlined,
                    tabContent: (
                      <span>
                        <p
                          style={{ fontSize: "1.5rem", lineHeight: "2rem" }}
                          className={classes.textCenter}
                        >
                          <img src={img1} className="img-fluid" />
                          {/* <br />
                          <br />
                          Our product mainly focuses on helping blind people
                          become self-reliant and independent when it comes to
                          navigating through busy roads, crowded streets, and
                          tough terrain. The Survey was taken by My Voice, which
                          records the difficulties and expectations of the blind
                          clearly shows their inability to use today’s
                          technology for their help.They also feel that holding
                          a cane while commuting makes them an easy target for
                          hate crimes. */}
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Our Scientific Solution",
                    tabIcon: CommuteOutlined,
                    tabContent: (
                      <span>
                        <p
                          style={{ fontSize: "1.5rem", lineHeight: "2rem" }}
                          className={classes.textCenter}
                        >
                          <SectionCarousel
                            image1={ab2}
                            image2={ab3}
                            image3={ab1}
                            
                          />
                          {/* Road accidents have had such a trend in the
                          past years. If this is the case for pedestrians with
                          normal eyesight, these statistics raise a major
                          concern on the safety of the visually impaired on the
                          streets. Our product aims at reducing that threat. */}
                        </p>
                      </span>
                    ),
                  },
                  // {
                  //   tabButton: "University of Hannover",
                  //   tabIcon: AccountBalanceOutlined,
                  //   tabContent: (
                  //     <span>
                  //       <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                  //         Collaboratively administrate empowered markets via
                  //         plug-and-play networks. Dynamically procrastinate B2C
                  //         users after installed base benefits.
                  //       </p>
                  //       <br />
                  //       <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                  //         Dramatically visualize customer directed convergence
                  //         without revolutionary ROI. Collaboratively
                  //         administrate empowered markets via plug-and-play
                  //         networks. Dynamically procrastinate B2C users after
                  //         installed base benefits.
                  //       </p>
                  //       <br />
                  //       <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                  //         Dramatically visualize customer directed convergence
                  //         without revolutionary ROI. Collaboratively
                  //         administrate empowered markets via plug-and-play
                  //         networks. Dynamically procrastinate B2C users after
                  //         installed base benefits.
                  //       </p>
                  //     </span>
                  //   )
                  // }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
