import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import React from "react";
const belina = "imagesTeam.jpg";

const StyledMeetTeamWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: 75,
  paddingBottom: 75,
  backgroundColor: theme.palette.grey[100],
  "& .MuiTypography-h5": {
    fontWeight: 800,
    textTransform: "uppercase",
    color: theme.palette.grey[600],
  },
  "& .MuiTypography-h6": {
    fontWeight: 800,
    textTransform: "uppercase",
    marginTop: 15,
  },
  "& .MuiTypography-h4": {
    fontWeight: 800,
    fontSize: 35,
    marginTop: 45,
  },
  "& .MuiTypography-subtitle1": {
    marginBottom: 5,
  },
  "& .MuiTypography-h3": {
    fontWeight: 800,
  },
  "& span": {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
  "& .author_image": {
    width: "100%",
    height: 400,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    borderRadius: 20,
    marginTop: 20,
  },
}));

const MeetTeam = () => {
  return (
    <StyledMeetTeamWrapper>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box mb={4}>
              <Typography textAlign="center" variant="h3">
                Meet The <span>Team</span>
              </Typography>
            </Box>
          </Grid>
          {/* <Grid item xs={12}>
            <Box
              component="div"
              className="author_image"
              style={{
                backgroundImage: `url(/images/Team.png)`,
              }}
            ></Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={3}>
              <Typography textAlign="center" variant="h4">
                Skinska Care Team
              </Typography>

              <Box mt={1}>
                <Typography textAlign="center" variant="subtitle1">
                  Navya,Srimukhi
                </Typography>
                <Typography
                  fontWeight={700}
                  color="primary"
                  textAlign="center"
                  variant="body1"
                >
                  Skin Care Consultants
                </Typography>
              </Box>
            </Box>
          </Grid> */}
          <Grid item xs={12}>
            <Box mt={3}>
              <Typography textAlign="left" variant="body1">
                At Leaf Water our dedicated team is driven by a commitment to
                exceptional skincare, our team consists of cosmetology doctors,
                cosmetology consultant and technical experts who are dedicated
                to providing you expert care designed and tailored to your
                unique needs. With the help of our in house cosmetology experts,
                data scientists and software developers we built India’s number
                One AI Skin Analysis engine to accurately analyze your skin
                condition and recommend carefully curated products, services and
                procedure to take care of your immediate concerns while
                addressing long term needs to keep your skin healthy and Glow.
                Together,we foster an environment of care and professionalism,
                focused on your skincare needs,to enhance your natural beauty
                and self-confidence with every interaction.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledMeetTeamWrapper>
  );
};

export default MeetTeam;
