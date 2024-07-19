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

const Analysis = ({ desc, average, best, worst, space, name }) => {
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
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "3rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <Typography
          fontSize="3rem"
          display="flex"
          margin="0 auto"
          justifyContent={"center"}
        >
          <span style={{ color: "#6B7280" }}>{name}</span>
          <span style={{ color: "#e68501", fontWeight: "bold" }}>Sort</span>
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          onClick={handleDescToggle}
          style={{ cursor: "pointer" }}
        >
          <Typography
            fontSize={{ md: "2.7rem", xs: "2rem" }}
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
            fontSize={{ md: "2.5rem", xs: "2rem" }}
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

                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "2rem", xs: "1.5rem" },
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      Average case
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color: "#f0f0f0",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "2rem", xs: "1.5rem" },
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      <MathJax>{`\\( ${average} \\)`}</MathJax>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "2rem", xs: "1.5rem" },
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      Best case
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color: "#f0f0f0",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "2rem", xs: "1.5rem" },
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      <MathJax>{`\\( ${best} \\)`}</MathJax>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "2rem", xs: "1.5rem" },
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      Worst case
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color: "#f0f0f0",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "2rem", xs: "1.5rem" },
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      <MathJax>{`\\( ${worst} \\)`}</MathJax>
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "2rem", xs: "1.5rem" },
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      Space Complexity
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color: "#f0f0f0",
                      backgroundColor: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "2rem", xs: "1.5rem" },
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      <MathJax>{`\\( ${space} \\)`}</MathJax>
                    </Typography>
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
