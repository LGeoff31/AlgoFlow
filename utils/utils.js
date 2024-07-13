import React from "react";
import { Box } from "@mui/material";

const COLOR = "turquoise";
const SWAP_COLOR = "red";

let audioCtx = null;
export const playNote = (freq) => {
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

export const generateArray = (bars, setIsSorted) => {
  setIsSorted(false);
  const array = [];
  for (let i = 0; i < bars; i++) {
    array[i] = Math.random();
  }
  return array;
};

export const handlePlayPause = (setPaused, paused, isSorted) => {
  if (isSorted) {
    return;
  }
  setPaused(!paused);
};

export const handleRefresh = (
  setPaused,
  timeoutId,
  bars,
  setIsSorted,
  setArray,
  setIndices
) => {
  setPaused(true);
  clearTimeout(timeoutId);
  const newArray = generateArray(bars, setIsSorted);
  setArray(newArray);
  setIndices([-1, -1]);
};

export const DisplayBars = ({ array, indices, isSorted }) => {
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
