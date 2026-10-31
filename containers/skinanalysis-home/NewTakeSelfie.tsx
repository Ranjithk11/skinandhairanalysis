"use client";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ImageUploadCard from "@/components/cards/upload/ImageUploadCard";

const StyledTakeSelfie = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  paddingTop: 84,
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiCard-root": {
    height: "100%",
  },
  "& .MuiCardContent-root": {
    "& .MuiTypography-h4": {
      fontWeight: 700,
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: 700,
      fontSize: 24,
    },
    "& .MuiTypography-subtitle2": {
      fontWeight: 500,
      fontSize: 20,
    },
    "& .MuiTypography-body1": {
      fontWeight: 400,
      fontSize: 14,
      color: theme.palette.text.secondary,
    },
  },
  "& .photo_wrapper": {
    width: "100%",
    position: "relative",
    height: "100%",
    border: `5px dotted ${theme.palette.grey[200]}`,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& .selfy_image": {
      //overflow: "hidden",
      width: 250,
      height: 300,
      borderRadius: "10px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      "& .camera_icon": {
        position: "absolute",
        right: 20,
        bottom: 20,
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.common.white,
        borderRadius: "100%",
      },
      "& .errorInfo": {
        padding: 10,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 0, 0, 0.6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiTypography-body1": {
          color: theme.palette.common.white,
          marginTop: 10,
          fontSize: "12px",
          lineHeight: 1.5,
        },
        "& .MuiButton-outlined": {
          minWidth: 50,
          marginTop: 20,
        },
      },
      "& .successInfo": {
        padding: 10,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(70, 138, 11, 0.6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiTypography-body1": {
          color: theme.palette.common.white,
          marginTop: 10,
          fontSize: "12px",
          lineHeight: 1.5,
        },
        "& .MuiButton-outlined": {
          minWidth: 50,
          marginTop: 20,
        },
      },
    },
  },
  "& .upload_cards_wrapper": {
    width: "60%",
    [theme.breakpoints.only("xs")]: {
      width: "80%",
    },
  },
  "& .MuiButton-root": {
    minWidth: 250,
  },
  "& .MuiDialogContent-root": {
    position: "relative",
    padding: 40,
  },
  svg: {
    color: theme.palette.grey[400],
  },
}));

const NewTakeSelfie = () => {
  return (
    <StyledTakeSelfie disableGutters maxWidth="xl">
      <Box component="div" className="photo_wrapper">
        <Box component="div" className="upload_cards_wrapper">
          <Grid container alignItems="stretch" spacing={2}>
            <Grid item xs={12} md={4} sm={4} lg={4} xl={4}>
              <ImageUploadCard
                uploadControlKey="selfyImage"
                title="Front Selfie"
              />
            </Grid>
            <Grid item xs={12} md={4} sm={4} lg={4} xl={4}>
              <ImageUploadCard
                title="Right Selfie"
                uploadControlKey="rightSelfyImage"
              />
            </Grid>
            <Grid item xs={12} md={4} sm={4} lg={4} xl={4}>
              <ImageUploadCard
                title="Left Selfie"
                uploadControlKey="leftSelfyImage"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </StyledTakeSelfie>
  );
};

export default NewTakeSelfie;
