"use client";
import * as React from "react";
import { Box, Typography, styled } from "@mui/material";

const CenteredContainer = styled(Box)(({ theme }) => ({
  maxWidth: "900px",
  margin: "0 auto",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const Section = styled("section")(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const List = styled("ul")(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  marginTop: theme.spacing(2),
}));

const ListItem = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1),
     listStyleType: "disc",

}));

const ReturnAndRefundPage = () => {
  return (
    <CenteredContainer>
      <Typography variant="h4" mb={5}>
        Return & Refund Policy
      </Typography>

      {/* Return Eligibility */}
      <Section>
        <Typography variant="h6">Return Eligibility</Typography>
        <List>
          <ListItem>Returns and refunds are accepted within 7 days of receiving the product.</ListItem>
          <ListItem>Products must be unused, in original packaging, and include all original accessories.</ListItem>
        </List>
      </Section>

      {/* Non-Returnable Items */}
      <Section>
        <Typography variant="h6">Non-Returnable Items</Typography>
        <List>
          <ListItem>Used products are not eligible for return or refund.</ListItem>
          <ListItem>All beauty and personal care items are non-returnable if opened, due to hygiene and safety concerns.</ListItem>
          <ListItem>Unopened beauty products can be returned within the eligible return window.</ListItem>
        </List>
      </Section>

      {/* Return Shipping */}
      <Section>
        <Typography variant="h6"> Return Shipping</Typography>
        <List>
          <ListItem>For defective or damaged items, Leaf Water covers the return shipping cost.</ListItem>
          <ListItem>For non-defective returns (e.g., change of mind), the customer is responsible for return shipping.</ListItem>
        </List>
      </Section>

      {/* Refund Process */}
      <Section>
        <Typography variant="h6">Refund Process</Typography>
        <List>
          <ListItem>Refunds are issued via NEFT to the original account within 5–7 working days after we receive and inspect the returned item.</ListItem>
          <ListItem>We do not support refunds via UPI, wallets, or cash.</ListItem>
        </List>
      </Section>

      {/* Deductions & Fees */}
      <Section>
        <Typography variant="h6"> Deductions & Fees</Typography>
        <List>
          <ListItem>Only the original shipping charges will be deducted from the refund amount.</ListItem>
          <ListItem>Cash on Delivery (COD) fees are non-refundable.</ListItem>
          <ListItem>No restocking fees are charged.</ListItem>
        </List>
      </Section>

      {/* Return Address */}
      <Section>
        <Typography variant="h6">Return Address</Typography>
        <Typography variant="body1" component="div" mt={2} ml={3}>
          <Box component="address" sx={{ fontStyle: "normal", lineHeight: 1.8 }}>
            Leaf Water Skin Care Studio <br />
            SF 201, Second Floor, Road Number 55 <br />
            Opp. Peddamma Gudi Entrance, Jubilee Hills <br />
            Hyderabad – 500033
                   {/* Morya Grand, 501, Andheri West, Mumbai, Maharashtra 400053  */}

          </Box>
        </Typography>
      </Section>

      {/* Where to Find This Policy */}
      <Section>
        <Typography variant="h6">Where to Find This Policy</Typography>
        <List>
          <ListItem>Website footer</ListItem>
          <ListItem>Product pages</ListItem>
          <ListItem>During the checkout process</ListItem>
        </List>
      </Section>
    </CenteredContainer>
  );
};

export default ReturnAndRefundPage;
