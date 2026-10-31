import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { Icon } from "@iconify/react";

interface VideoCardProps {
  url: string;
  onClick: () => void;
}

const VideoCard = ({ url, onClick }: VideoCardProps) => {
  return (
    <Box
      style={{ backgroundImage: `url(${url})` }}
      component="div"
      className="video-card"
    >
      <Box component="div" className="overly">
        <IconButton onClick={onClick}>
          <Icon icon="gridicons:play" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default VideoCard;
