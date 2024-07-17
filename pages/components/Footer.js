import { Typography, Link, Stack } from "@mui/material";
import React from "react";
import { SocialIcon } from "react-social-icons";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Stack
      direction="row"
      sx={{ background: "black" }}
      padding="2rem"
      marginTop="4rem"
      justifyContent={"center"}
    >
      <Stack direction="column">
        <Typography
          sx={{
            textAlign: "center",
            color: "grey",
            textTransform: "uppercase",
            letterSpacing: "0.3rem",
            fontSize: "1.5rem",
          }}
        >
          Geoffrey Lee
        </Typography>

        <Stack
          direction="row"
          gap="1rem"
          marginTop="0.5rem"
          display="flex"
          justifyContent={"center"}
        >
          <SocialIcon
            url="https://github.com/lgeoff31"
            fgColor="orange"
            bgColor="rgb(36,36,36)"
            title="GitHub"
            target="_blank"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/lgeoff31/"
            fgColor="orange"
            bgColor="rgb(36,36,36)"
            title="LinkedIn"
            target="_blank"
          />
          <SocialIcon
            url="https://www.geoffreylee.me/"
            fgColor="orange"
            bgColor="rgb(36,36,36)"
            title="LanguageIcon"
            target="_blank"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
