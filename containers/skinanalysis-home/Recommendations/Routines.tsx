import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import VideoCard from "@/components/cards/video-card/VideoCard";
import { routineVideos } from "@/utils/constants";
import ModalVideo from "react-modal-video";
const StyledMainBoxWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: 50,
  paddingBottom: 50,
  backgroundColor: `#f4f4f4`,

  "& span": {
    color: theme.palette.primary.main,
  },
  "& .user-image": {
    width: "100%",
    minHeight: "350px",
    height:"100%",    
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    borderRadius: 20,
  },
  "& .routine-card": {
    minWidth: "100%",
    minHeight: "350px",
    height: "100%",
    [theme.breakpoints.between("xs", "sm")]: {
      minHeight: "200px",
    },
    display: "flex",
    padding: 40,
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#D9D9D9",
    overflow: "hidden",
  },
  "& .MuiTypography-h6": {
    fontWeight: 700,
    fontSize: 25,
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      fontSize: 20,
    },
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
      fontSize: 25,
    },
    color: theme.palette.primary.main,
  },

  "& .image_wrapper": {
    width: "100%",
    height: "300px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  "& .MuiTypography-h5": {
    fontWeight: 800,
    textTransform: "uppercase",
    color: theme.palette.grey[500],
    fontSize: 30,
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      fontSize: 20,
    },
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
      fontSize: 25,
    },
  },
  "& .MuiTypography-h2": {
    fontWeight: 800,
    //textTransform: "uppercase",
    color: theme.palette.common.white,
    fontSize: 30,
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

  "& .video-card": {
    width: "100%",
    height: 350,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    borderRadius: 10,
    overflow: "hidden",
    "& .overly": {
      position: "absoulte",
      width: "100%",
      height: "100%",
      //borderRadius: 10,
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: `0px 0px 6px 3px rgba(0,0,0,0.16)`,
      "& svg": {
        fontSize: 50,
        color: theme.palette.common.white,
      },
    },
  },
}));

interface RoutineProps {
  userData: any;
}

const Routine = ({ userData }: RoutineProps) => {
  const [videoLink, setVideoLink] = useState<string | null>(null);
  const [routeen, setRouteen] = useState<string>("day");
  return (
    <StyledMainBoxWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6">
              My <span>Routine</span>
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item>
              <Button
                onClick={() => {
                  setRouteen("day");
                }}
                endIcon={<Icon icon="solar:sun-2-line-duotone" />}
                sx={(theme) => ({
                  backgroundColor: theme.palette.common.white,
                  color: theme.palette.common.black,
                  borderRadius: 100,
                  boxShadow: `1px 10px 10px -4px rgba(0,0,0,0.33)`,
                  ...(routeen === "day" && {
                    border: `2px solid ${theme.palette.secondary.main}`,
                  }),
                })}
              >
                Day Routine
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  setRouteen("night");
                }}
                endIcon={<Icon icon="solar:moon-linear" />}
                sx={(theme) => ({
                  backgroundColor: theme.palette.common.black,
                  color: theme.palette.common.white,
                  borderRadius: 100,
                  boxShadow: `1px 10px 10px -4px rgba(0,0,0,0.33)`,
                  "& svg": {
                    color: theme.palette.common.white,
                  },
                  ...(routeen === "night" && {
                    border: `2px solid ${theme.palette.secondary.main}`,
                  }),
                })}
              >
                Night Routine
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} container spacing={3}>
            {routeen === "day" && (
              <>
                <Grid item xs={12} container alignItems="stretch" spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <Box
                      component="div"
                      sx={{
                        backgroundImage: `url(${userData?.data?.url})`,
                        width: "100% !important",
                      }}
                      className="user-image"
                    ></Box>
                  </Grid>
                  <Grid item sm={3}>
                    <Card component="div" className="routine-card">
                      <Typography variant="h6">Cleanser</Typography>
                      <Typography>
                        A cleanser gently removes dirt, oil, and impurities,
                        leaving your skin fresh and clean. It’s the first step
                        to a clear, healthy, and glowing complexion.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item sm={3}>
                    <Card component="div" className="routine-card">
                      <Typography variant="h6">Day cream</Typography>
                      <Typography>
                        Day cream provides essential hydration and protection,
                        shielding your skin from environmental damage. It keeps
                        your complexion smooth, radiant, and ready to face the
                        day.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item sm={3}>
                    <Card component="div" className="routine-card">
                      <Typography variant="h6">Sunscreen</Typography>
                      <Typography>
                        Sunscreen protects your skin from harmful UV rays,
                        preventing sunburn and premature aging. It's an
                        essential daily step for healthy, radiant, and
                        safeguarded skin.
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
                {routineVideos.morning.map((itm, key) => (
                  <Grid key={key} item xs={12} sm={key === 0 ? 8 : 4}>
                    <VideoCard
                      url={itm.imgUrl}
                      onClick={() => {
                        setVideoLink(itm.videoUrl);
                      }}
                    />
                  </Grid>
                ))}
              </>
            )}
            {routeen === "night" && (
              <>
                <Grid item xs={12} container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <Box
                      component="div"
                      sx={{
                        backgroundImage: `url(${userData?.data?.url})`,
                        width: "100% !important",
                      }}
                      className="user-image"
                    ></Box>
                  </Grid>
                  <Grid item sm={3}>
                    <Card component="div" className="routine-card">
                      <Typography variant="h6">Cleanser</Typography>
                      <Typography>
                        A cleanser gently removes dirt, oil, and impurities,
                        leaving your skin fresh and clean. It’s the first step
                        to a clear, healthy, and glowing complexion.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item sm={3}>
                    <Card component="div" className="routine-card">
                      <Typography variant="h6">Face Serum</Typography>
                      <Typography>
                        Unlock your skin’s natural glow with Radiance Glow Face
                        Serum, a lightweight yet powerful serum formulated to
                        hydrate, brighten, and rejuvenate your skin. Infused
                        with potent natural extracts and scientifically backed
                        ingredients.
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item sm={3}>
                    <Card component="div" className="routine-card">
                      <Typography variant="h6">Under Eye Cream</Typography>
                      <Typography>
                        Say goodbye to dark circles, puffiness, and fine lines
                        with our luxurious under-eye cream. Enriched with
                        hydrating ingredients and powerful antioxidants, this
                        lightweight formula deeply nourishes delicate under-eye
                        skin.
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
                {routineVideos.evening.map((itm, key) => (
                 <Grid key={key} item xs={12} sm={key === 0 ? 8 : 4}>
                    <VideoCard
                      url={itm.imgUrl}
                      onClick={() => {
                        setVideoLink(itm.videoUrl);
                      }}
                    />
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Container>
      <Dialog
        hideBackdrop={true}
        fullScreen={true}
        open={videoLink ? true : false}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        <ModalVideo
          channel="custom"
          isOpen={videoLink ? true : false}
          url={videoLink as string}
          onClose={() => setVideoLink(null)}
        />
      </Dialog>
    </StyledMainBoxWrapper>
  );
};

export default Routine;
