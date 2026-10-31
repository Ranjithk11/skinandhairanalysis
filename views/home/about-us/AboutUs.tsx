import { aboutUsPlaceholder } from "@/utils/constants";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import React from "react";
import Typography from "@mui/material/Typography";

const StyledAboutUsComponent = styled(Box)(({ theme }) => ({
  padding: `100px 150px`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  minHeight: 600,
  height: "auto",
  overflow: "hidden",
  position: "relative",
  "& .MuiTypography-root": {
    color: theme.palette.common.white,
  },
  "& .MuiTypography-h2": {
    fontWeight: 800,
  },
}));

const AboutUsComponent = () => {
  return (
    <StyledAboutUsComponent
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${aboutUsPlaceholder})`,
      }}
    >
      <Box component="div" className="__overly">
        <Grid container>
          <Grid item xs={12}>
            <Typography mb={5} textAlign="center" variant="h2">
              ABOUT US
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography mb={4} textAlign="left">
              We have two decades of experience handling matters related to
              Foreign Trade Policy DGFT, Indirect Taxation (GST), and Customs
              related matters as well as Industrial Subsidies. We would be
              pleased to extend our support to your Organisation in the
              following aspects.
            </Typography>
            <Typography mb={4} fontWeight={700} variant="h4">
              Facilitation
            </Typography>
            <Typography mb={4} textAlign="left">
              Our core competency lies in the facilitation of various Licences /
              Authorisations / Benefits that your business is eligible for, from
              DGFT and Customs Authorities. We can help you with getting the
              following
            </Typography>
            <Typography mb={4} fontWeight={700} variant="h4">
              Consultation / Representation
            </Typography>
            <Typography mb={4} textAlign="left">
              Over a couple of years, we had the opportunity to work with
              various Industries and understand the specific problems faced by
              the businesses. To help businesses resolve these problems we
              developed competency in the following areas:
            </Typography>
            <Typography mb={1} textAlign="left">
              1. Replies to Show Cause Notices, Filing of Appeals and Submission
              of Grievances.
            </Typography>
            <Typography mb={2} textAlign="left">
              2. Representation against Speaking Orders issued by the Customs
              Authority for mis-declaration /wrong declaration /wrong
              classification / undervaluation / higher Valuation, etc
            </Typography>
            <Typography mb={2} textAlign="left">
              3. Consulting / Facilitation of various Industrial Subsidies
            </Typography>
            <Typography mb={4} textAlign="left">
              4. Legal Advisory related to Exim procedures
            </Typography>
            <Typography mb={4} fontWeight={700} variant="h4">
              Ease of Doing Business
            </Typography>
            <Typography mb={4} textAlign="left">
              With a vision to make Import & Export business management more
              simpler, we have developed a customized Enterprise Resource
              Planning (ERP) software which will help you in the following areas
            </Typography>
            <Typography mb={1} textAlign="left">
              1. Safekeeping of all Import Export Documentation
            </Typography>
            <Typography mb={2} textAlign="left">
              2. Monitoring of Export Obligation
            </Typography>
            <Typography mb={2} textAlign="left">
              3. Timely reminders of expiry dates and other important milestones
              of licenses
            </Typography>
            <Typography mb={2} textAlign="left">
              4. Intimation for applying of extensions and closure of licenses
            </Typography>
            <Typography mb={2} textAlign="left">
              5. Constant updations regarding the new Notifications / Policy
              Circulars / Public Notices / Trade Notices from DGFT & Customs
              which are related to your business. We request you to provide us
              with a chance to speak to you and see how we can be helpful for
              DGFT (EXIM) / Customs related matters
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyledAboutUsComponent>
  );
};

export default AboutUsComponent;
