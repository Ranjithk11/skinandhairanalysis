import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";

const StyledPaymentServices = styled(Box)(({ theme }) => ({
  paddingBottom: 75,
  paddingTop: 75,
  "& .MuiTypography-h5": {
    fontWeight: 800,
    textTransform: "uppercase",
    color: theme.palette.grey[600],
  },
  "& .MuiTypography-h3": {
    fontWeight: 800,
  },
  "& span": {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
  "& .author_image": {
    width: "100%",
    height: 400,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    borderRadius: 20,
    marginTop: 20,
  },
}));

const Payment = () => {
  return (
    <StyledPaymentServices>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} md={12}>
            <Box mb={4}>
              <Typography gutterBottom textAlign="center" variant="h5">
                Recommended
              </Typography>
              <Typography
                textAlign="center"
                variant="h3"
                sx={{
                  fontSize: { xs: "2rem", sm: "3rem" },
                }}
              >
                <span>Payment</span> Method
              </Typography>
              <Typography textAlign="center" variant="body1">
                Please use the QR code below for booking payments, and ensure
                you call 8008675263 to schedule your appointment
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <img width={300} src="/images/payment.jpeg" />
          </Grid>
        </Grid>
      </Container>
    </StyledPaymentServices>
  );
};

export default Payment;
