"use client";
import * as React from "react";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "900px",
  margin: "0 auto",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const Bullet = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const TermsPage = () => {
  return (
    <Container>
      <Section>
        <Typography variant="h4" gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography variant="body1">
          These Terms & Conditions govern the use of services and digital tools offered by Leaf Water Skin Care Studio. By booking an appointment or using our AI skin analysis system, you agree to the following terms:
        </Typography>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>
          1. Appointments & Scheduling
        </Typography>
        <ul>
          <Bullet>Clients are required to arrive on time for all appointments. A grace period of 10 minutes is allowed.</Bullet>
          <Bullet>We ask for 24 hours’ notice to cancel or reschedule appointments. Late cancellations and no-shows may be charged a fee or forfeit the session.</Bullet>
          <Bullet>Repeated no-shows may result in loss of booking privileges.</Bullet>
        </ul>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>
          2. Use of AI Skin Scanning Technology
        </Typography>
        <ul>
          <Bullet>Clients who undergo AI skin scanning acknowledge and accept that biometric imaging will be captured and analyzed to provide a personalized skincare experience.</Bullet>
          <Bullet>This data is stored securely and used exclusively for treatment customization and progress tracking.</Bullet>
          <Bullet>Your participation in AI scans is optional, but declining may limit the accuracy of our assessments and treatment outcomes.</Bullet>
        </ul>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>
          3. Product Sales & Services
        </Typography>
        <ul>
          <Bullet>All skincare product sales are final unless the item is damaged or incorrect.</Bullet>
          <Bullet>Service packages and memberships are non-transferable and subject to availability.</Bullet>
          <Bullet>We reserve the right to change service pricing, descriptions, or product offerings at any time.</Bullet>
        </ul>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>
          4. Medical Disclaimer
        </Typography>
        <ul>
          <Bullet>Our treatments are not a substitute for dermatological or medical care. Clients must disclose known allergies, conditions (such as pregnancy or skin sensitivities), or medication use prior to treatments.</Bullet>
          <Bullet>Leaf Water Skin Care Studio is not responsible for reactions or results arising from incomplete disclosures.</Bullet>
        </ul>
      </Section>

      <Section>
        <Typography variant="h6" gutterBottom>
          5. Image & Testimonial Usage
        </Typography>
        <ul>
          <Bullet>We may request your permission to share before-and-after photos, testimonials, or feedback on our website or social media. No content will be used without your signed release.</Bullet>
        </ul>
      </Section>
    </Container>
  );
};

export default TermsPage;

