import { Typography, Grid } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";

const Review = () => {
  return (
    <>
      <Grid
        sx={{
          background: "rgb(36,36,36)",
        }}
      >
        <Navbar />
        <Typography
          color="white"
          fontSize="3rem"
          display="flex"
          justifyContent={"center"}
        >
          ⭐ Leave a Review ⭐
        </Typography>
      </Grid>
    </>
  );
};

export default Review;
