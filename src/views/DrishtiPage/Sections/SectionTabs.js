import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {
  AccountBalanceOutlined,
  CommuteOutlined,
  ClassOutlined,
} from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import ImgComponent from "views/Components/Sections/ImgComponent";
import SectionCarousel from "views/Components/Sections/SectionCarousel";
import img1 from "assets/img/rs1.png";
import img2 from "assets/img/rs2.png";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>
            <strong>Research Behind our Product</strong>
          </h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h3>{/* <small>Tabs with Icons on Card</small> */}</h3>
              <CustomTabs
                headerColor="info"
                tabs={[
                  {
                    tabName: "My Voice",
                    tabIcon: ClassOutlined,
                    tabContent: (
                      <p className={classes.textCenter}>
                        <img src={img1} className="img-fluid" />
                        <br />
                        <br />
                        Our product mainly focuses on helping blind people
                        become self-reliant and independent when it comes to
                        navigating through busy roads, crowded streets, and
                        tough terrain. The Survey was taken by My Voice, which
                        records the difficulties and expectations of the blind
                        clearly shows their inability to use today’s technology
                        for their help.They also feel that holding a cane while
                        commuting makes them an easy target for hate crimes.
                      </p>
                    ),
                  },
                  {
                    tabName: "Road Accident",
                    tabIcon: CommuteOutlined,
                    tabContent: (
                      <p className={classes.textCenter}>
                        <img src={img2} className="img-fluid" />
                        <br />
                        <br /> Road accidents have had such a trend in the past
                        years. If this is the case for pedestrians with normal
                        eyesight, these statistics raise a major concern on the
                        safety of the visually impaired on the streets. Our
                        product aims at reducing that threat.
                      </p>
                    ),
                  },
                  {
                    tabName: "University of Hannover",
                    tabIcon: AccountBalanceOutlined,
                    tabContent: (
                      <p className={classes.textCenter}>
                        <ImgComponent />
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={12}>
              <h3>
                <small>Tabs on Plain Card</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Home",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Updates",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "History",
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
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
