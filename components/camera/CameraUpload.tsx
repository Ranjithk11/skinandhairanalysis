"use client";
import { Box, Grid, IconButton, Typography, styled } from "@mui/material";
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import { Icon } from "@iconify/react";

interface CameraUploadProps {
  handleCapture: (data: any) => void;
  handleCancel: () => void;
}

const StyledCameraUpload = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: "hidden",
  "& .controls": {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    left: 0,
    bottom: 50,
  },
  "& svg": {
    color: theme.palette.common.white,
  },
  "& .MuiTypography-root": {
    color: theme.palette.common.white,
  },
}));

const CameraUpload = ({ handleCancel, handleCapture }: CameraUploadProps) => {
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState<string | null>(null);
  const camera = useRef<any>();

  const handleCamera = () => {
    const image = camera?.current?.takePhoto();
    handleCapture(image);
    handleCancel();
  };

  const handleSwicthCamera = () => {
    if (camera.current) {
      const result = camera.current.switchCamera();
    }
  };

  return (
    <StyledCameraUpload>
      <Camera
        errorMessages={{
          permissionDenied: "Camera Permission is denied",
        }}
        ref={camera}
        aspectRatio="cover"
        numberOfCamerasCallback={setNumberOfCameras}
      />

      <Box component="div" className="controls">
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item>
            <IconButton onClick={handleCamera}>
              <Icon width={50} icon="pepicons-pencil:photo-camera-circle" />
            </IconButton>
            <Typography textAlign="center">Capture</Typography>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => {
                if (camera.current) {
                }
                handleCancel();
              }}
            >
              <Icon width={50} icon="solar:close-circle-line-duotone" />
            </IconButton>
            <Typography textAlign="center">Cancel</Typography>
          </Grid>
          <Grid item>
            <IconButton
              disabled={numberOfCameras <= 1}
              onClick={handleSwicthCamera}
            >
              <Icon
                width={50}
                icon="material-symbols-light:flip-camera-android-rounded"
              />
            </IconButton>
            <Typography textAlign="center">Flip</Typography>
          </Grid>
        </Grid>
      </Box>
    </StyledCameraUpload>
  );
};

export default CameraUpload;
