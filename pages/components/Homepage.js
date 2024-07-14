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
import { DisplayBars, playNote } from "@/utils/utils";

const Homepage = () => {
  const [array, setArray] = useState([]);
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
    setArray(arr);
  }, []);
  const play = () => {
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
        marginTop="4rem"
      >
        <Typography color="white" variant="h3">
          Welcome to&nbsp;
        </Typography>
        <img src={"../../slogan.png"} alt="slogan" height={70} />
      </Stack>
      <Typography
        color="white"
        variant="body2"
        fontSize="1.2rem"
        marginTop="0.5rem"
        marginBottom="1rem"
      >
        Learn all the sorting algorithms with visualization
      </Typography>
      <Button variant="contained" color="success" onClick={play}>
        {" "}
        Animate{" "}
      </Button>
      <DisplayBars array={array} indices={indices} isSorted={false} />
      <Stack direction="row" justifyContent={"space-evenly"} gap={"2rem"}>
        <CardFlip />
        <CardFlip />
        <CardFlip />
      </Stack>
    </Grid>
  );
};

export default Homepage;
