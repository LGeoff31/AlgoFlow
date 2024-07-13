import { Typography, Grid, Button, Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { selectionSortCode } from "@/code/SelectionSort";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Description = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(selectionSortCode[selectedLanguage])
      .then(() => {
        toast.success("Copied!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
          style: {
            backgroundColor: "#008a39", // Set background color to red
            color: "#fff", // Set text color to white
            textAlign: "center",
          },
        });
      })
      .catch((err) => {
        toast.error("Could not copy text: ", err);
      });
  };

  return (
    <Grid container sx={{ color: "white", marginTop: "4rem" }}>
      <Grid item xs={12} md={6} container direction={"column"}>
        <Typography
          variant="h2"
          display="flex"
          margin="0 auto"
          justifyContent={"center"}
        >
          <span style={{ color: "#6B7280" }}>Selection</span>
          <span style={{ color: "#e68501", fontWeight: "bold" }}>Sort</span>
        </Typography>
        <Stack>
          <Typography
            fontSize="2rem"
            marginTop="4rem"
            marginBottom="1rem"
            sx={{ textDecoration: "underline" }}
          >
            {" "}
            Simple sorting algorithm
          </Typography>
          <Typography
            component={"ul"}
            // justifyContent={"center"}
            // margin="0 auto"
            // marginTop="3rem"
            fontSize="1.5rem"
            marginLeft="1rem"
          >
            <li>
              The algorithm repeatedly selects the smallest (or largest) element
              from the unsorted portion of the list and swaps it with the first
              element of the unsorted part
            </li>
            <li>
              This process is repeated for the remaining unsorted portion until
              the entire list is sorted.
            </li>
          </Typography>
          <Typography
            fontSize="2rem"
            marginTop="4rem"
            marginBottom="1rem"
            sx={{ textDecoration: "underline" }}
          >
            {" "}
            Complexity Analysis
          </Typography>
          <Typography component={"ul"} fontSize="1.5rem" marginLeft="1rem">
            <li>
              Time Complexity: O(n^2) Worst / Average case | Loop through all
              numbers and for each number, have to potentially swap close to n
              times, think of the example [n, n-1, n-2, .. 2, 1]
            </li>
            <li>
              Space Complexity: O(1) &nbsp; &nbsp; | Only pointer are used
            </li>
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={12} md={6}>
        <Button
          variant="contained"
          sx={{
            background:
              selectedLanguage === "python" ? "#bf8d02" : "rgb(77, 64, 51)",
            "&:hover": {
              background: "#f2cb61",
            },
          }}
          onClick={() => setSelectedLanguage("python")}
        >
          <img src={"python.png"} alt="python" height={50} />
        </Button>
        <Button
          variant="contained"
          sx={{
            background:
              selectedLanguage === "javascript" ? "#bf8d02" : "rgb(77, 64, 51)",
            "&:hover": {
              background: "#f2cb61",
            },
          }}
          onClick={() => setSelectedLanguage("javascript")}
        >
          <img src={"javascript.png"} alt="javascript" height={50} />
        </Button>
        <Button
          variant="contained"
          sx={{
            background:
              selectedLanguage === "cpp" ? "#bf8d02" : "rgb(77, 64, 51)",
            "&:hover": {
              background: "#f2cb61",
            },
          }}
          onClick={() => setSelectedLanguage("cpp")}
        >
          <img src={"c++.png"} alt="c++" height={50} />
        </Button>
        <Button
          variant="contained"
          sx={{
            background:
              selectedLanguage === "c" ? "#bf8d02" : "rgb(77, 64, 51)",
            "&:hover": {
              background: "#f2cb61",
            },
          }}
          onClick={() => setSelectedLanguage("c")}
        >
          <img src={"c.png"} alt="c" height={50} />
        </Button>
        <Button
          variant="contained"
          sx={{
            background:
              selectedLanguage === "java" ? "#bf8d02" : "rgb(77, 64, 51)",
            "&:hover": {
              background: "#f2cb61",
            },
          }}
          onClick={() => setSelectedLanguage("java")}
        >
          <img src={"java.png"} alt="java" height={50} />
        </Button>
        {/* <Stack sx={{background:"black"}} */}
        <div style={{ position: "relative", marginTop: "1rem" }}>
          <Tooltip title="Copy to Clipboard" arrow>
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "#bf8d02",
                "&:hover": {
                  background: "#bf8d09",
                },
              }}
              onClick={copyToClipboard}
            >
              <HiOutlineClipboardDocument
                style={{ height: "20px", width: "20px" }}
              />
            </Button>
          </Tooltip>
          <SyntaxHighlighter
            language={selectedLanguage}
            style={dark}
            customStyle={{ height: "28rem", overflowY: "scroll" }}
          >
            {selectionSortCode[selectedLanguage]}
          </SyntaxHighlighter>
        </div>
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

export default Description;
