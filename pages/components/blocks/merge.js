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

const Merge = () => {
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
    const sortedArray = [...array];
    if (!paused) {
      const swaps = [];
      mergeSort(sortedArray, 0, sortedArray.length - 1, swaps);
      animate(swaps, array, setArray);
    } else {
      clearTimeout(timeoutId);
    }
  }, [paused]);

  const merge = (arr, low, mid, high, swaps) => {
    const left = arr.slice(low, mid + 1);
    const right = arr.slice(mid + 1, high + 1);
    let i = 0;
    let j = 0;
    let k = low;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        swaps.push([k, arr[k], left[i]]);
        arr[k++] = left[i++];
      } else {
        swaps.push([k, arr[k], right[j]]);
        arr[k++] = right[j++];
      }
    }

    while (i < left.length) {
      swaps.push([k, arr[k], left[i]]);
      arr[k++] = left[i++];
    }

    while (j < right.length) {
      swaps.push([k, arr[k], right[j]]);
      arr[k++] = right[j++];
    }
  };
  const mergeSort = (arr, low, high, swaps) => {
    if (low < high) {
      const mid = Math.floor((low + high) / 2);
      mergeSort(arr, low, mid, swaps);
      mergeSort(arr, mid + 1, high, swaps);
      merge(arr, low, mid, high, swaps);
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

export default Merge;
