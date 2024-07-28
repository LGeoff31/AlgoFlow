import React, { useState, useEffect } from "react";
import { Avatar, Stack, Typography, Box, Paper, Rating } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format } from "date-fns";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/get-reviews", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        console.error("Failed to fetch reviews");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box mt={4} mx={2}>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <Box key={index} px={2}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                borderRadius: 2,
                background:
                  "linear-gradient(135deg, #000000 40%, #FF5722 40%, #FF5722 60%, #000000 60%)",
                backgroundSize: "250% 200%",
                position: "relative",
                height: "auto",
                minHeight: "200px",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)",
                  zIndex: 0,
                },
                animation: "backgroundAnimation 5s ease infinite",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                zIndex={1}
                position="relative"
                marginRight="1rem"
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar alt={review.name} />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    {review.name}
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    color: "grey.300",
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                  }}
                >
                  {format(new Date(review.created_at), "PPP")}
                </Typography>
              </Stack>
              <Box
                mt={1}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Rating
                  name="rating"
                  value={review.rating}
                  readOnly
                  precision={0.5}
                  sx={{
                    fontSize: "2rem",
                  }}
                />
              </Box>
              <Typography
                marginTop="1rem"
                sx={{
                  color: "grey.300",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                }}
              >
                {review.review}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Reviews;
