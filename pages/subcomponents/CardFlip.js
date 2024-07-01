import { Typography, Stack } from "@mui/material";
import React from "react";

const CardFlip = () => {
  return (
    <Stack direction="column">
      <Typography fontSize="2rem" color="white" padding="1rem">
        Visualization
      </Typography>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src={"../../logo-white.png"}
              alt="Avatar"
              height={200}
              width={300}
            />
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default CardFlip;
