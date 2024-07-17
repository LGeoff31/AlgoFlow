import { Typography, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const CardFlip = ({ src, title, desc }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const flipCardStyles = {
    backgroundColor: "transparent",
    width: isMobile ? "600px" : "300px",
    height: isMobile ? "500px" : "200px",
    perspective: "1000px",
  };

  const flipCardInnerStyles = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  };

  const flipCardFrontBackStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  const flipCardFrontStyles = {
    ...flipCardFrontBackStyles,
    backgroundColor: "#bbb",
    color: "black",
  };

  const flipCardBackStyles = {
    ...flipCardFrontBackStyles,
    backgroundColor: "rgb(36,36,36)",
    color: "white",
    transform: "rotateY(180deg)",
  };

  return (
    <Stack
      direction="column"
      marginTop="4rem"
      display="flex"
      justifyContent={"center"}
      margin="0 auto"
    >
      <Typography
        color="white"
        fontSize="2rem"
        marginBottom="1rem"
        fontFamily="Space Grotesk"
      >
        {title}
      </Typography>
      <div
        style={flipCardStyles}
        onMouseOver={(e) => {
          e.currentTarget.querySelector(".flip-card-inner").style.transform =
            "rotateY(180deg)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.querySelector(".flip-card-inner").style.transform =
            "rotateY(0deg)";
        }}
      >
        <div className="flip-card-inner" style={flipCardInnerStyles}>
          <div className="flip-card-front" style={flipCardFrontStyles}>
            <img
              src={src}
              alt="Avatar"
              height={isMobile ? 500 : 200}
              width={isMobile ? 600 : 300}
            />
          </div>
          <div className="flip-card-back" style={flipCardBackStyles}>
            <Typography
              color="white"
              fontSize={{ md: "1.5rem", xs: "1rem" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              {desc}
            </Typography>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default CardFlip;
