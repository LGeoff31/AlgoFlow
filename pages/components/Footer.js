import { Typography, Link, Stack } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Stack
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      gap="1rem"
      marginTop="4rem"
    >
      <Typography
        marginTop="4rem"
        color="white"
        justifyContent={"center"}
        fontSize={{ md: "2rem", xs: "1.5rem" }}
        // alignItems={"center"}
      >
        Made by Geoffrey Lee
      </Typography>
      <Typography
        color="white"
        justifyContent={"center"}
        fontSize={{ md: "1.5rem", xs: "1rem" }}
        // alignItems={"center"}
      >
        All code implementations were created by me, feel free to look at the
        github and give it a star! ⭐
      </Typography>
      <Link
        href="https://github.com/LGeoff31/algoflow"
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
