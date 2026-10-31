"use client";
import HomeBannerComponent from "@/containers/home/Banner/Banner";
import HowItWork from "@/containers/home/HowItWork/HowItWork";
import ScanYourFace from "@/containers/home/ScanFace/ScanFace";
import StepThree from "@/containers/home/SetpThree/StepThree";
import { useValidateDomainMutation } from "@/redux/api/authApi";
import { Container } from "@mui/material";
import { useEffect } from "react";

const HomePage = () => {
  const [validateDomain, { data }] = useValidateDomainMutation();

  useEffect(() => {
    validateDomain({
     subDomain:"skinska"
    })
  }, []);


  return (
    <>
      <Container disableGutters maxWidth="xl">
        <HomeBannerComponent />
        <HowItWork />
        <ScanYourFace />
        <StepThree />
      </Container>
    </>
  );
};

export default HomePage;
