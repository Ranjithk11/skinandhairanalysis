import React from "react";
import { CardContent, CircularProgress, Grid } from "@mui/material";
import Card from "@mui/material/Card";

interface LoadingProps {
  evevation?: number;
}

const LoadingComponent = ({evevation}:LoadingProps) => {
  return (
    <Card elevation={evevation || 0}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LoadingComponent;
