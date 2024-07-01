import React from "react";
import { Typography, Grid, Stack, Box, Link } from "@mui/material";

const Homepage = () => {
  return (
    <Grid margin="0 auto" justifyContent={"center"} textAlign={"center"}>
      <Stack
        direction="row"
        alignItems={"center"}
        margin="0 auto"
        justifyContent={"center"}
        marginTop="5rem"
      >
        <Typography color="white" variant="h3">
          Welcome to&nbsp;
        </Typography>
        <img src={"../../slogan.png"} alt="slogan" height={70} />
      </Stack>
      <Typography color="white" variant="body2" fontSize="1.2rem">
        Learn all the sorting algorithms with visualization
      </Typography>
    </Grid>
  );
};

export default Homepage;
