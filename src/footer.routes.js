// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
//import TwitterIcon from "@mui/icons-material/Twitter";
//import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
//import logoCT from "assets/images/logo-ct-dark.png";
import logoAMCHLED from "assets/images/logo-amchled.jpg";
const date = new Date().getFullYear();

export default {
  brand: {
    name: "AMOUCH LED",
    image: logoAMCHLED,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <WhatsappIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Entreprise",
      items: [
        { name: "à propos de nous", href: "https://www.creative-tim.com/presentation" },
        { name: "notre localisation", href: "https://www.creative-tim.com/templates/premium" },
        { name: "nos partenaires", href: "https://www.creative-tim.com/blog" },
      ],
    },
    /*{
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },*/
    /*{
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },*/
    {
      name: "légale",
      items: [
        { name: "termes et conditions", href: "https://www.creative-tim.com/terms" },
        { name: "politique de confidentialité", href: "https://www.creative-tim.com/privacy" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} AMOUCH LED by{" "}
      <MKTypography
        component="a"
        href="https://www.amouchled.ma"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        AMOUCH LED
      </MKTypography>
      .
    </MKTypography>
  ),
};
