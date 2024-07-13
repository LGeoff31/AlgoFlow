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
    >
      <Box
        sx={{
          transition: "transform 0.3s",
          transformOrigin: "left center",
          ":hover": {
            cursor: "pointer",
            transform: "scale(1.05)",
          },
        }}
      >
        <Link href="/">
          <img src={"../../logo-white.png"} alt="logo" height={50} />
        </Link>
      </Box>

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
              sx={{
                transition: "transform 0.3s",
                color: "#6B7280",
                fontSize: "2rem",
                ":hover": {
                  cursor: "pointer",
                  transform: "scale(1.05)",
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
