import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

interface IconWithLabelComponentProps {
  title: string;
  icon: React.ReactNode;
}

const IconWithLabelComponent = ({
  title,
  icon,
}: IconWithLabelComponentProps) => {
  return (
    <Grid item container alignItems="center">
      <Grid item>
        <Box mr={0.5} mt={0.6}>
          {icon}
        </Box>
      </Grid>
      <Grid item>{title}</Grid>
    </Grid>
  );
};

export default IconWithLabelComponent;
