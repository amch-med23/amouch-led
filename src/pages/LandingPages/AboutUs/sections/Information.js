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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Qui sommes-nous?"
                    description="Nous sommes une petite entreprise basée à Agadir, au Maroc. Nous sommes spécialisés dans le développement et la conception d'écrans LED et de logos 3D. Notre objectif est de fournir des services de haute qualité à nos clients dans tout le Maroc. Nous avons collaboré avec de nombreux clients, particuliers et entreprises, qui ont tous laissé des témoignages positifs sur notre travail. Nous espérons vous compter parmi nos clients."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Date et circonstances de la fondation"
                    description="Ayoub Amouch a fondé « Amouch Led » en 2025, avec son siège social à Agadir, au Maroc. Son objectif était de fournir une conception et une mise en œuvre d'écrans LED de haute qualité, car ce service est très demandé et présente un fort potentiel d'avenir."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Nos compétences sont très demandées"
                    description="Amouch Led a été créée pour répondre aux besoins de publicité et de publication haut de gamme. Notre fondateur a décidé qu'il était préférable de créer l'entreprise afin de pouvoir fournir ses services à un plus large éventail de marchés."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Notre modèle de communication"
                    description="Notre modèle de communication repose sur des échanges et des négociations entre pairs. En tant que client, vous communiquerez directement avec nos techniciens afin qu'ils puissent clarifier tout aspect technique et comprendre l'étendue complète de votre projet. "
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Notre fondateur"
              description="Ayoub Amouch est notre fondateur et le technicien principal, il a accumulé une grande expérience dans le domaine et adapte un très haut niveau de travail professionnel."
              action={{
                type: "internal",
                route: "/pages/landing-pages/contact-us",
                color: "info",
                label: "Contactez-moi",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
