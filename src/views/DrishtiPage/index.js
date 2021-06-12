import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import RegisterPage from "./RegisterPage";
import TeamPage from "./TeamPage";
import AboutUsPage from "./AboutUsPage";
import BussinessServices from "./BussinessServices";
import HomePage from "./Home";
import TutorialPage from "./TutorialPage";
import TechnologyPage from "./TechnologyPage";

const useStyles = makeStyles(styles);
var hist = createBrowserHistory();

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="SequenceME"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 0,
          color: "info",
        }}
        {...rest}
      />

      <div className={classNames(classes.main, classes.mainRaised)+"mt-5"}>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/tutorial" component={TutorialPage} />
          <Route path="/technology" component={TechnologyPage} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/bussiness" component={BussinessServices} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
