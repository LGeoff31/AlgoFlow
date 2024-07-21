import React, { useState } from "react";
import { Flex, useDisclosure, Box } from "@chakra-ui/react";
import Footer from "./Footer";
import {
  Typography,
  Button,
  Stack,
  Slider,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const { isOpen, onToggle } = useDisclosure();
  const algorithms = [
    { name: "Merge", route: "/merge" },
    { name: "Quick", route: "/quick" },
    { name: "Heap", route: "/heap" },
    { name: "Selection", route: "/selection" },
    { name: "Bubble", route: "/bubble" },
  ];
  return (
    <>
      <Flex
        justifyContent="space-between"
        padding="2rem"
        pos="sticky"
        top="0"
        zIndex="999"
        alignItems="center"
      >
        <Link href="/" sx={{ textDecoration: "none", zIndex: "999" }}>
          <img src={"../../logo-white.png"} alt="logo" height={50} />
        </Link>

        <Box zIndex={100} onClick={onToggle}>
          <Box
            className="hamburger-line"
            bgColor="white"
            borderRadius="md"
            transform={isOpen ? "rotate(-45deg) translate(-10px, 2px)" : "none"}
          />
          <Box
            className="hamburger-line"
            bgColor="white"
            borderRadius="md"
            opacity={isOpen ? 0 : 1}
          />
          <Box
            className="hamburger-line"
            bgColor="white"
            borderRadius="md"
            transform={isOpen ? "rotate(45deg) translate(-10px, -2px)" : "none"}
          />
        </Box>
        <Flex
          className={
            isOpen
              ? isDesktop
                ? "desktop-nav-wrapper open"
                : "mobile-nav-wrapper open"
              : "mobile-nav-wrapper"
          }
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          bgColor="black"
          flexDir="column"
          justifyContent="space-between"
          p={6}
        >
          <Stack gap="1.5rem">
            <Stack
              display="flex"
              direction={"column"}
              gap="1rem"
              textAlign={{ md: "right", xs: "center" }}
              marginRight="1%"
              marginTop="5rem"
            >
              {algorithms.map((algorithm, idx) => (
                <Link
                  key={idx}
                  sx={{
                    textDecoration: "none",
                  }}
                  href={`${algorithm.route.toLowerCase()}`}
                >
                  <Box
                    sx={{
                      transition: "transform 0.3s",
                      color: "white",
                      fontSize: "2rem",
                    }}
                  >
                    {algorithm.name}
                  </Box>
                </Link>
              ))}
            </Stack>
          </Stack>
          <Footer />
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
