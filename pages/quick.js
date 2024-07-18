import React from "react";
import Navbar from "./components/Navbar";
import { Typography, Grid } from "@mui/material";
import Blocks from "./components/blocks/quick";
import Description from "./components/description/quick";
import CustomCursor from "./components/CustomCursor";

const Selection = () => {
  return (
    <>
      <Grid sx={{ background: "rgb(36,36,36)", padding: "2rem" }}>
        <CustomCursor />
        <Navbar />
        <Blocks />
        <Description />
      </Grid>
    </>
  );
};

export default Selection;
