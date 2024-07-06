import { Typography, Link, Stack } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Stack
      display="flex"
      direction="row"
      alignItems={"center"}
      justifyContent="center"
      gap="1rem"
    >
      <Typography
        marginTop="4rem"
        color="white"
        justifyContent={"center"}
        // alignItems={"center"}
      >
        Made by Geoffrey Lee
      </Typography>
      <Link
        href="https://github.com/LGeoff31/insomnia2"
        target="_blank"
        sx={{
          color: "white",
          textDecoration: "none",

          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
      >
        <GitHubIcon style={{ fontSize: "2rem", alignItems: "center" }} />
      </Link>
    </Stack>
  );
};

export default Footer;
