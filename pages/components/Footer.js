import { Typography, Link, Stack } from "@mui/material";
import React from "react";
import { SocialIcon } from "react-social-icons";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Stack
      direction="row"
      display="flex"
      alignItems={"center"}
      sx={{ background: "black" }}
      padding="2rem"
      marginTop="4rem"
      justifyContent={"space-between"}
    >
      <Stack direction="column">
        <Typography
          color="white"
          fontSize={{ md: "2rem", xs: "1rem" }}
          justifyContent={"center"}
          margin="0 auto"
        >
          Geoffrey Lee
        </Typography>

        <Stack direction="row">
          <SocialIcon
            url="https://github.com/lgeoff31"
            fgColor="orange"
            bgColor="transparent"
            title="GitHub"
            target="_blank"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/lgeoff31/"
            fgColor="orange"
            bgColor="transparent"
            title="LinkedIn"
            target="_blank"
          />
          <SocialIcon
            url="https://www.geoffreylee.me/"
            fgColor="orange"
            bgColor="transparent"
            title="LanguageIcon"
            target="_blank"
          />
        </Stack>
      </Stack>
      <Stack>
        <Typography color="white" fontSize={{ md: "2rem", xs: "0.7rem" }}>
          Code implementations created by me
        </Typography>
        <Stack direction="row" alignItems={"center"}>
          <Typography color="white" fontSize={{ md: "1.5rem", xs: "0.7rem" }}>
            ⭐ to support the project
          </Typography>
          <SocialIcon
            url="https://github.com/LGeoff31/algoflow"
            fgColor="orange"
            bgColor="transparent"
            title="GitHub"
            target="_blank"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
