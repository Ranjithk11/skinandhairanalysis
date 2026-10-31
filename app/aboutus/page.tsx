"use client";
import * as React from "react";
import { Box, styled, Typography } from "@mui/material";

const CenteredContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "900px",
  margin: "0 auto",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const AboutUsPage = () => {
  return (
    <CenteredContainer>
      <Section>
        <Typography variant="h4" gutterBottom>
          Welcome to Leaf Water Skin Care
        </Typography>
        <Typography variant="body1">
          Advanced skincare starts here. Discover personalized solutions with AI skin scanning designed to elevate your glow.
        </Typography>
      </Section>

      <Section>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          We are more than just a skincare studio; we are a wellness destination, committed to redefining the way individuals care for their skin. By merging professional esthetic expertise with next-generation AI skin analysis, we deliver hyper-personalized treatments that evolve with your skin’s changing needs over time.
        </Typography>
      </Section>

      <Section>
        <Typography variant="h5" gutterBottom>
          Our Philosophy
        </Typography>
        <Typography variant="body1">
          At Leaf Water, we believe that beautiful skin is the result of balance—between science and technology, innovation and tradition, self-love and self-discipline. Our mission is to empower you to feel radiant in your own skin by providing clean, dermatologist-tested skincare solutions alongside data-driven insights. We strive to bring transparency, education, and trust into every step of your skincare journey.
        </Typography>
      </Section>

      <Section>
        <Typography variant="h5" gutterBottom>
          What Sets Us Apart
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <strong>AI-Powered Skin Analysis:</strong> High-resolution imaging and intelligent diagnostic tools analyze key skin indicators like hydration, pigmentation, pore size, elasticity, and more, helping us tailor each treatment with precision.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Human Expertise:</strong> Licensed estheticians interpret AI scan results and combine them with years of hands-on experience to create holistic, intuitive treatment plans.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Customized Rituals:</strong> Every client receives a completely customized plan based on their skin’s current condition and unique needs.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Clean Beauty Promise:</strong> We use only non-toxic, cruelty-free, dermatologist-tested products, free from parabens, sulfates, synthetic fragrances, and other skin-disrupting ingredients.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Elevated Experience:</strong> Every detail—from the calming interior to botanical aromas and warm towels—is curated to support your well-being.
            </Typography>
          </li>
        </ul>
      </Section>

      <Section>
        <Typography variant="body1">
          Whether you’re seeking a corrective facial, long-term skin transformation, or a moment of deep relaxation, Leaf Water is here to support your wellness inside and out.
        </Typography>
      </Section>
    </CenteredContainer>
  );
};

export default AboutUsPage;
