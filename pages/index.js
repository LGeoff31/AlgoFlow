import { Typography, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import React, { useState } from "react";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <Grid
      sx={{
        background: "rgb(36,36,36)",
      }}
    >
      <CustomCursor />
      <Navbar />
      <Homepage />
      <Footer />
    </Grid>
  );
}
