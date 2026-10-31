"use client";
import React from "react";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import NextImage from "next/image";

const StyledMainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {
    padding: `20px 20px`,
  },

  "& .main-title": {
    fontSize: 35,
    fontWeight: 700,
    span: {
      color:"#FFC670",
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
    backgroundColor: "#164F3E",
    borderRadius: 10,
    "& .title": {
      fontSize: 25,
      fontWeight: 700,
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 20,
      },
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

const ScanYourFace = () => {
  return (
    <StyledMainBox style={{ backgroundImage: `url(/images/homeBg_1.png)`}}>
      <Grid container spacing={6} paddingBottom={4}>
        <Grid item xs={12}>
          <Container maxWidth={"lg"} className="content-section">
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={9} lg={9} xl={9} container spacing={2}>
                <Grid
                  item
                  xs={12}
                  container
                  alignItems="center"
                  columnSpacing={2}
                >
                  <Grid item>
                    <Typography className="number">2</Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography color={"#CFCFCF"}>Step</Typography>
                    <Typography typography="h5" className="title">
                      Scan your face
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="content">
                    This innovative skin technology was built using thousands of
                    images to develop Al deep learning algorithms. A simple
                    image of your face enables our algorithm to scan and
                    generate a report unique to your skin.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3} lg={3} xl={3}>
                <Box component="div" className="image-section">
                  <NextImage
                    alt="img-1"
                    fill={true}
                    style={{
                      objectFit: "cover",
                    }}
                    src="/images/home_3.jpeg"
                  ></NextImage>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default ScanYourFace;
