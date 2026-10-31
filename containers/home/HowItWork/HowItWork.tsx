"use client";
import React from "react";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import NextImage from "next/image";
import LeftImageRightContent from "../shared/LeftImageRightContent";

const StyledMainBox = styled(Box)(({ theme }) => ({
  padding: `90px 70px`,
  [theme.breakpoints.between("xs", "sm")]: {
    padding: `20px 20px`,
  },

  backgroundColor: "#f4f4f4",
  "& .main-title": {
    fontSize: 35,
    fontWeight: 700,
    span: {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 30,
      display: "block",
      paddingBottom:"40px",
    },
  },
  "& .image-section": {
    width: "100%",
    height: "200px",
    position: "relative",
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
      color: "#666666",
    },
    "& .number": {
      fontSize: 70,
      fontWeight: 600,
      color: "#FFC670",
    },
  },
}));

const HowItWork = () => {
  return (
    <StyledMainBox>
      <Grid container spacing={{ xs: 3, sm: 4, md: 8, lg: 8, xl: 8 }}>
        <Grid item xs={12}>
          <Typography className="main-title" textAlign="center" variant="h4">
            How does <span>it work?</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <LeftImageRightContent
            number={1}
            imgUrl="/images/home_2.jpeg"
            title="Skin Questionnaire"
            content={`A Skin Questionnaire is a tool designed to assess an
                    individual's skin type, concerns, and needs. It typically
                    includes questions about skin sensitivity, hydration,
                    oiliness, acne, and other conditions to help recommend
                    suitable skincare products or treatments.`}
            span="Step"
          />
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default HowItWork;
