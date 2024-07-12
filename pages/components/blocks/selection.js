import React, { useEffect, useState, useRef } from "react";
import { Typography, Box, Button, Stack, Slider } from "@mui/material";
import { FaRandom, FaPlay, FaPause } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { CiMusicNote1 } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import {
  generateArray,
  playNote,
  handlePlayPause,
  DisplayBars,
  handleRefresh,
} from "../utils";

const Selection = () => {
  const [sound, setSound] = useState(true);
  const soundRef = useRef(sound);
  const [paused, setPaused] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [bars, setBars] = useState(20);
  const [speed, setSpeed] = useState(1);
  const speedRef = useRef(speed);
  const [isSorted, setIsSorted] = useState(false);
  const [array, setArray] = useState([]);
  const [indices, setIndices] = useState([-1, -1]);

  // Allow sound toggling during animation
  useEffect(() => {
    soundRef.current = sound;
  }, [sound]);
  // Allow speed toggling during animation
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  // Display how many bars user wants to see in real-time
  useEffect(() => {
    const newArray = generateArray(bars, setIsSorted);
    setArray(newArray);
  }, [bars]);
  // Simple play/pause toggling
  useEffect(() => {
    if (!paused) {
      const swaps = selectionSort();
      animate(swaps, array, setArray);
    } else {
      clearTimeout(timeoutId);
    }
  }, [paused]);

  const selectionSort = () => {
    const swaps = [];
    const sortedArray = [...array];
    for (let i = 0; i < sortedArray.length; i++) {
      let minElem = sortedArray[i];
      let minIdx = i;
      for (let j = i + 1; j < sortedArray.length; j++) {
        if (sortedArray[j] < minElem) {
          minElem = sortedArray[j];
          minIdx = j;
        }
      }
      swaps.push([i, minIdx]);
      [sortedArray[i], sortedArray[minIdx]] = [
        sortedArray[minIdx],
        sortedArray[i],
      ];
    }
    return swaps;
  };

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
      <DisplayBars array={array} indices={indices} isSorted={isSorted} />
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
              <IoMdSpeedometer />
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
              <GiNetworkBars />
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
          onClick={() => handlePlayPause(setPaused, paused, isSorted)}
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
          onClick={() =>
            handleRefresh(
              setPaused,
              timeoutId,
              bars,
              setIsSorted,
              setArray,
              setIndices
            )
          }
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

export default Selection;
