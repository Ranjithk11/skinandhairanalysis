import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

interface ServiceCardProps{
  imgUrl:string;
  title:string;
  content:string;
  btnLabel:string;
}

const ServiceCard = ({imgUrl,title,content,btnLabel}:ServiceCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={imgUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" fullWidth={false} size="small">{btnLabel}</Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
