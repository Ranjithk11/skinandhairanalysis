import React from "react";
import Box from "@mui/material/Box";
import { Card, CardHeader, CardMedia, Grid, styled } from "@mui/material";

const StyledMarqueeSliderGrid = styled(Grid)(({ theme }) => ({
  width: "100dvh",
  height:"calc(100dvh - 150px)",
  [theme.breakpoints.only('xs')]:{
   height:"calc(100vh - 64px)"
  },

  "& .__image_card": {
    backgroundRepeat: "no-repeat",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: `5px solid ${theme.palette.common.white}`,
    borderRadius: 20,
  },
}));

const MarqueeSlider = () => {
  return (
    <StyledMarqueeSliderGrid container height="100%" alignItems="stretch">
      <Grid container direction="column" item md={4} xs={6}>
        <Grid item xs>
          <Box
            component="div"
            className="__image_card"
            sx={{
              height: "100%",
              backgroundImage: `url(https://images.unsplash.com/photo-1570554520913-ce2192a74574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNraW5jYXJlJTIwbWVufGVufDB8fDB8fHww)`,
            }}
          ></Box>
        </Grid>
        <Grid item>
          <Box
            component="div"
            className="__image_card"
            sx={{
              height: "200px",
              backgroundImage: `url(https://media.istockphoto.com/id/941785256/photo/that-super-close-shave-for-super-soft-skin.webp?b=1&s=170667a&w=0&k=20&c=yuv2irxYnJhwEStF1oypt1OzWXIO5mjs0Z0BfQdMhOg=)`,
            }}
          ></Box>
        </Grid>
      </Grid>
      <Grid container direction="column" item md={4} xs={6}>
        <Grid item xs>
          <Box
            component="div"
            className="__image_card"
            sx={{
              height: "100%",
              backgroundImage: `url(https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D)`,
            }}
          ></Box>
        </Grid>
        <Grid item xs>
          <Box
            component="div"
            className="__image_card"
            sx={{
              height: "100%",
              backgroundImage: `url(https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D)`,
            }}
          ></Box>
        </Grid>
        <Grid item xs>
          <Box
            component="div"
            className="__image_card"
            sx={{
              height: "100%",
              backgroundImage: `url(https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D)`,
            }}
          ></Box>
        </Grid>
      </Grid>
      <Grid item container flexDirection="column" md={4} xs={6}>
        <Grid item xs>
          <Box
            component="div"
            className="__image_card"
            sx={{
              height: "100%",
              backgroundImage: `url(https://images.unsplash.com/photo-1441622915984-05d13dfb3d8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNraW5jYXJlJTIwbWVufGVufDB8fDB8fHww)`,
            }}
          ></Box>
        </Grid>
        <Grid item>
          <Box
            component="div"
            className="__image_card"
            sx={{
              height: "200px",
              backgroundImage: `url(https://images.unsplash.com/photo-1556228852-6d35a585d566?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHNraW5jYXJlJTIwbWVufGVufDB8fDB8fHww)`,
            }}
          ></Box>
        </Grid>
      </Grid>
    </StyledMarqueeSliderGrid>
  );
};

export default MarqueeSlider;
