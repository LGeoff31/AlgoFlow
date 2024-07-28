import React, { useEffect, useState } from "react";
import { Box, keyframes } from "@mui/material";

const COLOR = "turquoise";
const SWAP_COLOR = "red";
const SORTED_COLOR = "green";
const WAVE_COLOR = "yellow";

const waveAnimation = keyframes`
  0% { background-color: ${SORTED_COLOR}; }
  50% { background-color: ${WAVE_COLOR}; }
  100% { background-color: ${SORTED_COLOR}; }
`;

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

export const playCompletionSound = () => {
  const notes = [261, 293, 329, 349, 392, 440, 494, 550];
  notes.forEach((note, index) => {
    setTimeout(() => {
      playNote(note);
    }, index * 200);
  });
};

export const DisplayBars = ({ array, indices, isSorted }) => {
  const [waveEffect, setWaveEffect] = useState(false);

  useEffect(() => {
    if (isSorted) {
      setWaveEffect(true);
    }
  }, [isSorted]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        height: "400px",
        marginTop: "3rem",
        padding: "2rem",
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
            animation:
              isSorted && waveEffect
                ? `${waveAnimation} 1s ease ${idx * 0.05}s infinite`
                : "none",
            transition: isSorted ? "background-color 0.5s ease" : "none",
          }}
        />
      ))}
    </Box>
  );
};
