import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FaBoxOpen } from "react-icons/fa6";

const timinings = [
  {
    name: "Breakfast",
    bgColor: "#00cec9",
    icon: "/icons/food.png",
  },
  {
    name: "Morning Routine",
    bgColor: "#f8a5c2",
    icon: "/icons/nutrition.png",
  },
  {
    name: "Mid-Morning Snack",
    bgColor: "#fdcb6e",
    icon: "/icons/food.png",
  },
  {
    name: "Lunch",
    bgColor: "#55efc4",
    icon: "/icons/dinner.png",
  },
  {
    name: "Afternoon Hydration",
    bgColor: "#E9F7EF",
    icon: "/icons/nutrition.png",
  },
  {
    name: "Evening Snack",
    bgColor: "#f39c12",
    icon: "/icons/dinner.png",
  },
  {
    name: "Sensitive Skin Diet Plan",
    bgColor: "#E9F7EF",
    icon: "/icons/dinner.png",
  },
  {
    name: "Foods to Include",
    bgColor: "#2ed573",
    icon: "/icons/dinner.png",
  },
  {
    name: "Dinner",
    bgColor: "#fab1a0",
    icon: "/icons/almond.png",
  },
  {
    name: "Antioxidant-Rich Foods",
    bgColor: "#cf6a87",
    icon: "/icons/nutrition.png",
  },
  {
    name: "Healthy Fats",
    bgColor: "#2ecc71",
    icon: "/icons/nutrition.png",
  },
  {
    name: "Zinc and Selenium",
    bgColor: "#34e7e4",
    icon: "/icons/almond.png",
  },
  {
    name: "Foods to Avoid",
    bgColor: "#ff4757",
    icon: "/icons/nofood.svg",
  },
  {
    name: "Additional Tips",
    bgColor: "#27ae60",
    icon: "/icons/dinner.png",
  },
  {
    name: "Night Routine",
    bgColor: "#4bcffa",
    icon: "/icons/nutrition.png",
  },
  {
    name: "Hydration Tips",
    bgColor: "#f3a683",
    icon: "/icons/nutrition.png",
  },
];

interface DietChartCardProps {
  data: any;
}

const DietChartCard = ({ data }: DietChartCardProps) => {
  const getIconAndCardBg = (timing: string) => {
    const findInfo = timinings.find((item: any) => item.name === timing);
    return findInfo;
  };

  return (
    <Box
      pt={4}
      pb={4}
      pl={2}
      pr={2}
      sx={{
        backgroundColor: getIconAndCardBg(data?.title)
          ? getIconAndCardBg(data?.title)?.bgColor
          : "#ecf0f1",
        borderRadius: 5,
        height: "100%",
      }}
    >
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <img
            width={100}
            src={getIconAndCardBg(data?.title)?.icon || "/icons/nutrition.png"}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={(theme)=>({
            textAlign:"left",
            [theme.breakpoints.between('xs','sm')]:{
              textAlign:"center",
              fontSize:16
            }
          })}>
            {data?.title}
          </Typography>
        </Grid>
      </Grid>
      <Box pt={4} pl={3} pr={3} pb={3}>
        {data?.options?.map((itm: any) => (
          <>
            <Typography variant="body1" textAlign="left">
              <b>{itm.heading}</b>
            </Typography>
            <Typography variant="body1" textAlign="left">
              {itm?.description}
            </Typography>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default DietChartCard;
