import {
  Typography,
  Grid,
  Button,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { mergeSortCode } from "@/code/MergeSort";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Analysis from "./Analysis";

const Description = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(mergeSortCode[selectedLanguage])
      .then(() => {
        toast.success("Copied!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
          style: {
            backgroundColor: "#008a39",
            color: "#fff",
            textAlign: "center",
          },
        });
      })
      .catch((err) => {
        toast.error("Could not copy text: ", err);
      });
  };

  return (
    <Grid
      container
      sx={{
        color: "white",
        marginTop: "4rem",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        container
        direction={"column"}
        sx={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <Analysis
          desc="Recursively split the array into left and right halves until the
            array has one element. Begin merging these single element arrays
            into two element arrays, then four element arrays, etc, until you have your sorted array. During the
            merge process, ensure your forming a sorted array using a two
            pointers technique."
          name="Merge"
          average="O(nlogn)"
          best="O(nlogn)"
          worst="O(nlogn)"
          space="O(n)"
        />
      </Grid>
      <Grid xs={12} md={6} sx={{ paddingRight: { md: "1rem", xs: "0rem" } }}>
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
            customStyle={{
              height: "44.5rem",
              overflowY: "scroll",
              fontSize: isDesktop ? "1rem" : "0.6rem",
            }}
          >
            {mergeSortCode[selectedLanguage]}
          </SyntaxHighlighter>
        </div>
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

export default Description;
