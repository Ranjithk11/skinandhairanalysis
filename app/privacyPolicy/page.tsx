"use client";
import React from "react";
import { Box, Typography, Container, List, ListItem, ListItemText } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Privacy Policy
      </Typography>

      <Typography paragraph>
        At Leaf Water Skin Care Studio, your trust is our most valuable asset. We are committed to
        protecting your privacy and ensuring that your personal and biometric data is handled with
        care, transparency, and the highest level of security.
      </Typography>

      {/* Section 1 */}
      <Typography variant="h6" gutterBottom mt={4}>
        1. Information We Collect
      </Typography>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary="• Personal Information:"
            secondary="Full name, email, phone number, birthday (optional), skin goals/preferences, appointment history."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="• AI Skin Analysis Data:"
            secondary="High-resolution facial images, mapped skin concerns, and diagnostic metrics collected by our AI scanner."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="• Transactional Data:"
            secondary="Purchase history of products/services and gift card usage."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="• Communication Data:"
            secondary="Emails or messages you exchange with us regarding appointments, feedback, or support inquiries."
          />
        </ListItem>
      </List>

      {/* Section 2 */}
      <Typography variant="h6" gutterBottom mt={4}>
        2. How We Use Your Data
      </Typography>
      <List disablePadding>
        <ListItem><ListItemText primary="• To analyze your skin accurately and build personalized treatment plans." /></ListItem>
        <ListItem><ListItemText primary="• To track skin progress over time using AI comparison tools." /></ListItem>
        <ListItem><ListItemText primary="• To recommend specific treatments or products based on your needs." /></ListItem>
        <ListItem><ListItemText primary="• To improve service quality, training, and studio performance." /></ListItem>
        <ListItem><ListItemText primary="• To communicate with you about bookings, promotions, or skincare tips (with your permission)." /></ListItem>
      </List>
      <Typography paragraph mt={2}>
        We do not sell, rent, or share your personal or biometric data with third parties for marketing purposes. 
        Any third-party service providers (e.g., scheduling software or payment processors) are contractually bound 
        to maintain confidentiality and security.
      </Typography>

      {/* Section 3 */}
      <Typography variant="h6" gutterBottom mt={4}>
        3. Data Storage & Security
      </Typography>
      <Typography paragraph>
        All personal and AI data is encrypted and stored on secure, access-restricted platforms. We follow 
        HIPAA-inspired guidelines and industry-standard protocols for data protection.
      </Typography>
      <Typography paragraph>
        Images from the AI skin analysis are stored only to track skin progress and are never used in marketing 
        without your signed, written consent.
      </Typography>

      {/* Section 4 */}
      <Typography variant="h6" gutterBottom mt={4}>
        4. Your Rights
      </Typography>
      <List disablePadding>
        <ListItem><ListItemText primary="• Access or request a copy of your data." /></ListItem>
        <ListItem><ListItemText primary="• Ask for corrections or updates to your personal record." /></ListItem>
        <ListItem><ListItemText primary="• Withdraw consent for data usage and request deletion at any time." /></ListItem>
        <ListItem><ListItemText primary="• Decline AI skin analysis (though some services may be affected)." /></ListItem>
      </List>

      <Typography paragraph mt={2}>
        To exercise your rights or ask questions about your data, please email us at{" "}
        <strong>[Your Privacy Contact Email]</strong>.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
