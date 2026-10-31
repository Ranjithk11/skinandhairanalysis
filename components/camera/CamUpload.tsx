import React from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const CameraUpload = () => {
  function handleTakePhoto(dataUri: any) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  function handleTakePhotoAnimationDone(dataUri: any) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  function handleCameraError(error: any) {
    console.log("handleCameraError", error);
  }

  function handleCameraStop() {
    console.log("handleCameraStop");
  }

  return (
    <Camera
      onTakePhoto={(dataUri: any) => {
        handleTakePhoto(dataUri);
      }}
      onTakePhotoAnimationDone={(dataUri: any) => {
        handleTakePhotoAnimationDone(dataUri);
      }}
      onCameraError={(error: any) => {
        handleCameraError(error);
      }}
      idealFacingMode={FACING_MODES.USER}
      idealResolution={{ width: 500, height: 480 }}
      imageType={IMAGE_TYPES.JPG}
      imageCompression={0.97}
      isMaxResolution={true}
      isImageMirror={false}
      isSilentMode={false}
      isDisplayStartCameraError={true}
      isFullscreen={false}
      sizeFactor={1}
      onCameraStart={() => {}}
      onCameraStop={() => {
        handleCameraStop();
      }}
    />
  );
};
export default CameraUpload;
