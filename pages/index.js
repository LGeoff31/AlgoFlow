import { Typography, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import React, { useState } from "react";

export default function Home() {
  return (
    <Grid
      sx={{
        background: "rgb(36,36,36)",
      }}
    >
      <Navbar />
      <Homepage />
      <Footer />
    </Grid>
  );
}
