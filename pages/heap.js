import React from "react";
import Navbar from "./components/Navbar";
import { Typography, Grid } from "@mui/material";
import Blocks from "./components/blocks/heap";
import Description from "./components/description/heap";

const Heap = () => {
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

export default Heap;
