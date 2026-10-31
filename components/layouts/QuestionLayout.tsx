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
interface QuestionLayoutProps {
  children: React.ReactNode;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Main = styled(Box)(({ theme }) => ({
  marginLeft: 0,
  paddingTop: 64,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundPosition: "top",
}));

const QuestionLayout = ({ children }: QuestionLayoutProps) => {
  return (
    <Fragment>
      <Main style={{ backgroundImage: `url(/images/homeBg_1.png)` }}>
        {children}
      </Main>
    </Fragment>
  );
};

export default QuestionLayout;
