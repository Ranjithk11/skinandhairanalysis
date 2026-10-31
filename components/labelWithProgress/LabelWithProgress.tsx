import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

interface LabelWithProgressProps {
  label: string;
  progress: number;
}

const LabelWithProgress = ({ label, progress }: LabelWithProgressProps) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Box mt={2}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </>
  );
};

export default LabelWithProgress;
