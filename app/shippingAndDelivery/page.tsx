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
  marginBottom: theme.spacing(4),
}));

const List = styled("ul")(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  marginTop: theme.spacing(2),
}));

const ListItem = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  listStyleType: "disc",
}));

const ShippingAndDeliveryPage = () => {
  return (
    <CenteredContainer>
      <Typography variant="h4" mb={5}>
        Shipping & Delivery Policy
      </Typography>

      <Section>
        <Typography variant="body1">
          This Shipping and Delivery Policy applies to all purchases made
          through{" "}
          <Typography variant="body1">
            This Shipping and Delivery Policy applies to all purchases made
            through{" "}
            <a
              href="https://leafwater.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: "bold",
                color: "#1976d2",
                textDecoration: "underline",
              }}
            >
              https://leafwater.in
            </a>
            .
          </Typography>
          Throughout this document, “we”, “us”, “our”, or “Leaf Water” refers to
          Leaf Water Skin Care Studio. Wherever the words “you” or “your” are
          mentioned, it refers to the customer/user purchasing from our Website.
        </Typography>
      </Section>

      {/* Order Processing */}
      <Section>
        <Typography variant="h6">Order Processing</Typography>
        <List>
          <ListItem>
            All orders are processed within 2–3 business days.
          </ListItem>
          <ListItem>
            Business days do not include weekends or public holidays.
          </ListItem>
          <ListItem>
            During high volume periods, shipments may be delayed. Please allow
            additional time in transit.
          </ListItem>
          <ListItem>
            We will contact you in case of significant delays via email or
            phone.
          </ListItem>
        </List>
      </Section>

      {/* Shipping Coverage */}
      <Section>
        <Typography variant="h6">Shipping Coverage</Typography>
        <Typography variant="body1" mt={2}>
          Leafwater.in currently ships across India. For queries related to
          shipping in restricted or remote areas, please contact our support
          team.
        </Typography>
      </Section>

      {/* Shipping Charges */}
      <Section>
        <Typography variant="h6">Shipping Charges</Typography>
        <Typography variant="body1" mt={2}>
          Charges may vary based on location, weight, and order value. Any
          applicable shipping fees will be displayed at checkout before
          purchase.
        </Typography>
      </Section>

      {/* Tracking */}
      <Section>
        <Typography variant="h6">Tracking of Shipment</Typography>
        <List>
          <ListItem>
            You will receive tracking details via email and/or SMS after
            dispatch.
          </ListItem>
          <ListItem>
            Details include: Tracking ID, Courier Name, and Tracking Link.
          </ListItem>
          <ListItem>
            Tracking becomes active within 24 hours of confirmation.
          </ListItem>
        </List>
      </Section>

      {/* Delivery Timeline */}
      <Section>
        <Typography variant="h6">Timeline for Delivery</Typography>
        <Typography variant="body1" mt={2}>
          Most orders are delivered within 3–7 working days from the shipping
          date. Remote areas may require additional time.
        </Typography>
      </Section>

      {/* Delay in Delivery */}
      <Section>
        <Typography variant="h6">Delay in Delivery</Typography>
        <Typography variant="body1" mt={2}>
          While we aim to deliver on time, delays may occur due to unforeseen
          events. If your order is delayed beyond the expected window, please
          call us at +91 8008675263.
        </Typography>
        <List sx={{ mt: 1 }}>
          <ListItem>Natural disasters</ListItem>
          <ListItem>War, strikes, or civil unrest</ListItem>
          <ListItem>Pandemics or health emergencies</ListItem>
          <ListItem>Government restrictions or lockdowns</ListItem>
          <ListItem>Courier disruptions or technical issues</ListItem>
        </List>
      </Section>

      {/* Signature Requirement */}
      <Section>
        <Typography variant="h6">Signature on Delivery</Typography>
        <Typography variant="body1" mt={2}>
          Some orders may require a signature on delivery. Couriers will attempt
          delivery up to three times (excluding Sundays and holidays).
        </Typography>
      </Section>

      {/* Customs and Duties */}
      <Section>
        <Typography variant="h6">Customs, Duties, and Taxes</Typography>
        <Typography variant="body1" mt={2}>
          Leaf Water is not responsible for any customs duties or taxes
          applicable outside India. These costs must be borne by the customer.
        </Typography>
      </Section>

      {/* Damaged or Lost Shipments */}
      <Section>
        <Typography variant="h6">Damaged or Lost Shipments</Typography>
        <List>
          <ListItem>
            Refuse the delivery if the package is visibly damaged and contact us
            immediately.
          </ListItem>
          <ListItem>
            If accepted, retain original packaging and contact the shipping
            carrier to file a claim.
          </ListItem>
          <ListItem>
            Share claim details with our team for further assistance.
          </ListItem>
        </List>
      </Section>

      {/* Contact Info */}
      <Section>
        <Typography variant="h6">Contact Us</Typography>
        <Typography variant="body1" mt={2}>
          For any queries or support related to shipping, tracking, or delivery:
        </Typography>
        <Box mt={2} ml={3}>
          📞 <strong>Phone:</strong>{" "}
          <a
            href="tel:+918977016605"
            style={{ color: "#1976d2", textDecoration: "underline" }}
          >
            +91 8008675263
          </a>{" "}
          (Mon–Sun, 10 AM – 8 PM)
        </Box>
      </Section>
    </CenteredContainer>
  );
};

export default ShippingAndDeliveryPage;
