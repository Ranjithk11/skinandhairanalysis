"use client";
import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, Toolbar } from "@mui/material";
import { LOGO_URL } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import FooterComponent from "../footer";

const drawerWidth = 200;
interface VisiterLayoutProps {
  children: React.ReactNode;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Main = styled("main")(({ theme }) => ({
  marginLeft: 0,
  paddingTop: 64,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const VisiterLayout = ({ children }: VisiterLayoutProps) => {
  // const visitCount = useSelector(
  //   (state: any) => state.analysisSlice?.visitCount
  // );
  const router = useRouter();

  return (
    <Fragment>
      <AppBar color="primary" position="fixed" open={false}>
        <Toolbar>
          <Box mt={1} flexGrow={1}>
            <img width={150} src="/logo/beautypodlogo.png" />
          </Box>
          {/* {visitCount && <Box>Visit Count: {visitCount}</Box>} */}
        </Toolbar>
      </AppBar>
      <Main>{children}</Main>
      <FooterComponent/>
    </Fragment>
  );
};

export default VisiterLayout;
