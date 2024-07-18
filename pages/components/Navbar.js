import React, { useState } from "react";
import { Typography, Grid, Stack, Box, Link } from "@mui/material";

const Navbar = () => {
  const algorithms = [
    { name: "Merge", route: "/merge" },
    { name: "Quick", route: "/quick" },
    { name: "Selection", route: "/selection" },
    { name: "Bubble", route: "/bubble" },
  ];
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
      padding="2rem"
    >
      <Link href="/" sx={{ textDecoration: "none" }}>
        <Stack
          direction="row"
          display="flex"
          alignItems={"center"}
          gap="1.3rem"
          sx={{
            transition: "transform 0.3s",
            transformOrigin: "left center",
            ":hover": {
              cursor: "pointer",
              transform: "scale(1.1)",
              color: "#e68501",
            },
          }}
        >
          <img src={"../../logo-white.png"} alt="logo" height={50} />
          <Typography
            color="white"
            fontSize="2rem"
            fontFamily="Space Grotesk"
            display={{ md: "block", xs: "none" }}
            sx={{
              ":hover": {
                color: "#e68501",
              },
            }}
          >
            AlgoFlow
          </Typography>
        </Stack>
      </Link>

      <Stack direction={"row"} gap="1rem">
        {algorithms.map((algorithm, idx) => (
          <Link
            key={idx}
            sx={{
              textDecoration: "none",
            }}
            href={`/${algorithm.name.toLowerCase()}`}
            className="active"
          >
            <Box
              fontFamily="Space Grotesk"
              sx={{
                transition: "transform 0.3s",
                color: "white",
                fontSize: { md: "2rem", xs: "1.2rem" },
                ":hover": {
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  color: "#e68501",
                },
              }}
            >
              {algorithm.name}
            </Box>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
