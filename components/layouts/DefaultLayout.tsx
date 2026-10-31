"use client";
import React, { Fragment, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Icon } from "@iconify/react";
import FooterComponent from "../footer";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import SideMenuComponent from "@/views/home/selfie/SideMenu";
import { APP_ROUTES } from "@/utils/routes";
import { SOCIAL_LINKS } from "@/utils/constants";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";


interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const StyledMainContent = styled(Box)(({ theme }) => ({
  paddingTop: 70,
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    paddingTop: 56,
  },
}));

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { data: session } = useSession();
  const theme = useTheme();
  const isXsSmDevice = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const handleSocialLinkNavigation = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Fragment>
      <AppBar color="primary" position="fixed">
        <Toolbar
          sx={{
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 1, sm: 2 },
            gap: 0.5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 0.5, sm: 1.5 },
              minWidth: 0,
            }}
          >
            {/* Left: optional menu / back + logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                flexShrink: 1,
                minWidth: 0,
              }}
            >
              {isXsSmDevice && pathname === APP_ROUTES.SELFIE && (
                <IconButton
                  onClick={() => setOpenMenu(!openMenu)}
                  sx={{ color: "common.white", p: 0.5 }}
                >
                  <Icon icon="material-symbols:menu" />
                </IconButton>
              )}
              {isXsSmDevice && pathname === APP_ROUTES.RECOMMENDATIONS && (
                <IconButton
                  onClick={() => router.back()}
                  sx={{ color: "common.white", p: 0.5 }}
                >
                  <Icon icon="material-symbols:arrow-back-ios" />
                </IconButton>
              )}

              <Box
                component="img"
                src="/logo/logo_gold_white.png"
                alt="BeautyPod"
                onClick={() => router.push("/")}
                sx={{
                  width: { xs: 120, sm: 170, md: 210 },
                  height: "auto",
                  maxHeight: { xs: 40, sm: 52 },
                  objectFit: "contain",
                  objectPosition: "left center",
                  cursor: "pointer",
                  display: "block",
                }}
              />
            </Box>

            {/* Right: social + back — always one row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: { xs: 0.25, sm: 1 },
                flexShrink: 0,
              }}
            >
              {!isMobile && (
                <Typography
                  color="white"
                  fontWeight="bold"
                  fontSize="0.875rem"
                  whiteSpace="nowrap"
                  sx={{ mr: 0.5 }}
                >
                  Join Us Online
                </Typography>
              )}

              <IconButton
                size="small"
                aria-label="Instagram"
                onClick={() => handleSocialLinkNavigation(SOCIAL_LINKS.insta)}
                sx={{
                  color: "white",
                  p: { xs: "4px", sm: "6px" },
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                }}
              >
                <AiFillInstagram />
              </IconButton>
              <IconButton
                size="small"
                aria-label="YouTube"
                onClick={() => handleSocialLinkNavigation(SOCIAL_LINKS.youtube)}
                sx={{
                  color: "white",
                  p: { xs: "4px", sm: "6px" },
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                }}
              >
                <AiFillYoutube />
              </IconButton>
              <IconButton
                size="small"
                aria-label="Facebook"
                onClick={() =>
                  handleSocialLinkNavigation(SOCIAL_LINKS.facebook)
                }
                sx={{
                  color: "white",
                  p: { xs: "4px", sm: "6px" },
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                }}
              >
                <AiFillFacebook />
              </IconButton>

              <Button
                variant="text"
                onClick={() => {
                  signOut().then(() => {
                    router.push("https://leafwater.in/");
                  });
                }}
                startIcon={
                  <Icon
                    icon="ic:twotone-less-than"
                    width={isMobile ? 16 : 22}
                    height={isMobile ? 16 : 22}
                  />
                }
                sx={{
                  textTransform: "none",
                  fontSize: { xs: 12, sm: 16 },
                  fontWeight: 600,
                  color: "#fff",
                  minWidth: "auto",
                  px: { xs: 0.5, sm: 1 },
                  whiteSpace: "nowrap",
                  ml: { xs: 0.25, sm: 0.5 },
                }}
              >
                Back
              </Button>

              {session?.user?.id && (
                <IconButton
                  onClick={() => {
                    signOut().then(() => {
                      router.push("/");
                    });
                  }}
                  sx={{ p: 0.5 }}
                >
                  <Icon color="yellow" icon="material-symbols:logout" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <StyledMainContent>{children}</StyledMainContent>
      <FooterComponent />

      <Drawer
        onClose={() => setOpenMenu(false)}
        variant="temporary"
        anchor="left"
        open={openMenu}
      >
        <SideMenuComponent />
      </Drawer>
    </Fragment>
  );
};

export default DefaultLayout;
