import "../styles/main.scss";
import "../scripts/modules/cursor";
import "lazysizes";
import Navigation from "../scripts/modules/navigation";
import TourPackage from "../scripts/modules/tourPackage";
import stickyHeader from "../scripts/modules/stickyHeader";

const navMenu = new Navigation();
new stickyHeader();
new TourPackage(document.querySelectorAll(".package"));
new TourPackage(document.querySelectorAll(".feature"));
if (module.hot) {
  module.hot.accept();
}

// Testing React Integration
/*
* React is integrated . help later when scaling 

import React from "react";
import ReactDOM from "react-dom";
import Card from "./modules/reactCard";
ReactDOM.render(<Card />, document.querySelector("#react-test"));
*/

/*
 Topic: to implement AWS Lamda for later  
*test is complete wit netlify
import ClientArea from "./modules/ClientArea";

new ClientArea();

*/
