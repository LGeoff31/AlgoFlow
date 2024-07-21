import React, { useState } from "react";

import DesktopNavbar from "../subcomponents/DesktopNavbar";
import MobileNavbar from "../subcomponents/MobileNavbar";
import {
  Typography,
  Box,
  Button,
  Stack,
  Slider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Navbar;
