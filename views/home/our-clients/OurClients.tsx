import { outClientsPlaceholder } from "@/utils/constants";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";
import Marquee from "react-fast-marquee";

const StyledOurClientComponent = styled(Box)(({ theme }) => ({
  padding: `100px 0px`,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  overflow: "hidden",
  position: "relative",
  minHeight: 400,
  "& .MuiTypography-root": {
    color: theme.palette.common.white,
  },
  "& .MuiTypography-h2": {
    fontWeight: 800,
  },
  "& .__client_card": {
    width: "180px",
    minHeight: 80,
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    marginRight:10
  },
}));

const OurClients = () => {
  return (
    <StyledOurClientComponent
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${outClientsPlaceholder})`,
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography mb={5} textAlign="center" variant="h2">
            OUR VALUBLE CLIENTS
          </Typography>
        </Grid>
      </Grid>

      {/* <Marquee>

        </Marquee> */}
      <Box sx={{ width: "100%" }}>
        <Marquee gradient={true} gradientColor="rgba(0, 0, 0, 0.9)" gradientWidth={150}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((client, index) => (
            <Box
              key={client}
              component="div"
              className="__client_card"
              style={{ backgroundImage: `url(/clients/${index}.jpg)` }}
            ></Box>
          ))}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((client, index) => (
            <Box
              key={client}
              component="div"
              className="__client_card"
              style={{ backgroundImage: `url(/clients/${index}.jpg)` }}
            ></Box>
          ))}
        </Marquee>
      </Box>
    </StyledOurClientComponent>
  );
};

export default OurClients;
