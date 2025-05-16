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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import coverBuiltByPros from "assets/images/bg-led-new.png";

function BuiltByDevelopers() {
  const bgImage = coverBuiltByPros;
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Construit par des professionnels
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            La meilleure installation et mise en œuvre jamais réalisée
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Des écrans LED aux logos 3D, de l&apos;installation intérieure aux installations
            extérieures, en passant par la conception d&apos;écrans LED carrés pour fourgons et
            fourgonnettes, nous vous proposons une large gamme de produits. Notre priorité est de
            fournir des produits de haute qualité et de satisfaire nos clients.
          </MKTypography>
          {/*<MKTypography
            component="a"
            href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
            target="_self"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Read docs <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
