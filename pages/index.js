import { Typography, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import React, { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import AddReview from "./components/AddReview";
import Reviews from "./components/Reviews";

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
      <AddReview />
      <Reviews />
      <Footer />
    </Grid>
  );
}
