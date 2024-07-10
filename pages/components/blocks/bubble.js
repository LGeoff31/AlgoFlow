import React, { useEffect, useState, useRef } from "react";
import { Typography, Box, Button, Stack, Slider } from "@mui/material";
import { FaRandom, FaPlay, FaPause } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const SPEED = 1;
const BARS = 40;
const COLOR = "turquoise";
const SWAP_COLOR = "red";

const Bubble = () => {
  let audioCtx = null;
  const [sound, setSound] = useState(true);
  const soundRef = useRef(sound);
  const [paused, setPaused] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [bars, setBars] = useState(20);
  const [speed, setSpeed] = useState(1);
  const speedRef = useRef(speed);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    soundRef.current = sound;
  }, [sound]);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
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
  }, [bars]);

  // Generate new array
  const generateArray = () => {
    setIsSorted(false);
    const array = [];
    setIndices([-1, -1]);
    for (let i = 0; i < bars; i++) {
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
              backgroundColor: isSorted
                ? "green"
                : indices.includes(idx)
                ? SWAP_COLOR
                : COLOR,
              margin: "0 1px",
              transition: isSorted ? "background-color 0.5s ease" : "none",
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
      setIsSorted(true);
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
    console.log("sound", sound);
    if (soundRef.current) {
      playNote(200 + array[i] * 500);
      playNote(200 + array[j] * 500);
    }

    const id = setTimeout(
      () => animate(swaps, newArray, setArray),
      speedRef.current
    );
    setTimeoutId(id);
  };

  const handleRefresh = () => {
    setPaused(true);
    clearTimeout(timeoutId);
    const newArray = generateArray();
    setArray(newArray);
    setIndices([-1, -1]);
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
        alignItems={"center"}
      >
        <Box sx={{ width: 300 }}>
          <Stack direction="row" alignItems={"center"} gap="1.5rem">
            <Typography fontSize="2rem" color="white" margin="0 auto">
              SPEED
            </Typography>
            <Slider
              size="large"
              defaultValue={1}
              valueLabelDisplay="auto"
              min={1}
              max={500}
              onChange={(e, val) => setSpeed(val)}
              sx={{ color: "turquoise" }}
            />
          </Stack>
          <Stack direction="row" alignItems={"center"} gap="1.5rem">
            <Typography fontSize="2rem" color="white" margin="0 auto">
              BARS
            </Typography>
            <Slider
              size="large"
              defaultValue={20}
              valueLabelDisplay="auto"
              min={10}
              max={100}
              onChange={(e, val) => setBars(val)}
              sx={{ color: "turquoise" }}
              disabled={!paused}
            />
          </Stack>
        </Box>
        <Button
          variant="contained"
          onClick={handlePlayPause}
          sx={{
            color: "white",
            background: "transparent",
            fontSize: "3rem",
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          {paused ? <FaPlay /> : <FaPause />}
        </Button>
        <Button
          variant="contained"
          onClick={handleRefresh}
          sx={{
            color: "white",
            background: "transparent",
            fontSize: "3rem",
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          <FaRandom />
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            setSound(!sound);
          }}
          sx={{
            color: "white",
            background: "transparent",
            fontSize: "3rem",
            "&:hover": {
              background: "transparent",
            },
          }}
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
