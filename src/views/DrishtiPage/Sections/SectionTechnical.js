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
            <h2 className={classes.title}>HOW OUR TECHONOLOGY WORKS BEHIND?</h2>
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
                  <YoutubeEmbed autoplay={0} embedId="_wDOgAil-Vg" sound={1} />

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



// import React from "react";

// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// // @material-ui/icons
// import {
//   PhonelinkSetup,
//   DeviceHub,
//   DevicesOther,
//   BorderHorizontal,
//   HdrWeak,
// } from "@material-ui/icons";

// // core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import NavPills from "components/NavPills/NavPills.js";

// import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
// import img1 from "assets/img/bigData.webp";
// import CanvaVideo from "./CanvaVideo";

// const useStyles = makeStyles(styles);

// export default function SectionTechnical() {
//   const classes = useStyles();
//   return (
//     <div className={classes.section}>
//       <div className={classes.container}>
//         <div id="navigation-pills">
//           <div className={classes.title}>
//             <h3>
//               <strong>
//                 Artificially Intelligent Cruise Control for Pedestrians by
//                 Non-Invasive Muscle Stimulation using Realtime Obstacle
//                 Detection and Navigation
//               </strong>
//             </h3>
//           </div>
//           <div className={classes.title}>
//             <h3>{/* <small>With Icons</small> */}</h3>
//           </div>
//           <GridContainer>
//             <GridItem xs={12} sm={12} md={12} lg={12}>
//               <NavPills
//                 color="info"
//                 horizontal={{
//                   tabsGrid: { xs: 12, sm: 4, md: 4 },
//                   contentGrid: { xs: 12, sm: 8, md: 8 },
//                 }}
//                 tabs={[
//                   {
//                     tabButton: "Technology",
//                     tabIcon: DevicesOther,
//                     tabContent: (
//                       <span>
//                         <CanvaVideo embedId="DAEe0TB3Abg" />
//                         {/* <img src={img1} className="img-fluid d-flex mx-auto"></img> */}
//                         {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
//                           The major Technology used in our product is first
//                           realtime Objection Detection which can be done through
//                           various pretrained models available over internet
//                           along with some proficient proximity sensors. Till now
//                           as we have detected objects in real world in real time
//                           and stimulated the legs of people to move them
//                           avoiding obstacles. We did this by using Muscle
//                           Stimulator, it’s used by various fitness trainees and
//                           in medical sciences for stimulating muscles, for
//                           contracting and relaxing them outside their body to
//                           relax muscles, we are doing nothing new here, we will
//                           use this technology to control the muscles and through
//                           them control the movement of legs as per our model
//                           avoiding obstacle and there are many efficient muscle
//                           stimulator are available in the market which works
//                           very precisely on the targeted nerves.
//                         </p> */}
//                         <br />
//                         {/* <p>
//                           Real-time Obstacle Detection and Avoidance. It will
//                           simulate your movement as soon as it detects obstacle
//                           in its avoidance range.
//                         </p>
//                         <br />
//                         <p>
//                           No involvement from the user like holding a cane or
//                           positioning the mobile camera. Just take our device
//                           and you get our Artificial Eyes.
//                         </p> */}
//                       </span>
//                     ),
//                   },
//                   {
//                     tabButton: "App + GPS",
//                     tabIcon: PhonelinkSetup,
//                     tabContent: (
//                       <span>
//                         <CanvaVideo embedId="DAEe2PaW35E" />
//                         {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
//                           He/She can also select a specific route for navigation
//                           using an inbuilt chatbot which will be tracked using
//                           GPS in real-time and help him reach his destination.
//                         </p>
//                         <br />
//                         <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
//                           We are planning to integrate our product with Google
//                           Maps to assist the user in reaching his destination by
//                           providing directional assistance.
//                         </p>
//                         <br />
//                         <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
//                           Avoiding all the Obstacles and Giving user all the
//                           information about his environment to make it more
//                           interactive plus user friendly.
//                         </p> */}
//                       </span>
//                     ),
//                   },
//                   {
//                     tabButton: "PCB Design",
//                     tabIcon: BorderHorizontal,
//                     tabContent: (
//                       <span>
//                         <CanvaVideo embedId="DAEe2JfC2_g" />
//                         {/* <img src={img1} className="img-fluid d-flex mx-auto"></img> */}
//                         {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
//                           The major Technology used in our product is first
//                           realtime Objection Detection which can be done through
//                           various pretrained models available over internet
//                           along with some proficient proximity sensors. Till now
//                           as we have detected objects in real world in real time
//                           and stimulated the legs of people to move them
//                           avoiding obstacles. We did this by using Muscle
//                           Stimulator, it’s used by various fitness trainees and
//                           in medical sciences for stimulating muscles, for
//                           contracting and relaxing them outside their body to
//                           relax muscles, we are doing nothing new here, we will
//                           use this technology to control the muscles and through
//                           them control the movement of legs as per our model
//                           avoiding obstacle and there are many efficient muscle
//                           stimulator are available in the market which works
//                           very precisely on the targeted nerves.
//                         </p> */}
//                         <br />
//                         {/* <p>
//                           Real-time Obstacle Detection and Avoidance. It will
//                           simulate your movement as soon as it detects obstacle
//                           in its avoidance range.
//                         </p>
//                         <br />
//                         <p>
//                           No involvement from the user like holding a cane or
//                           positioning the mobile camera. Just take our device
//                           and you get our Artificial Eyes.
//                         </p> */}
//                       </span>
//                     ),
//                   },
//                   {
//                     tabButton: "Pit Detection",
//                     tabIcon: HdrWeak,
//                     tabContent: (
//                       <span>
//                         <CanvaVideo embedId="DAEe2Pcmsf8" />
//                         {/* <img src={img1} className="img-fluid d-flex mx-auto"></img> */}
//                         {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
//                           The major Technology used in our product is first
//                           realtime Objection Detection which can be done through
//                           various pretrained models available over internet
//                           along with some proficient proximity sensors. Till now
//                           as we have detected objects in real world in real time
//                           and stimulated the legs of people to move them
//                           avoiding obstacles. We did this by using Muscle
//                           Stimulator, it’s used by various fitness trainees and
//                           in medical sciences for stimulating muscles, for
//                           contracting and relaxing them outside their body to
//                           relax muscles, we are doing nothing new here, we will
//                           use this technology to control the muscles and through
//                           them control the movement of legs as per our model
//                           avoiding obstacle and there are many efficient muscle
//                           stimulator are available in the market which works
//                           very precisely on the targeted nerves.
//                         </p> */}
//                         <br />
//                         {/* <p>
//                           Real-time Obstacle Detection and Avoidance. It will
//                           simulate your movement as soon as it detects obstacle
//                           in its avoidance range.
//                         </p>
//                         <br />
//                         <p>
//                           No involvement from the user like holding a cane or
//                           positioning the mobile camera. Just take our device
//                           and you get our Artificial Eyes.
//                         </p> */}
//                       </span>
//                     ),
//                   },
//                   {
//                     tabButton: "Logic Design",
//                     tabIcon: DeviceHub,
//                     tabContent: (
//                       <span>
//                         <CanvaVideo embedId="DAEe2KY-X6E" />
//                         {/* <img src={img1} className="img-fluid d-flex mx-auto"></img> */}
//                         {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
//                           The major Technology used in our product is first
//                           realtime Objection Detection which can be done through
//                           various pretrained models available over internet
//                           along with some proficient proximity sensors. Till now
//                           as we have detected objects in real world in real time
//                           and stimulated the legs of people to move them
//                           avoiding obstacles. We did this by using Muscle
//                           Stimulator, it’s used by various fitness trainees and
//                           in medical sciences for stimulating muscles, for
//                           contracting and relaxing them outside their body to
//                           relax muscles, we are doing nothing new here, we will
//                           use this technology to control the muscles and through
//                           them control the movement of legs as per our model
//                           avoiding obstacle and there are many efficient muscle
//                           stimulator are available in the market which works
//                           very precisely on the targeted nerves.
//                         </p> */}
//                         <br />
//                         {/* <p>
//                           Real-time Obstacle Detection and Avoidance. It will
//                           simulate your movement as soon as it detects obstacle
//                           in its avoidance range.
//                         </p>
//                         <br />
//                         <p>
//                           No involvement from the user like holding a cane or
//                           positioning the mobile camera. Just take our device
//                           and you get our Artificial Eyes.
//                         </p> */}
//                       </span>
//                     ),
//                   },
//                 ]}
//               />
//             </GridItem>
//             {/* <GridItem xs={12} sm={12} md={12} lg={12}>
//               <NavPills
//                 color="primary"
//                 tabs={[
//                   {
//                     tabButton: "Dashboard",
//                     tabIcon: BuildOutlined,
//                     tabContent: (
//                       <span>
//                         <p>
//                           Collaboratively administrate empowered markets via
//                           plug-and-play networks. Dynamically procrastinate B2C
//                           users after installed base benefits.
//                         </p>
//                         <br />
//                         <p>
//                           Dramatically visualize customer directed convergence
//                           without revolutionary ROI. Collaboratively
//                           administrate empowered markets via plug-and-play
//                           networks. Dynamically procrastinate B2C users after
//                           installed base benefits.
//                         </p>
//                         <br />
//                         <p>
//                           Dramatically visualize customer directed convergence
//                           without revolutionary ROI. Collaboratively
//                           administrate empowered markets via plug-and-play
//                           networks. Dynamically procrastinate B2C users after
//                           installed base benefits.
//                         </p>
//                       </span>
//                     )
//                   },
//                   {
//                     tabButton: "Schedule",
//                     tabIcon: BuildOutlined,
//                     tabContent: (
//                       <span>
//                         <p>
//                           Efficiently unleash cross-media information without
//                           cross-media value. Quickly maximize timely
//                           deliverables for real-time schemas.
//                         </p>
//                         <br />
//                         <p>
//                           Dramatically maintain clicks-and-mortar solutions
//                           without functional solutions. Dramatically visualize
//                           customer directed convergence without revolutionary
//                           ROI. Collaboratively administrate empowered markets
//                           via plug-and-play networks. Dynamically procrastinate
//                           B2C users after installed base benefits.
//                         </p>
//                       </span>
//                     )
//                   },
//                   {
//                     tabButton: "Tasks",
//                     tabIcon: BuildOutlined,
//                     tabContent: (
//                       <span>
//                         <p>
//                           Collaboratively administrate empowered markets via
//                           plug-and-play networks. Dynamically procrastinate B2C
//                           users after installed base benefits.
//                         </p>
//                         <br />
//                         <p>
//                           Dramatically visualize customer directed convergence
//                           without revolutionary ROI. Collaboratively
//                           administrate empowered markets via plug-and-play
//                           networks. Dynamically procrastinate B2C users after
//                           installed base benefits.
//                         </p>
//                         <br />
//                         <p>
//                           Dramatically visualize customer directed convergence
//                           without revolutionary ROI. Collaboratively
//                           administrate empowered markets via plug-and-play
//                           networks. Dynamically procrastinate B2C users after
//                           installed base benefits.
//                         </p>
//                       </span>
//                     )
//                   }
//                 ]}
//               />
//             </GridItem> */}
//           </GridContainer>
//         </div>
//       </div>
//     </div>
//   );
// }
