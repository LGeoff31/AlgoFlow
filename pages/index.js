import { Typography, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <Grid sx={{ background: "rgb(36,36,36)", padding: "2rem" }}>
      <Navbar />
      <Homepage />
    </Grid>
  );
}
