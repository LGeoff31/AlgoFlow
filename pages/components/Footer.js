import { Typography, Link, Stack } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Stack direction="column" alignItems={"center"} gap="1rem">
      <Typography
        marginTop="4rem"
        color="white"
        justifyContent={"center"}
        textAlign={"center"}
      >
        Made by Geoffrey Lee
      </Typography>
      <Stack direction="row" gap="1rem" alignItems={"center"}>
        <Typography color="white">Check out the code: </Typography>
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
          <GitHubIcon style={{ fontSize: "2rem" }} />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
