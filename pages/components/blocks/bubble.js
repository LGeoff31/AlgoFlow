import React, { useEffect, useState } from "react";
import { Typography, Box, Button, Stack } from "@mui/material";
import { FaRandom, FaPlay, FaPause } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const SPEED = 1;
const BARS = 30;
const COLOR = "turquoise";
const SWAP_COLOR = "red";

const Bubble = () => {
  let audioCtx = null;
  const [sound, setSound] = useState(true);
  const [paused, setPaused] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  // Plays a note given a frequency
  const playNote = (freq) => {
    if (audioCtx == null) {
      audioCtx = new (AudioContext ||
        webkitAudioContext ||
        window.webkitAudioContext)();
    }
    const dur = 0.1;
    const osc = audioCtx.createOscillator();
    osc.frequency.value = freq;
    osc.start();
    osc.stop(audioCtx.currentTime + dur);
    const node = audioCtx.createGain();
    node.gain.value = 0.1;
    node.gain.linearRampToValueAtTime(0, audioCtx.currentTime + dur);
    osc.connect(node);
    node.connect(audioCtx.destination);
  };
  const [array, setArray] = useState([]);

  // Initialization on page refresh
  useEffect(() => {
    const newArray = generateArray();
    setArray(newArray);
  }, []);

  // Generate new array
  const generateArray = () => {
    const array = [];
    setIndices([-1, -1]);
    for (let i = 0; i < BARS; i++) {
      array[i] = Math.random();
    }
    return array;
  };

  // Display the bars
  const displayBars = (indices) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          height: "800px",
          marginTop: "4rem",
        }}
      >
        {array.map((value, idx) => (
          <Box
            key={idx}
            sx={{
              width: "20px",
              height: `${value * 100}%`,
              backgroundColor: indices.includes(idx) ? SWAP_COLOR : COLOR,
              margin: "0 1px",
            }}
          />
        ))}
      </Box>
    );
  };

  // Bubble sort and update to sorted array
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
    // setArray(sortedArray);
    return swaps;
  };

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  useEffect(() => {
    if (!paused) {
      const swaps = bubbleSort();
      animate(swaps, array, setArray);
    } else {
      clearTimeout(timeoutId);
    }
  }, [paused]);

  const [indices, setIndices] = useState([-1, -1]);
  const animate = (swaps, array, setArray) => {
    if (swaps.length == 0) {
      setPaused(true);
      return;
    }
    if (paused) {
      return;
    }
    const [i, j] = swaps.shift();
    const newArray = [...array];
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    setArray(newArray);
    setIndices([i, j]);
    if (sound) {
      playNote(200 + array[i] * 500);
      playNote(200 + array[j] * 500);
    }

    const id = setTimeout(() => animate(swaps, newArray, setArray), SPEED);
    setTimeoutId(id);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Typography color="white" fontSize="3rem">
          <CiMusicNote1 />
        </Typography>
        <img
          src={"../../slogan.png"}
          alt="slogan"
          height={80}
          style={{ margin: "0 1rem" }}
        />
        <Typography fontSize="3rem" color="white">
          {" "}
          <CiMusicNote1 />
        </Typography>
      </Box>
      {displayBars(indices)}
      <Stack
        marginTop="4rem"
        direction="row"
        justifyContent={"center"}
        gap="2rem"
      >
        <Button
          variant="contained"
          onClick={handlePlayPause}
          sx={{ color: "white", background: "transparent", fontSize: "3rem" }}
        >
          {paused ? <FaPlay /> : <FaPause />}
        </Button>
        <Button
          variant="contained"
          onClick={() => setArray(generateArray)}
          sx={{ color: "white", background: "transparent", fontSize: "3rem" }}
        >
          <FaRandom />
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            setSound(!sound);
          }}
          sx={{ color: "white", background: "transparent", fontSize: "3rem" }}
        >
          {sound ? (
            <VolumeUpIcon sx={{ fontSize: "3rem" }} />
          ) : (
            <VolumeOffIcon sx={{ fontSize: "3rem" }} />
          )}
        </Button>
      </Stack>
    </>
  );
};

export default Bubble;
