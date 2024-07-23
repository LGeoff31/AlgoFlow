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
} from "@mui/material";
import { MdOutlineRateReview } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";

const AddReview = ({ commentsArray, setCommentsArray }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!name || !comment) {
      alert("Please fill in all fields!");
      return;
    }
    if (comment.length > 300) {
      alert("Sorry, the comment must be shorter than 300 characters");
      return;
    }

    const newComment = {
      name: name,
      comment: comment,
    };

    setCommentsArray([...commentsArray, newComment]);

    setOpen(false);
    setName("");
    setComment("");
  };

  return (
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
        <DialogTitle margin={2}>
          Add a Review!
          <IconButton style={{ float: "right" }} onClick={() => setOpen(false)}>
            <CloseIcon color="primary" />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2} margin={2}>
            <TextField
              required
              variant="outlined"
              label="Display Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Write a detailed review..."
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button color="primary" variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};

export default AddReview;
