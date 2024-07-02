import React from "react";
import Navbar from "./components/Navbar";
import { Typography, Grid } from "@mui/material";
import Blocks from "./components/Blocks";

const Merge = () => {
  return (
    <>
      <Grid sx={{ background: "rgb(36,36,36)", padding: "2rem" }}>
        <Navbar />
        <Blocks />
      </Grid>
    </>
  );
};

export default Merge;
