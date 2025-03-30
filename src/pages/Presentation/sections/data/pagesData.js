/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import mobileScreen from "assets/images/truck-led-2.png";
import screenInterior from "assets/images/led-screen-interior2.png";
import screenExterior from "assets/images/led-screen-exterior.jpg";
import screenBand from "assets/images/screen-band.jpg";
import screensLed from "assets/images/screens-geont-ext1.png";
import thrdDLogos from "assets/images/3d-logos.png";

export default [
  {
    image: screensLed,
    name: "Écran LED géant",
    route: "/pages/landing-pages/about-us",
  },
  {
    image: thrdDLogos,
    name: "Des Logo 3D",
    route: "/pages/landing-pages/contact-us",
  },
  {
    image: screenInterior,
    name: "Installation intérieure",
    route: "/pages/authentication/sign-in",
  },
  {
    image: screenExterior,
    name: "Installation extérieure",
    route: "/pages/landing-pages/author",
  },
  {
    image: mobileScreen,
    name: "Écran géant mobile",
    route: "/pages/landing-pages/author",
  },
  {
    image: screenBand,
    name: "Écran bande",
    route: "/pages/landing-pages/author",
  },
];
