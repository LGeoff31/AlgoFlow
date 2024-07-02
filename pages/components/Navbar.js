import React from "react";
import { Typography, Grid, Stack, Box, Link } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        sx={{
          transition: "transform 0.3s", // Animation transition
          transformOrigin: "left center",
          ":hover": {
            cursor: "pointer",
            transform: "scale(1.05)", // Scale to 1.2 times on hover
          },
        }}
      >
        <Link href="/">
          <img src={"../../logo-white.png"} alt="logo" height={50} />
        </Link>
      </Box>
      {/* <img src={"../../slogan.png"} alt="logo" height={50} /> */}

      <Stack direction={"row"} gap="1rem">
        <Link sx={{ textDecoration: "none" }} href="/merge">
          <Box
            sx={{
              transition: "transform 0.3s", // Animation transition
              transformOrigin: "left center",
              color: "#6B7280",
              fontSize: "2rem",
              ":hover": {
                cursor: "pointer",
                transform: "scale(1.05)", // Scale to 1.2 times on hover
              },
            }}
          >
            Merge
          </Box>
        </Link>
        <Link sx={{ textDecoration: "none" }}>
          <Box
            sx={{
              transition: "transform 0.3s", // Animation transition
              transformOrigin: "left center",
              color: "#6B7280",
              fontSize: "2rem",
              ":hover": {
                cursor: "pointer",
                transform: "scale(1.05)", // Scale to 1.2 times on hover
              },
            }}
          >
            Quick
          </Box>
        </Link>
        <Link sx={{ textDecoration: "none" }}>
          <Box
            sx={{
              transition: "transform 0.3s", // Animation transition
              transformOrigin: "left center",
              color: "#6B7280",
              fontSize: "2rem",
              ":hover": {
                cursor: "pointer",
                transform: "scale(1.05)", // Scale to 1.2 times on hover
              },
            }}
          >
            Heap
          </Box>
        </Link>
        <Link sx={{ textDecoration: "none" }}>
          <Box
            sx={{
              transition: "transform 0.3s", // Animation transition
              transformOrigin: "left center",
              color: "#6B7280",
              fontSize: "2rem",
              ":hover": {
                cursor: "pointer",
                transform: "scale(1.05)", // Scale to 1.2 times on hover
              },
            }}
          >
            Bubble
          </Box>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
