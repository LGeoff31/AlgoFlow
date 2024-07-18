import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Stack,
  Box,
  Link,
  Button,
  useScrollTrigger,
} from "@mui/material";
import CardFlip from "../subcomponents/CardFlip";
import { DisplayBars, generateArray, playNote } from "@/utils/utils";
import { SocialIcon } from "react-social-icons";

const Homepage = () => {
  const [array, setArray] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const arr = []; // 0.05, 0.1. .. -> 1 -> 0.05
  let barVal = 0.05;
  let incrementing = true;
  for (let i = 1; i < 40; i++) {
    arr.push(barVal);
    if (incrementing) {
      barVal += 0.05;
    } else {
      barVal -= 0.05;
    }
    if (barVal >= 1) {
      incrementing = false;
    }
  }
  useEffect(() => {
    const newArray = generateArray(60, setIsSorted);
    setArray(newArray);
  }, []);
  const play = () => {
    setClicked(true);
    const swaps = bubbleSort();
    animate(swaps, array, setArray);
  };
  const [indices, setIndices] = useState([-1, -1]);
  const bubbleSort = () => {
    const swaps = [];
    const sortedArray = [...array];
    for (let i = 0; i < sortedArray.length; i++) {
      for (let j = 0; j < sortedArray.length - i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          swaps.push([j, j + 1]);
          [sortedArray[j], sortedArray[j + 1]] = [
            sortedArray[j + 1],
            sortedArray[j],
          ];
        }
      }
    }
    return swaps;
  };

  const animate = (swaps, array, setArray) => {
    console.log(swaps);
    if (swaps.length == 0) {
      setIsSorted(true);
      return;
    }
    const [i, j] = swaps.shift();
    const newArray = [...array];
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    setArray(newArray);
    setIndices([i, j]);

    playNote(200 + array[i] * 500);
    playNote(200 + array[j] * 500);

    const id = setTimeout(() => animate(swaps, newArray, setArray));
  };
  return (
    <Grid margin="0 auto" justifyContent={"center"} textAlign={"center"}>
      <Stack
        direction="row"
        alignItems={"center"}
        margin="0 auto"
        justifyContent={"center"}
        marginTop="2rem"
      >
        <img src={"../../slogan.png"} alt="slogan" height={90} />
      </Stack>
      <Typography
        fontFamily="Space Grotesk"
        marginBottom="2rem"
        sx={{
          textAlign: "center",
          color: "grey",
          marginTop: "1rem",
          // textTransform: "uppercase",
          letterSpacing: "0.2rem",
          fontSize: "2rem",
        }}
      >
        Learn Sorting Algorithms the Right Way
      </Typography>
      <Box
        sx={{
          height: "3.5rem", // same height as the button
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!clicked && (
          <Button
            variant="contained"
            onClick={play}
            sx={{
              backgroundColor: "black", // turquoise color
              padding: "0.75rem 2rem",
              borderRadius: "50px",
              fontFamily: "Space Grotesk",
              "&:hover": {
                backgroundColor: "darkturquoise",
              },
            }}
          >
            <Typography
              fontWeight={"bold"}
              fontSize="1.5rem"
              color="turquoise"
              sx={{ textTransform: "none" }}
            >
              Demo
            </Typography>
          </Button>
        )}
      </Box>

      <DisplayBars array={array} indices={indices} isSorted={isSorted} />
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent={"space-evenly"}
        gap={"2rem"}
        marginTop="4rem"
      >
        <CardFlip
          src="../../code.png"
          title="Code Snippets"
          desc="Support for 5 of the most popular programming languages. Code implementations were created by me in a simplistic and concise way. "
        />
        <CardFlip
          src="../../bars.png"
          title="User Interactivity"
          desc="Support for playback speed, numbrs of bars, play/pause, and randomize. These features were made to work during animations to allow you to learn at your own pace! "
        />
      </Stack>
      <Typography
        color="white"
        fontSize={{ md: "2rem", xs: "1.2rem" }}
        fontFamily="Space Grotesk"
        marginTop="4rem"
      >
        All Code Implementations were created by me
      </Typography>
      <Stack
        direction="row"
        alignItems={"center"}
        margin="0 auto"
        justifyContent={"center"}
      >
        <Typography
          color="white"
          fontSize={{ md: "1.5rem", xs: "1rem" }}
          fontFamily="Space Grotesk"
        >
          Leave a ⭐ to support the project
        </Typography>
        <Box
          sx={{
            fontSize: "2rem",
            transition: "transform 0.3s",
            ":hover": {
              transform: "scale(1.5)",
            },
          }}
        >
          <SocialIcon
            url="https://github.com/LGeoff31/algoflow"
            fgColor="orange"
            bgColor="transparent"
            title="GitHub"
            target="_blank"
            style={{ width: 60, height: 60 }}
          />
        </Box>
      </Stack>
    </Grid>
  );
};

export default Homepage;
