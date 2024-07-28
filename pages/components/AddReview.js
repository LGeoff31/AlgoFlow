import React, { useState } from "react";
import {
  TextField,
  Stack,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  createTheme,
  ThemeProvider,
  Rating,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { MdOutlineRateReview } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#030303",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const AddReview = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async () => {
    if (!name || !review) {
      alert("Please fill in all fields!");
      return;
    }
    if (review.length > 300) {
      alert("Sorry, the review must be shorter than 300 characters");
      return;
    }

    const newReview = {
      name: name,
      review: review,
      rating: rating,
    };

    const response = await fetch("/api/add-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    if (response.ok) {
      setReviews([...reviews, newReview]);
      setOpen(false);
      setName("");
      setReview("");
      setRating(0);
      setSnackbarOpen(true);
    } else {
      alert("Failed to submit the review. Please try again.");
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Stack>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            borderRadius: "30px",
            backgroundColor: "#2196F3",
            padding: "10px 20px",
            margin: "0 auto",
            textTransform: "none",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#1976D2",
            },
          }}
        >
          Add a Review &nbsp; <MdOutlineRateReview fontSize="2rem" />
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle margin={2} sx={{ color: "#ffffff" }}>
            Add a Review!
            <IconButton
              style={{ float: "right" }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} margin={2}>
              <TextField
                required
                variant="outlined"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ style: { color: "#ffffff" } }}
                InputProps={{ style: { color: "#ffffff" } }}
              />
              <TextField
                variant="outlined"
                label="Write a detailed review..."
                multiline
                rows={4}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                InputLabelProps={{ style: { color: "#ffffff" } }}
                InputProps={{ style: { color: "#ffffff" } }}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Rating
                  name="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  sx={{
                    fontSize: "3rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              </Box>
              <Button
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Review has been added successfully!
          </Alert>
        </Snackbar>
      </Stack>
    </ThemeProvider>
  );
};

export default AddReview;
