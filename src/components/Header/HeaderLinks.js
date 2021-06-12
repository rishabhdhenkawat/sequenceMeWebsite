/*eslint-disable*/
import React, { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import "assets/css/custom.css"

// @material-ui/icons
import {
  People,
  ExploreOutlined,
  BusinessOutlined,
  Settings,
  PermPhoneMsg,
  SendOutlined,
  CloudDone,
} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  useEffect(()=>{
    console.log(window.location.pathname)
  },[window.location.href,window.location.pathname])
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link style={{color:"#fff"}} to="/">
          <Button
            color="info"
            target="_blank"
            className={classes.navLink}
          >
            <ExploreOutlined className={classes.icons} /> Home
          </Button>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Link className={{color:"#fff"}} to="/about-us">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <ExploreOutlined className={classes.icons} /> About Us
          </Button>
        </Link>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link style={{color:"#fff"}} to="/bussiness">
          <Button
            color="info"
            target="_blank"
            className={classes.navLink}
          >
            <BusinessOutlined className={classes.icons} /> Our Services
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link style={{color:"#fff"}} to="/technology">
          <Button
            color="info"
            target="_blank"
            className={classes.navLink}
          >
            <CloudDone className={classes.icons} /> Technology
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link style={{color:"#fff"}} to="/tutorial">
          <Button
            color="info"
            target="_blank"
            className={classes.navLink}
          >
            <Settings className={classes.icons} /> Tutorial
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link style={{color:"#fff"}} to="/team">
          <Button
            color="info"
            target="_blank"
            className={classes.navLink}
          >
            <People className={classes.icons} /> Our Team
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link style={{color:"#fff"}}>
          <Button
            color="info"
            target="_blank"
            className={classes.navLink}
          >
            <PermPhoneMsg className={classes.icons} /> Contact
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link style={{color:"#fff"}} to="/register">
          <Button
            className={classes.registerNavLink}
            // onClick={(e) => e.preventDefault()}
            color="white"
            round
          >
            <SendOutlined className={classes.icons} />
            Register for Prototype
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
