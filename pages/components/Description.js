import { Typography, Grid, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import MergeSort from "../code/MergeSort";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const customStyle = {
  hljs: {
    background: "#000000", // Set background to black
    color: "#ffffff", // Set text color to white
  },
  // Add more custom styles here if needed
};

const Description = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  return (
    <Grid container sx={{ color: "white", marginTop: "4rem" }}>
      <Grid item xs={12} md={6}>
        <Typography>This is a description</Typography>
      </Grid>
      <Grid xs={12} md={6}>
        <Button
          variant="contained"
          onClick={() => setSelectedLanguage("javascript")}
        >
          Javascript
        </Button>
        <Button
          variant="contained"
          onClick={() => setSelectedLanguage("python")}
        >
          Python
        </Button>
        {/* <Stack sx={{background:"black"}} */}
        <SyntaxHighlighter language={selectedLanguage} style={dark}>
          {MergeSort[selectedLanguage]}
        </SyntaxHighlighter>
      </Grid>
    </Grid>
  );
};

export default Description;
