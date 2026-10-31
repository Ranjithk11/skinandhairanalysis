"use client";
import React from "react";
import { Box, Grid, styled, lighten, Typography } from "@mui/material";
import LeftImageRightContent from "../shared/LeftImageRightContent";

const StyledMainBox = styled(Box)(({ theme }) => ({
  padding: `90px 70px`,
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.between("xs", "sm")]: {
    padding: `20px 20px`,
  },
  backgroundPosition: "top",
  backgroundSize: "100%, 50%",
  "& .main-title": {
    fontSize: 35,
    fontWeight: 700,
    span: {
      color: "#FFC670",
    },
  },
  "& .image-section": {
    width: "100%",
    height: "200px",
    position: "relative",
    border: `1px solid ${lighten(theme.palette.divider, 0.4)}`,
    backgroundColor: theme.palette.divider,
    borderRadius: 10,
    overflow: "hidden",
  },
  "& .content-section": {
    "& .title": {
      fontSize: 25,
      fontWeight: 700,
      color: "#FFC670",
    },
    "& .content": {
      color: "#FFFFFF",
    },
    "& .number": {
      fontSize: 70,
      fontWeight: 600,
      color: "#FFC670",
    },
  },
}));

const StepThree = () => {
  return (
    <StyledMainBox style={{ backgroundImage: `url(/images/homeBg_1.png)` }}>
      <Grid container spacing={{ xs: 3, sm: 4, md: 8, lg: 8, xl: 8 }}>
        <Grid item xs={12}>
          <LeftImageRightContent
            imgUrl="/images/home_4.png"
            number={3}
            title="Get recommendations"
            content={`The system provides a detailed report highlighting skin
concerns and offers tailored skincare advice, including product
suggestions and potential treatments.`}
            span="Step"
          />
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default StepThree;
