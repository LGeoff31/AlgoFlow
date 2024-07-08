import React from "react";
import Navbar from "./components/Navbar";
import { Typography, Grid } from "@mui/material";
import Blocks from "./components/blocks/merge";
import Description from "./components/description/merge";

const Merge = () => {
  return (
    <>
      <Grid sx={{ background: "rgb(36,36,36)", padding: "2rem" }}>
        <Navbar />
        <Blocks />
        <Description />
      </Grid>
    </>
  );
};

export default Merge;
