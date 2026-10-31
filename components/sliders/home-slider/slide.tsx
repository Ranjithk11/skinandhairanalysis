"use client";
import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Grid  from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const StyledSlideBox = styled(Box)(({ theme }) => ({
  minHeight: 600,
  width: "100%",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.only("xs")]: {
    minHeight: 200,
  },
  "& img": {
    filter: `brightness(60%)`,
  },
  "& .__content_wrapper": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display:'flex',
    alignItems:"center",
    justifyContent:'center',
    zIndex:2
  },
  "& .MuiTypography-h3":{
    color:theme.palette.common.white,
    fontWeight:300,
    fontSize:`3.1rem`
  },
  "& .MuiTypography-h2":{
    color:theme.palette.common.white,
    fontWeight:900
  }
}));

interface HomeSlideComponentProps {
  imgUrl: string;
}

const HomeSlideComponent = ({ imgUrl }: HomeSlideComponentProps) => {
  return (
    <StyledSlideBox>
      <Image
        alt=""
        src={imgUrl}
        fill
        objectFit="cover"
        sizes="(max-width:786px) 100vw, (max-width:1200) 50vw, 33vw"
      />
      <Box component="div" className="__content_wrapper">
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} >
          <Grid item>
            <Typography textAlign="center" variant="h3">
              EXPERT CONSULTANT SERVICE
            </Typography>
            <Typography textAlign="center" variant="h2">
              INDUSTRIAL SUBSIDIES
            </Typography>
            
          </Grid>
          <Grid item>
            <Button>Learn More</Button>
          </Grid>
          
        </Grid>
      </Box>
    </StyledSlideBox>
  );
};

export default HomeSlideComponent;
