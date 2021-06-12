import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {
  PhonelinkSetup,
  DeviceHub,
  DevicesOther,
  BorderHorizontal,
  HdrWeak,
} from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import img1 from "assets/img/fc3.png";
import img2 from "assets/img/pcb.jpeg";
import img3 from "assets/img/drug.JPG";
import img6 from "assets/img/common.jpg";
import img5 from "assets/img/virus.JPG";

import CanvaVideo from "./CanvaVideo";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>
              <b>OUR SERVICES & REPORTS</b>
            </h3>
          </div>
          <div className={classes.title}>
            <h3>{/* <small>With Icons</small> */}</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="info"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 },
                }}
                tabs={[
                  {
                    tabButton: "Diet & Nutrition",
                    tabIcon: DevicesOther,
                    tabContent: (
                      <span>
                        {/* <img src={img4} className="img-fluid d-flex mx-auto"></img> */}
                        <p style={{ fontSize: "2rem", lineHeight: "1.5rem" }}>
                        Provides a unique report including: 
                        </p>
                        
                        <p style={{ fontSize: "1.5rem", lineHeight: "1rem" }}>
                        <br />Which specific food items affect your body in what way.
                        </p>
                        <p style={{ fontSize: "1.5rem", lineHeight: "1rem" }}>
                        <br />Which food items you are allergic or sensitive to
                        </p>
                        <p style={{ fontSize: "1.5rem", lineHeight: "1rem" }}>
                        <br />Your personal body nutrition needs 
                        </p>
                        <p style={{ fontSize: "1.5rem", lineHeight: "1rem" }}>
                        <br />Personalised weight gain and weight loss plans
                        </p>
                        <p style={{ fontSize: "1.5rem", lineHeight: "1rem" }}>
                        <br />Diet and nutrition plans to focus on your personal needs
                        </p>
                        <p style={{ fontSize: "1.5rem", lineHeight: "1rem" }}>
                        <br />Product recommendations to improve your nutrition
                        </p>
                        <p style={{ fontSize: "1.5rem", lineHeight: "1rem" }}>
                        <br />Sensitivity reports corresponding to specific food items like sugar 
                        </p>
                        {/* </p>
                        <br />
                        <p>
                          Real-time Obstacle Detection and Avoidance. It will
                          simulate your movement as soon as it detects obstacle
                          in its avoidance range.
                        </p>
                        <br />
                        <p>
                          No involvement from the user like holding a cane or
                          positioning the mobile camera. Just take our device
                          and you get our Artificial Eyes.
                        </p> */}
                      </span>
                    ),
                  },
                  {
                    tabButton: "Cancer Risk",
                    tabIcon: PhonelinkSetup,
                    tabContent: (
                      <span>
                        {/* <img src={img1} className="img-fluid d-flex mx-auto"></img> */}
                        <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                        Mutations in our body are responsible for cancer. Some mutations might not guarantee but increase the chances of you developing cancer. The causes for cancer might be genetic, hereditary, or familial. However, most of the cancers are difficult to diagnose at early stages and difficult to cure at later ones. Sequence Me helps everyone get access to their genetic insights so that any such major disease is early diagnosed and can be easily cured.
                        </p>
                        <br />
                        <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                        So, we provide you a report including:<br />
                        Your risk levels to 10 different types of cancers<br />
                        Future insights to your genetic mutations that might lead to cancer<br />
                        Your genetic risk comparison with the other population<br />
                        Personalised cancer diagnosis plan in case you have a future or present risk of developing cancer
                        How various symptoms and other lifestyle choices would affect your risk of cancer

                        </p>
                        <br />
                        {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                          Avoiding all the Obstacles and Giving user all the
                          information about his environment to make it more
                          interactive plus user friendly.
                        </p> */}
                      </span>
                    ),
                  },
                  {
                    tabButton: "Disease Diagnosis",
                    tabIcon: BorderHorizontal,
                    tabContent: (
                      <span>
                        {/* <img src={img2} className="img-fluid d-flex mx-auto"></img> */}
                        {/* <img src={img1} className="img-fluid d-flex mx-auto"></img> */}
                        <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                        85% of the human exome contains disease mutation information making it the fastest and best method to diagnose diseases. Some of the genetic mutations make us more prone to some diseases and thus dna sequencing can help us diagnose your dna for such disease risks so that early detection could help you get better treatment and as soon as possible. Some of the diseases are carried in our genes hereditarily. Sequence Me explores family history of genes as well as your unique mutations for various major diseases like Asthma, Atopic Dermatitis, Inflammatory Skin Disease, Influenza (Flu) Susceptibility, Irritable Bowel Syndrome (IBS), Kidney Stones, Rheumatoid Arthritis, Polycystic Ovary Syndrome, Psoriasis, Gallstone Disease, Glaucoma, Gout, and many more. 

                        </p>
                        <br />
                        <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                        We provide you with your unique disease diagnosis report that includes:

                        Your genetic risk to such diseases<br />
                        How various symptoms and other lifestyle choices would affect your risk <br />
                        Future risk of developing a particular disease<br />
                        Clinical results to help your doctor find accurate treatment for you<br />
                        Personalised treatment guidance plans from trained professionals<br />
                        Prevention controls and lifestyle changes that could decrease your genetic risks<br />

                        </p> 
                      </span>
                    ),
                  },
                  {
                    tabButton: "Drug Response",
                    tabIcon: HdrWeak,
                    tabContent: (
                      <span>
                        <img src={img3} className="img-fluid d-flex mx-auto"></img>
                        {/* <img src={img1} className="img-fluid d-flex mx-auto"></img> */}
                        {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                          The major Technology used in our product is first
                          realtime Objection Detection which can be done through
                          various pretrained models available over internet
                          along with some proficient proximity sensors. Till now
                          as we have detected objects in real world in real time
                          and stimulated the legs of people to move them
                          avoiding obstacles. We did this by using Muscle
                          Stimulator, it’s used by various fitness trainees and
                          in medical sciences for stimulating muscles, for
                          contracting and relaxing them outside their body to
                          relax muscles, we are doing nothing new here, we will
                          use this technology to control the muscles and through
                          them control the movement of legs as per our model
                          avoiding obstacle and there are many efficient muscle
                          stimulator are available in the market which works
                          very precisely on the targeted nerves.
                        </p> */}
                        <br />
                        {/* <p>
                          Real-time Obstacle Detection and Avoidance. It will
                          simulate your movement as soon as it detects obstacle
                          in its avoidance range.
                        </p>
                        <br />
                        <p>
                          No involvement from the user like holding a cane or
                          positioning the mobile camera. Just take our device
                          and you get our Artificial Eyes.
                        </p> */}
                      </span>
                    ),
                  },
                  {
                    tabButton: "Common Health Risks",
                    tabIcon: DeviceHub,
                    tabContent: (
                      <span>
                        <img src={img6} className="img-fluid d-flex mx-auto"></img>
                        {/* <img src={img1} className="img-fluid d-flex mx-auto"></img> */}
                        {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                          The major Technology used in our product is first
                          realtime Objection Detection which can be done through
                          various pretrained models available over internet
                          along with some proficient proximity sensors. Till now
                          as we have detected objects in real world in real time
                          and stimulated the legs of people to move them
                          avoiding obstacles. We did this by using Muscle
                          Stimulator, it’s used by various fitness trainees and
                          in medical sciences for stimulating muscles, for
                          contracting and relaxing them outside their body to
                          relax muscles, we are doing nothing new here, we will
                          use this technology to control the muscles and through
                          them control the movement of legs as per our model
                          avoiding obstacle and there are many efficient muscle
                          stimulator are available in the market which works
                          very precisely on the targeted nerves.
                        </p> */}
                        <br />
                        {/* <p>
                          Real-time Obstacle Detection and Avoidance. It will
                          simulate your movement as soon as it detects obstacle
                          in its avoidance range.
                        </p>
                        <br />
                        <p>
                          No involvement from the user like holding a cane or
                          positioning the mobile camera. Just take our device
                          and you get our Artificial Eyes.
                        </p> */}
                      </span>
                    ),
                  },
                  {
                    tabButton: "Immunity Prediction for viral diseases",
                    tabIcon: DeviceHub,
                    tabContent: (
                      <span>
                        <img src={img5} className="img-fluid d-flex mx-auto"></img>
                        {/* <img src={img1} className="img-fluid d-flex mx-auto"></img> */}
                        {/* <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                          The major Technology used in our product is first
                          realtime Objection Detection which can be done through
                          various pretrained models available over internet
                          along with some proficient proximity sensors. Till now
                          as we have detected objects in real world in real time
                          and stimulated the legs of people to move them
                          avoiding obstacles. We did this by using Muscle
                          Stimulator, it’s used by various fitness trainees and
                          in medical sciences for stimulating muscles, for
                          contracting and relaxing them outside their body to
                          relax muscles, we are doing nothing new here, we will
                          use this technology to control the muscles and through
                          them control the movement of legs as per our model
                          avoiding obstacle and there are many efficient muscle
                          stimulator are available in the market which works
                          very precisely on the targeted nerves.
                        </p> */}
                        <br />
                        {/* <p>
                          Real-time Obstacle Detection and Avoidance. It will
                          simulate your movement as soon as it detects obstacle
                          in its avoidance range.
                        </p>
                        <br />
                        <p>
                          No involvement from the user like holding a cane or
                          positioning the mobile camera. Just take our device
                          and you get our Artificial Eyes.
                        </p> */}
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Dashboard",
                    tabIcon: BuildOutlined,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
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
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Schedule",
                    tabIcon: BuildOutlined,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Tasks",
                    tabIcon: BuildOutlined,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
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
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem> */}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
