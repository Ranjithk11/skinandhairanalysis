import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

const StyledTestimonialCardComponent = styled(Box)(({ theme }) => ({
  width: "70%",
  margin: "0 auto",
  height: "auto",

  "& .MuiTypography-h5": {
    fontWeight: 900,
    color: theme.palette.primary.main,
  },
  "& .MuiTypography-subtitle1": {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  "& .MuiCard-root": {
    height: "auto",
    marginBottom: 50,
    marginTop: 20,
    paddingTop: 20,
    backgroundRepeat: "no-repeat",
    backgroundSize:"200px",
    backgroundPosition:"center",


  },
}));

const TestimonialCardComponent = () => {
  return (
    <StyledTestimonialCardComponent>
      <Card sx={{ backgroundImage: `url(/icons/quote.png)` }}>
        <CardContent>
          <Grid
            container
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Typography mb={2} textAlign="center" variant="h5">
                Bharathi Exports
              </Typography>
            </Grid>
            <Grid item>
              <Typography mb={2} textAlign="center" variant="body1">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups. Lorem ipsum is placeholder text commonly used in
                the graphic, print, and publishing industries for previewing
                layouts and visual mockups.
              </Typography>
            </Grid>
            <Grid item>
              <Rating value={4.5} />
            </Grid>
            <Grid item>
              <Box>
                <Typography
                  mt={2}
                  gutterBottom
                  textAlign="center"
                  variant="subtitle1"
                >
                  Radhu Ram
                </Typography>
                <Typography
                  fontSize={14}
                  gutterBottom
                  color="gray"
                  fontWeight={400}
                  mb={2}
                  textAlign="center"
                  variant="body2"
                >
                  Business Executive
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </StyledTestimonialCardComponent>
  );
};

export default TestimonialCardComponent;
