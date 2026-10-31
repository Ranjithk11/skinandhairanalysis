import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from "@mui/icons-material/Call";

const StyledCtaDialogModel = styled(Box)(({ theme }) => ({
  width: 600,
  height: 300,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& .close-icon-wrapper": {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));
const YellowButton = styled(Button)({
  backgroundColor: "linear-gradient(90deg, #00A76F 0%, #FFDD1B 100%)",
  color: "white",
  borderRadius: "8px",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#E6C418",
  },
});

const StyledCosmeticRecommdations = styled(Box)(({ theme }) => ({
  paddingBottom: 75,
  paddingTop: 75,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top center",
  "& .MuiTypography-h5": {
    fontWeight: 600,
  },
  "& .MuiTypography-h6": {
    fontWeight: 700,
    fontSize: 30,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 28,
    },
  },
  "& .MuiTypography-h3": {
    fontWeight: 800,
  },
  "& span": {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
  "& .salone_card_wrapper": {
    width: "100%",
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.common.white,
    padding: 20,
    borderRadius: 10,
    height: "100%",
    "& .card_image": {
      width: "100%",
      height: 300,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "top center",
      borderRadius: 10,
      marginBottom: 20,
    },
    "& .MuiTypography-body1": {
      color: theme.palette.text.secondary,
    },
  },
}));

const CosmeticRecommdations = ({ data }: { data: any[] }) => {
  const [openCTA, setOpenCTA] = useState<boolean>(false);

  return (
    <StyledCosmeticRecommdations
      sx={{ backgroundImage: `url(/images/homeBg_1.png)` }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="stretch">
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
                  <span>Cosmetic Services</span>
                </Typography>
                {/* <img src="/images/leafwater_logo.png" width={150} /> */}
              </Box>
            </Box>
          </Grid>
          {data?.map((item) => (
            <Grid xs={12} item md={4} key={item?._id}>
              <Box component="div" className="salone_card_wrapper">
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  style={{ height: "100%" }}
                >
                  <Grid item xs>
                    <Box
                      component="div"
                      style={{
                        backgroundImage: `url(${
                          item?.images?.[0]?.url || "/default-image.jpg"
                        })`,
                      }}
                      className="card_image"
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      textAlign="left"
                      color="primary"
                      sx={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}
                      variant="body2"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body1"
                      textAlign="left"
                      sx={{ marginBottom: 2 }}
                    >
                      {item?.description || "No description available."}
                    </Typography>
                    <Typography
                      textAlign="center"
                      variant="body2"
                      sx={{ fontWeight: 900, fontSize: 20 }}
                    >
                      INR.{item?.price}/-
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box textAlign="center" mt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<CallIcon sx={{ color: "white" }} />}
                        onClick={() => setOpenCTA(true)}
                        sx={{
                          padding: "6px 12px",
                          typography: "body1",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
        {openCTA && (
          <Dialog open={openCTA}>
            <StyledCtaDialogModel
              style={{ backgroundImage: `url(/images/popupbg.png)` }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="/logo/beautypodlogo.png"
                  alt="Logo"
                  style={{
                    width: "250px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box mt={3} sx={{ display: "flex", gap: 2, width: "80%" }}>
                <YellowButton
                  onClick={() => window.open("https://leafwater.in/", "_blank")}
                >
                  leafwater.in
                </YellowButton>
                <YellowButton href="tel:08008675263" size="medium">
                  Call us at 08008675263
                </YellowButton>
              </Box>
              <Typography
                color="white"
                paddingTop={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center", // Ensures text is centered
                }}
              >
                Tap on the buttons to contact us today to book your appointment!
              </Typography>
              <Box component="div" className="close-icon-wrapper">
                <IconButton
                  onClick={() => {
                    setOpenCTA(false);
                  }}
                >
                  <Icon icon="mdi:close" />
                </IconButton>
              </Box>
            </StyledCtaDialogModel>
          </Dialog>
        )}
      </Container>
    </StyledCosmeticRecommdations>
  );
};

export default CosmeticRecommdations;
