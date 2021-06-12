import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/snehal.png";
import team2 from "assets/img/faces/devanshi.png";
import team3 from "assets/img/faces/rishabh.png";
import team4 from "assets/img/faces/rishabhV.jpeg";
import team5 from "assets/img/faces/nomaan.jpeg";
import team6 from "assets/img/faces/me.jpeg";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <br/>
      <br/>
      <br/>

      <h2 style={{PaddingTop:"20rem", fontWeight:"bold"}} className={"text-center font-weight-bold"}>Here is our Team</h2>
      <div>
        <GridContainer
          style={{ width: "75%", marginRight: "auto", marginLeft: "auto" }}
        >
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img style={{height:"10rem",width:"10rem", marginRight:"auto", marginLeft:"auto", display:"flex"}} src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className="text-center font-weight-bolder">
                Snehal Saini
                <br />
                <small className="text-center">UG 3rd Year Electronics and  Communication Student</small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img style={{height:"10rem",width:"10rem", marginRight:"auto", marginLeft:"auto", display:"flex"}} src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className="text-center font-weight-bolder">
                Devanshi Sharma
                <br />
                <small className="text-center">UG 3rd Year Biotechnology Student</small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img style={{height:"10rem",width:"10rem", marginRight:"auto", marginLeft:"auto", display:"flex"}} src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className="text-center font-weight-bolder">
                Rishabh Dhenkawat
                <br />
                <small className="text-center">UG  3rd Year Computer Science Engineering Student</small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
          
          
          
        </GridContainer>
      </div>
    </div>
  );
}
