import React from "react";
import { Typography, Stack } from "@mui/material";

const Analysis = ({ desc, time, space }) => {
  return (
    <Stack marginRight="2rem">
      <Typography fontSize="2rem" color="#e68501">
        Description
      </Typography>
      <Typography fontSize="1.5rem">{desc}</Typography>
      <Typography fontSize="2rem" color="#e68501" marginTop="2rem">
        Time Complexity
      </Typography>
      <Typography fontSize="1.5rem">{time}</Typography>
      <Typography fontSize="2rem" color="#e68501" marginTop="2rem">
        Space Complexity
      </Typography>
      <Typography fontSize="1.5rem">{space}</Typography>
    </Stack>
  );
};

export default Analysis;
