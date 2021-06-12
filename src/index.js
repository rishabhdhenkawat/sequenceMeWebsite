import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Components from "views/DrishtiPage/index.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <main>
    <BrowserRouter>
      <Components />
    </BrowserRouter>
  </main>,
  document.getElementById("root")
);
