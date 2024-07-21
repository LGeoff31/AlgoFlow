import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  Box,
  Button,
  Stack,
  Slider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
} from "@/utils/utils";

const Heap = () => {
  const [sound, setSound] = useState(true);
  const soundRef = useRef(sound);
  const [paused, setPaused] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);
  const [bars, setBars] = useState(28);
  const [speed, setSpeed] = useState(100);
  const speedRef = useRef(speed);
  const [isSorted, setIsSorted] = useState(false);
  const [array, setArray] = useState([]);
  const [indices, setIndices] = useState([-1, -1]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

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
      const sortedArray = [...array];
      const swaps = heapSort(sortedArray);
      animate(swaps, array, setArray);
    } else {
      clearTimeout(timeoutId);
    }
  }, [paused]);

  const heapSort = (arr) => {
    const swaps = [];
    const n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i, swaps);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      swaps.push([0, arr[0], arr[i]]);
      swaps.push([i, arr[i], arr[0]]);
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0, swaps);
    }

    return swaps;
  };

  const heapify = (arr, size, i, swaps) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < size && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      swaps.push([i, arr[i], arr[largest]]);
      swaps.push([largest, arr[largest], arr[i]]);
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, size, largest, swaps);
    }
  };

  const animate = (swaps, array, setArray) => {
    if (swaps.length === 0) {
      setIsSorted(true);
      setPaused(true);
      return;
    }
    if (paused) {
      return;
    }
    const [index, oldValue, newValue] = swaps.shift();
    const newArray = [...array];
    newArray[index] = newValue;
    setArray(newArray);
    setIndices([index]);
    if (soundRef.current) {
      playNote(200 + newValue * 500);
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
          height={isMobile ? 80 : 40}
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
        direction={{ md: "row", xs: "column" }}
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
              defaultValue={100}
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
              defaultValue={28}
              valueLabelDisplay="auto"
              min={10}
              max={100}
              onChange={(e, val) => setBars(val)}
              sx={{ color: "turquoise" }}
              disabled={!paused}
            />
          </Stack>
        </Box>
        <Stack direction={"row"}>
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
      </Stack>
    </>
  );
};

export default Heap;
