"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

const StyledSelfieIntro = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.grey[100],
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingTop: 50,
  "& .MuiCardContent-root": {
    padding: 30,
    "& .MuiTypography-h4": {
      fontWeight: 700,
    },
    "& .MuiTypography-subtitle1": {
      fontWeight: 700,
      fontSize: 24,
    },
    "& .MuiTypography-subtitle2": {
      fontWeight: 500,
      fontSize: 20,
    },
    "& .MuiTypography-body1": {
      fontWeight: 400,
      fontSize: 14,
      color: theme.palette.text.secondary,
    },
  },
  "& .photo_wrapper": {
    width: "100%",
    height: "250px",
    border: `5px dotted ${theme.palette.grey[200]}`,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  "& .MuiButton-root": {
    minWidth: 150,
    borderRadius: 120,
  },
  svg: {
    color: theme.palette.grey[400],
  },
}));

const SelfieIntro = () => {
  return (
    <StyledSelfieIntro maxWidth="xl">
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid container item xs={12}>
                <Grid item xs>
                  <Typography gutterBottom variant="h4">
                    Selfie Tips
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    Position your face in the circle and make sure all boxes are
                    green
                  </Typography>
                </Grid>
                <Grid item>
                  <Button>Take Selfie</Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <List disablePadding>
                  <ListItem divider={true} disableGutters>
                    <Box width={30}>
                      <Typography variant="subtitle2">1.</Typography>
                    </Box>

                    <ListItemText
                      primary={
                        <Typography variant="subtitle2">
                          Comb your hair neatly or pull it back if long.
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem divider={true} disableGutters>
                    <Box width={30}>
                      <Typography variant="subtitle2">2.</Typography>
                    </Box>

                    <ListItemText
                      primary={
                        <Typography variant="subtitle2">
                          Position yourself in front of a camera with natural
                          lighting
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem divider={true} disableGutters>
                    <Box width={30}>
                      <Typography variant="subtitle2">3.</Typography>
                    </Box>

                    <ListItemText
                      primary={
                        <Typography variant="subtitle2">
                          Maintain a neutral expression and keep your eyes open
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <Box width={30}>
                      <Typography variant="subtitle2">4.</Typography>
                    </Box>

                    <ListItemText
                      primary={
                        <Typography variant="subtitle2">
                          Photo will be captured automatically
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </StyledSelfieIntro>
  );
};

export default SelfieIntro;
