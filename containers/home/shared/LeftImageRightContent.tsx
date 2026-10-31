import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import NextImage from "next/image";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

interface LeftImageRightContentProps {
  imgUrl: string;
  title: string;
  span: string;
  content: string;
  number: number;
}

const LeftImageRightContentStyles = styled(Container)(({ theme }) => ({
  backgroundColor: "#164F3E",
  borderRadius:10,
  "& .title": {
    fontSize: 25,
    fontWeight: 700,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: 20,
    },
    color: "#FFC670",
  },
  "& .number": {
    fontSize: 70,
    fontWeight: 600,
    color: "#FFC670",
  },
  "& .content": {
    color: "#FFFFFF",
  },
}));

const LeftImageRightContent = ({
  imgUrl,
  title,
  span,
  content,
  number,
}: LeftImageRightContentProps) => {
  return (
    <LeftImageRightContentStyles maxWidth={"lg"}>
      <Grid container alignItems="center" spacing={6}>
        <Grid item xs={12} sm={3} lg={3} xl={3}>
          <Box component="div" className="image-section">
            <NextImage
              alt="img-1"
              fill={true}
              style={{
                objectFit: "cover",
              }}
              src={imgUrl}
            ></NextImage>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} lg={9} xl={9} container spacing={2}>
          <Grid item xs={12} container alignItems="center" spacing={2}>
            <Grid item>
              <Typography className="number">{number}</Typography>
            </Grid>
            <Grid item xs>
              <Typography color={"#CFCFCF"}>{span}</Typography>
              <Typography typography="h5" className="title">
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography className="content">{content}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </LeftImageRightContentStyles>
  );
};

export default LeftImageRightContent;
