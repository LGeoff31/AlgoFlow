import React from "react";
import Navbar from "./components/Navbar";
import { Typography, Grid } from "@mui/material";
import Blocks from "./components/blocks/heap";
import Description from "./components/description/heap";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

const Heap = () => {
  return (
    <>
      <Grid sx={{ background: "rgb(36,36,36)" }}>
        {/* <CustomCursor /> */}
        <Navbar />
        <Blocks />
        <Description />
        <Footer />
      </Grid>
    </>
  );
};

export default Heap;
