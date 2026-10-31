"use client";
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/utils/routes";
import { useSession } from "next-auth/react";

const StyledSideMenuComponent = styled(Box)(({ theme }) => ({
  height: "calc(100vh - 70px)",
  minWidth: 300,
  maxWidth: 300,
  padding: 10,
  display: "flex",
  position: "relative",
  boxShadow: `7px -1px 6px -4px rgba(157, 155, 155, 0.75)`,
  gap: 10,
  backgroundColor: theme.palette.common.white,
  flexDirection: "column",
  "& .section-tail": {
    width: "100%",
    flex: 1,
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    borderRadius: 10,
    overflow: "hidden",
    "& .overly-layer": {
      position: "absolute",
      background: `linear-gradient(0deg, rgba(0,0,0,0.6194852941176471) 0%, rgba(255,255,255,0) 50%)`,
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      width: "100%",
      height: "100%",
      color: theme.palette.common.white,
    },
  },
}));

const SideMenuComponent = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <StyledSideMenuComponent>
      <Box
        onClick={() => {
          router.push(APP_ROUTES.SELFIE);
        }}
        component="div"
        style={{ backgroundImage: `url(/images/selfie.png)` }}
        className="section-tail"
      >
        <Box component="div" className="overly-layer">
          <Typography mb={2} variant="h6">
            Upload Image
          </Typography>
        </Box>
      </Box>
      <Box
        onClick={() => {
          router.push(APP_ROUTES.RECOMMENDATIONS);
        }}
        component="div"
        style={{ backgroundImage: `url(/images/recommendations.png)` }}
        className="section-tail"
      >
        <Box component="div" className="overly-layer">
          <Typography mb={2} variant="h6">
            View Report
          </Typography>
        </Box>
      </Box>
      <Box
        component="div"
        style={{ backgroundImage: `url(/images/userprofile.png)` }}
        className="section-tail"
      >
        <Box component="div" className="overly-layer">
          <Box>
          <Typography textAlign="center" display="block"  variant="h6">
            {session?.user.firstName}
          </Typography>
          <Typography textAlign="center" display="block" mb={2} variant="body1">
            {session?.user.email}
          </Typography>
          </Box>
        
        </Box>
      </Box>
    </StyledSideMenuComponent>
  );
};

export default SideMenuComponent;
