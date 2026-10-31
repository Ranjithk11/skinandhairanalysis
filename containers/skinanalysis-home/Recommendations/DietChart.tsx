import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import DietChartCard from "./DietChartCard";
const StyledDietCharWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: 75,
  paddingBottom: 75,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  "& .MuiTypography-h5": {
    fontWeight: 700,
  },
  "& .MuiTypography-h6": {
    fontWeight: 700,
    fontSize: 30,
  },
  "& .MuiTypography-h3": {
    fontWeight: 800,
  },
  "& span": {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
}));

interface DietChartProps {
  data: any;
}

const DietChart = ({ data }: DietChartProps) => {
  return (
    <StyledDietCharWrapper
      sx={{ backgroundImage: `url(/images/homeBg_1.png)` }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box mb={4}>
              <Typography gutterBottom textAlign="center" variant="h5">
                Recommended
              </Typography>
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography textAlign="center" variant="h6">
                  <span>Diet Plans</span>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="stretch">
          {data?.plans?.map((itm: any) => (
            <Grid item xs={12} md={6} key={itm?.title}>
              <DietChartCard data={itm} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledDietCharWrapper>
  );
};

export default DietChart;
