import React, { useState } from "react";
import {
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Analysis = ({ desc, average, best, worst, space }) => {
  const [descOpen, setDescOpen] = useState(true);
  const [analysisOpen, setAnalysisOpen] = useState(true);

  const handleDescToggle = () => {
    setDescOpen(!descOpen);
  };

  const handleAnalysisToggle = () => {
    setAnalysisOpen(!analysisOpen);
  };

  return (
    <MathJaxContext>
      <Stack
        marginRight="2rem"
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "3rem",
          borderRadius: "8px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          onClick={handleDescToggle}
          style={{ cursor: "pointer" }}
        >
          <Typography
            fontSize="2.7rem"
            color="#e68501"
            marginRight="0.5rem"
            sx={{ fontFamily: "Space Grotesk" }}
          >
            Description
          </Typography>
          <IconButton>
            <ExpandMoreIcon
              style={{
                transform: descOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
                color: "#e68501",
              }}
            />
          </IconButton>
        </Stack>
        <Collapse in={descOpen} timeout="auto" unmountOnExit>
          <Typography
            fontSize={{ md: "1.5rem", xs: "1rem" }}
            marginBottom="2rem"
            sx={{ fontFamily: "Space Grotesk" }}
          >
            {desc}
          </Typography>
        </Collapse>
        <Stack
          direction="row"
          alignItems="center"
          onClick={handleAnalysisToggle}
          style={{ cursor: "pointer" }}
        >
          <Typography
            fontSize="2.5rem"
            color="#e68501"
            marginRight="0.5rem"
            sx={{ fontFamily: "Space Grotesk" }}
          >
            Complexity Analysis
          </Typography>
          <IconButton>
            <ExpandMoreIcon
              style={{
                transform: analysisOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
                color: "#e68501",
              }}
            />
          </IconButton>
        </Stack>
        <Collapse in={analysisOpen} timeout="auto" unmountOnExit>
          <TableContainer component={Paper} sx={{ backgroundColor: "black" }}>
            <Table aria-label="complexity analysis table">
              <TableBody>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontFamily: "Space Grotesk",
                      fontSize: "2rem",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    Average case
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontSize: "2rem",
                      color: "#f0f0f0",
                      backgroundColor: "black",
                      fontFamily: "monospace",
                    }}
                  >
                    <MathJax>{`\\( ${average} \\)`}</MathJax>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontFamily: "Space Grotesk",
                      fontSize: "2rem",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    Best case
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontSize: "2rem",
                      color: "#f0f0f0",
                      backgroundColor: "black",
                      fontFamily: "monospace",
                    }}
                  >
                    <MathJax>{`\\( ${best} \\)`}</MathJax>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontFamily: "Space Grotesk",
                      fontSize: "2rem",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    Worst case
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontSize: "2rem",
                      color: "#f0f0f0",
                      backgroundColor: "black",
                      fontFamily: "monospace",
                    }}
                  >
                    <MathJax>{`\\( ${worst} \\)`}</MathJax>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      fontFamily: "Space Grotesk",
                      fontSize: "2rem",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    Space Complexity
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      fontSize: "2rem",
                      color: "#f0f0f0",
                      backgroundColor: "black",
                      fontFamily: "monospace",
                    }}
                  >
                    <MathJax>{`\\( ${space} \\)`}</MathJax>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Collapse>
      </Stack>
    </MathJaxContext>
  );
};

export default Analysis;
