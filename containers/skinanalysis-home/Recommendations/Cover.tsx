import {
  Button,
  Dialog,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SOCIAL_LINKS } from "@/utils/constants";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: 200,
  [theme.breakpoints.between("xs", "sm")]: {
    minHeight: 150,
  },
  height: "auto",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "& .user-popup-image": {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "top",
  },
  "& .user-image": {
    width: 100,
    height: 100,
    borderRadius: 100,
    [theme.breakpoints.between("xs", "sm")]: {
      width: 75,
      height: 75,
    },
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
  "& .info-icon": {
    svg: {
      color: theme.palette.common.white,
      fontSize: 30,
    },
  },
  "& .MuiTypography-body1": {
    fontSize: 20,
    color: theme.palette.common.white,
  },
  "& .MuiTypography-h6": {
    fontSize: 30,
    color: theme.palette.common.white,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 25,
    },
  },
  "& .dialog-info": {
    width: 450,
    padding: 20,
  },

  // [theme.breakpoints.only("xs")]: {
  //   minHeight: 200,
  // },
  // [theme.breakpoints.only("sm")]: {
  //   minHeight: 250,
  // },
  // [theme.breakpoints.up("sm")]: {
  //   minHeight: 300,
  // },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  "& .MuiTypography-h2": {
    fontWeight: 800,
    textTransform: "uppercase",
    color: theme.palette.common.white,
    [theme.breakpoints.only("xs")]: {
      fontSize: 30,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 55,
    },
  },
  "& .MuiTypography-subtitle1": {
    fontWeight: 400,
    color: theme.palette.common.white,
    letterSpacing: 2,
    fontSize: 26,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 20,
    },
  },
  "& .back-button": {
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
  "& span": {
    color: "#ffc107",
  },
}));

interface CoverPageProps {
  useData: any;
  dataFUQR: any;
  publicUserProfile?: any;
}

const CoverPage = ({
  useData,
  dataFUQR,
  publicUserProfile,
}: CoverPageProps) => {
  const { data: session } = useSession();
  const theme = useTheme();
  const [showUserInfo, setShowUserInfo] = useState<boolean>(false);
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleSocialLinkNavigation = (url: string) => {
    window.open(url, "_blank");
  };



  return (
    <>
      <StyledBoxWrapper
        style={{ backgroundImage: `url(/images/userProfileBg1.png)` }}
      >
        <Box sx={{ width: "100%" }} p={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 3 }}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <Box
                component="div"
                className="user-image"
                sx={{
                  backgroundImage: `url(${useData?.data?.url})`,
                }}
              ></Box>
            </Grid>
            <Grid item xs container alignItems="center" spacing={3}>
              <Grid item xs>
                <Typography variant="body1">Hey there,</Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <Box>
                    {publicUserProfile ? (
                      <>
                        <Typography variant="h6">
                          {publicUserProfile?.name}
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="h6">
                        {session?.user.firstName}
                        {session?.user.lastName}
                      </Typography>
                    )}
                  </Box>
                  {/* <Box component="div" className="info-icon">
                    <IconButton size="small">
                      <Icon
                        onClick={() => setShowUserInfo(true)}
                        icon="material-symbols:info-outline-rounded"
                      />
                    </IconButton>
                  </Box> */}
                </Box>
              </Grid>
              <Grid
                item
                container
                xs
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
                // paddingLeft={isMobile ? 0:1}
                direction={isMobile ? "column" : "row"} // Stack on mobile, row on desktop
              >
                <Grid item>
                  <Typography
                    color="white"
                    fontWeight="bold"
                    fontSize="0.875rem"
                    textAlign="center"
                  >
                    Subscribe To Our Channel <br /> For
                    <span> Live Stream Consultations</span>
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  xs="auto"
                  spacing={1}
                  justifyContent="flex-end"
                >
                  <Grid item>
                    <IconButton
                      onClick={() =>
                        handleSocialLinkNavigation(SOCIAL_LINKS.insta)
                      }
                      sx={{
                        color: "white",
                        padding: "4px",
                        fontSize: isMobile ? "1rem" : "1.5rem",
                      }}
                    >
                      <AiFillInstagram />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      onClick={() =>
                        handleSocialLinkNavigation(SOCIAL_LINKS.youtube)
                      }
                      sx={{
                        color: "white",
                        padding: "4px",
                        fontSize: isMobile ? "1rem" : "1.5rem",
                      }}
                    >
                      <AiFillYoutube />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      onClick={() =>
                        handleSocialLinkNavigation(SOCIAL_LINKS.facebook)
                      }
                      sx={{
                        color: "white",
                        padding: "4px",
                        fontSize: isMobile ? "1rem" : "1.5rem",
                      }}
                    >
                      <AiFillFacebook />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>

              <Grid className="back-button" item>
                <Button
                  onClick={() => {
                    router.back();
                  }}
                  startIcon={<Icon icon="material-symbols:chevron-backward" />}
                >
                  Back
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {showUserInfo && (
          <Dialog open={true} maxWidth="sm">
            <Box
              sx={(theme) => ({
                width: 450,
                padding: 3,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(/images/userInfoBg.png)`,
              })}
              component="div"
              className="dialog-info"
            >
              <Grid container>
                <Grid item xs={8} container spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                    >
                      Hey there,
                    </Typography>

                    {publicUserProfile ? (
                      <>
                        <Typography
                          sx={(theme) => ({
                            color: theme.palette.common.white,
                          })}
                          variant="h6"
                        >
                          {publicUserProfile?.name}
                        </Typography>
                      </>
                    ) : (
                      <Typography
                        sx={(theme) => ({
                          color: theme.palette.common.white,
                        })}
                        variant="h6"
                      >
                        {publicUserProfile?.name || session?.user.firstName}
                      </Typography>
                    )}
                  </Grid>
                  {/* <Grid item xs={12}>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                    >
                      Number
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                      variant="h6"
                    >
                      {publicUserProfile?.phoneNumber ||
                        session?.user?.mobileNumber}
                    </Typography>
                  </Grid> */}
                  <Grid item xs={12}>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                    >
                      Age
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                      variant="h6"
                    >
                      {dataFUQR?.age}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                    >
                      Gender
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                      variant="h6"
                    >
                      {dataFUQR?.gender}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Box mb={2}>
                    <Button
                      onClick={() => {
                        setShowUserInfo(false);
                      }}
                    >
                      Close
                    </Button>
                  </Box>
                  <Box
                    component="div"
                    className="user-popup-image"
                    sx={{
                      width: 120,
                      height: 150,
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                      backgroundImage: `url(${useData?.data?.url})`,
                    }}
                  ></Box>
                </Grid>
              </Grid>
            </Box>
          </Dialog>
        )}
      </StyledBoxWrapper>
    </>
  );
};

export default CoverPage;
