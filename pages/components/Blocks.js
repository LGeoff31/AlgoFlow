import React, { Component } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import { getMergeSortAnimations } from "../SortingAlgorithms/algorithms.js";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 110;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

class Blocks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <Grid
        margin="0 auto"
        justifyContent={"center"}
        textAlign={"center"}
        marginTop="4rem"
      >
        <Typography color="white" variant="h2" marginBottom="4rem">
          Merge Sort
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="flex-end">
          {array.map((value, idx) => (
            <Box
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${NUMBER_OF_ARRAY_BARS / 10}px`,
              }}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          onClick={() => this.mergeSort()}
          sx={{ color: "white" }}
        >
          Sort!
        </Button>
        <Button variant="contained" onClick={() => this.resetArray()}>
          Generate new array
        </Button>
      </Grid>
    );
  }
}

export default Blocks;

// Utility function to generate a random number between a given range
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
