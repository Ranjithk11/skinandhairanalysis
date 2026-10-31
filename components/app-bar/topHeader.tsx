"use client";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import IconWithLabelComponent from "./IconWithLabel";
import { IoMailOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { Grid } from "@mui/material";
import Marquee from "react-fast-marquee";
import { companyEmailId, companyMobileNumber } from "@/utils/constants";

const StyledTopHeaderComponent = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: 5,
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.common.white,
}));

const TopHeaderComponent = () => {
  return (
    <StyledTopHeaderComponent>
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Marquee>
              India's exports rose by 6.21 per cent to USD 33.57 billion in
              October this year, as against USD 31.6 billion a year-ago,
              government data showed on Wednesday. India's exports rose by 6.21
              per cent to USD 33.57 billion in October this year, as against USD
              31.6 billion a year-ago, government data showed on Wednesday.
            </Marquee>
          </Grid>
          <Grid item>
            <Box>
              <IconWithLabelComponent
                icon={<IoMailOutline />}
                title={companyEmailId}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <IconWithLabelComponent
                icon={<IoMdCall />}
                title={companyMobileNumber}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledTopHeaderComponent>
  );
};

export default TopHeaderComponent;
