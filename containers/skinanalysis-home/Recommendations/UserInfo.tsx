import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import React from "react";
import { useSession } from "next-auth/react";

interface UserInfoProps {
  useData: any;
  dataFUQR: any;
}

const StyledUseInfoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: 75,
  paddingBottom: 75,
  minHeight: 400,
  [theme.breakpoints.only("xs")]: {
    paddingTop: 30,
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& span": {
    color: theme.palette.primary.main,
    marginRight: 10,
  },
  "& .MuiTypography-h5": {
    fontWeight: 800,
    fontSize: 20,
    [theme.breakpoints.only("xs")]: {
      fontSize: 16,
    },
  },
  "& .MuiTypography-subtitle1": {
    fontWeight: 500,
    fontSize: 18,
    [theme.breakpoints.only("xs")]: {
      fontSize: 16,
    },
  },
  "& .MuiTypography-h6": {
    fontWeight: 800,
    textTransform: "uppercase",
    marginTop: 15,
  },
  "& .MuiTypography-h3": {
    fontWeight: 800,
    [theme.breakpoints.only("xs")]: {
      fontSize: 35,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 45,
    },
  },
  "& .profile_image": {
    width: 250,
    height: 250,
    marginBottom: 30,
    marginTop: 40,
    [theme.breakpoints.only("xs")]: {
      width: 175,
      height: 175,
      marginBottom: 20,
      marginTop: 30,
    },
    [theme.breakpoints.only("sm")]: {
      width: 200,
      height: 200,
      marginBottom: 20,
      marginTop: 30,
    },
    borderRadius: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: `5px solid ${theme.palette.common.white}`,
    boxShadow: `0px 0px 65px -28px rgba(0,0,0,0.75)`,
  },
  "& .userInfo-box": {
    width: "600px",
    padding: 50,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      padding: 0,
    },
    [theme.breakpoints.only("sm")]: {
      width: "100%",
      padding: 30,
    },
  },
}));

const UserInfo = ({ useData, dataFUQR }: UserInfoProps) => {
  const { data: session } = useSession();

  return (
    <StyledUseInfoWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography textAlign="center" variant="h3">
              <span>About</span>You
            </Typography>
          </Grid>
          <Grid item>
            <Box
              component="div"
              className="profile_image"
              style={{ backgroundImage: `url(${useData?.data?.url})` }}
            />
          </Grid>
          <Grid item>
            <Box component="div" className="userInfo-box">
              <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={6}>
                  <Typography variant="subtitle1" textAlign="left">
                    Name
                  </Typography>
                  <Typography variant="h5" textAlign="left">
                    {session?.user?.firstName}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" textAlign="right">
                    Age
                  </Typography>
                  <Typography variant="h5" textAlign="right">
                    {dataFUQR?.age}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" textAlign="left">
                    Phone Number
                  </Typography>
                  <Typography variant="h5" textAlign="left">
                    {session?.user?.mobileNumber}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1" textAlign="right">
                    Gender
                  </Typography>
                  <Typography variant="h5" textAlign="right">
                    {dataFUQR?.gender}
                  </Typography>
                </Grid>
                {/* <Grid item xs={12}>
                  <Typography variant="subtitle1" textAlign="left">
                    NIL
                  </Typography>
                  <Typography variant="h5" textAlign="left">
                    Medications & Allergies
                  </Typography>
                </Grid> */}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledUseInfoWrapper>
  );
};

export default UserInfo;
