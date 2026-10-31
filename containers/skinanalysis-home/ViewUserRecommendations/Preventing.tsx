"use client";
import { Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import React, { Fragment, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useGetUploadImageInfoMutation } from "@/redux/api/analysisApi";

interface PreventingInfoProps {
  useData: any;
  detectedAttributes: any;
  skinSummary: string;
  analysisAiSummary: any[];
}

const StyledPreventingWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: 75,
  paddingBottom: 75,
  minHeight: 400,
  display: "flex",
  backgroundColor: "#eccc68",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "& .user_profile_image": {
    width: 300,
    height: 350,
    [theme.breakpoints.only("xs")]: {
      width: 200,
      height: 220,
    },
    [theme.breakpoints.only("sm")]: {
      width: 200,
      height: 220,
    },
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 20,
    border: `5px solid ${theme.palette.common.white}`,
    boxShadow: `0px 0px 65px -28px rgba(0,0,0,0.75)`,
  },
  "& .MuiTypography-h5": {
    fontWeight: 800,
    textTransform: "uppercase",
    color: theme.palette.grey[900],
  },
  "& .MuiTypography-h6": {
    fontWeight: 700,
    fontSize: 25,
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      fontSize: 20,
    },
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
      fontSize: 25,
    },
  },
  "& .MuiTypography-h3": {
    fontWeight: 800,
    [theme.breakpoints.only("xs")]: {
      fontSize: 35,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 45,
    },
  },
  "& .MuiTypography-subtitle1": {
    fontWeight: 400,
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
    },
  },
  "& span": {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
}));

const PreventingView = ({
  useData,
  detectedAttributes,
  skinSummary,
  analysisAiSummary,
}: PreventingInfoProps) => {
  const [
    getUploadImageInfo,
    { data: dataImageInfo, isLoading: isLoadingImageInfo },
  ] = useGetUploadImageInfoMutation();

  useEffect(() => {
    if (useData) {
      getUploadImageInfo({
        userId: useData?.data?.user?._id,
        fileName:
          useData?.data?.productRecommendation?.analysedImages[0]?.fileName,
      });
    }
  }, [useData]);

  return (
    <StyledPreventingWrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography gutterBottom textAlign="center" variant="h5">
                WHAT'S PREVENTING YOU TO
              </Typography>
              <Typography textAlign="center" variant="h3">
                Get <span>Your Glow</span>On
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Grid container spacing={6}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              item
              xs={12}
              md={6}
            >
              <Box
                component="div"
                className="user_profile_image"
                sx={{ backgroundImage: `url(${dataImageInfo?.data?.url})` }}
              ></Box>
            </Grid>
            <Grid container item xs={12} md={6}>
              <Grid item xs={12}>
                <Typography
                  mb={2}
                  fontWeight={700}
                  variant="subtitle1"
                  gutterBottom
                >
                  Skin Analysis Atributes
                </Typography>
                {detectedAttributes?.map((item: any, index: number) => (
                  <Typography
                    key={index}
                    fontWeight={700}
                    variant="h6"
                    gutterBottom
                  >
                    ({item.code})-{item?.attribute}
                  </Typography>
                ))}
                {analysisAiSummary?.length > 0 && (
                  <Box mt={2}>
                    <Box mb={3}>
                      <Typography variant="h6">
                        <span>Smart Skin Analysis Report</span>
                      </Typography>
                    </Box>
                    {analysisAiSummary?.map((item: any, index: number) => (
                      <Box mb={2} key={index}>
                        <Typography
                          fontWeight={700}
                          variant="subtitle2"
                          gutterBottom
                        >
                          {item.heading}
                        </Typography>
                        <Typography>
                          {item.data.replace(/>|-/g, " ")}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Grid>
              {/* {skinSummary && (
                <Grid item xs={12}>
                  <Typography
                    mb={2}
                    fontWeight={700}
                    variant="subtitle1"
                    gutterBottom
                  >
                    Skin Analysis Summary
                  </Typography>
                  <Typography
                    mb={2}
                    fontWeight={700}
                    variant="subtitle1"
                    gutterBottom
                  >
                    {skinSummary}
                  </Typography>
                </Grid>
              )} */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledPreventingWrapper>
  );
};

export default PreventingView;
