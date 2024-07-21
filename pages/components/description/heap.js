import { Typography, Grid, Button, Stack, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { heapSortCode } from "@/code/HeapSort";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Analysis from "./Analysis";

const Description = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(heapSortCode[selectedLanguage])
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
        <Analysis
          desc="Transform the array into a max heap, where the parent node is greater than or equal to its child nodes. Once the max heap is built, repeatedly extract the maximum element from the heap and place it at the end of the array. Then, reheapify the remaining elements to restore the heap property. Continue this process until the entire array is sorted."
          name="Heap"
          average="O(nlogn)"
          best="O(nlogn)"
          worst="O(nlogn)"
          space="O(1)"
        />
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
            customStyle={{ height: "43.5rem", overflowY: "scroll" }}
          >
            {heapSortCode[selectedLanguage]}
          </SyntaxHighlighter>
        </div>
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

export default Description;
