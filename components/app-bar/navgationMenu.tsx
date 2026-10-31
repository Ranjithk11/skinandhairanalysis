"use client";
import React from "react";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import { navgationMenus } from "@/utils/constants";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { shouldForwardProp } from "@/utils/func";

interface AppMegaMenuComponentuProps {
  anchorEl?: any;
  open: boolean;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  menus: any;
  zIndex: number | null;
}

const StyledMenuPaper = styled(Paper)(() => ({
  width: "100%",
  padding: 20,
}));

const StyledMenuListHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

const StyledMenuPopper = styled(Popper, {
  shouldForwardProp: (prop) =>
    shouldForwardProp<{ zIndex?: number | null }>(["zIndex"], prop),
})<{ zIndex?: number | null }>(({ theme, zIndex }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: zIndex ? zIndex : Number(theme.zIndex.appBar),
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: 0,
  display: "block",
  whitespace: "unset",
  wordbreak: "break-all",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "& .MuiTypography-root": {
    fontSize: 12,
    color: "GrayText",
    "&:hover": {
      color: theme.palette.text.primary,
      textDecoration: "underline",
    },
  },
}));

const NavigationMenuComponent: React.FC<AppMegaMenuComponentuProps> = ({
  anchorEl,
  open,
  handleClose,
  onKeyDown,
  menus,
  zIndex,
}) => {
  return (
    <StyledMenuPopper
      open={open}
      zIndex={zIndex}
      anchorEl={anchorEl}
      role={undefined}
      transition
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Container maxWidth="lg">
            <StyledMenuPaper>
              <ClickAwayListener onClickAway={handleClose}>
                {menus?.errors ? (
                  <div>{JSON.stringify(menus?.errors)}</div>
                ) : (
                  <Box>
                    <Grid container spacing={3}>
                      {navgationMenus.map((menu, index) => (
                        <Grid key={`${menu.category}-${index}`} item md={3}>
                          <StyledMenuListHeader variant="h6">
                            {menu.category}
                          </StyledMenuListHeader>
                          <List
                            id="products-menu"
                            aria-labelledby="products-menu"
                            onKeyDown={onKeyDown}
                          >
                            {menu?.products?.map((product) => (
                              <StyledListItemButton key={product.id}>
                                <ListItemText>{product.name}</ListItemText>
                              </StyledListItemButton>
                            ))}
                          </List>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </ClickAwayListener>
            </StyledMenuPaper>
          </Container>
        </Grow>
      )}
    </StyledMenuPopper>
  );
};
export default NavigationMenuComponent;
