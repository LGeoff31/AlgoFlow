import { Flex, useDisclosure, Box } from "@chakra-ui/react";
import { Typography, Stack, Link } from "@mui/material";
import Footer from "../components/Footer";

const MobileNavbar = () => {
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
        py={20}
        px={20}
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
          className={isOpen ? "mobile-nav-wrapper open" : "mobile-nav-wrapper"}
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
            <Typography
              fontSize="2rem"
              color="#e68501"
              margin="0 auto"
              marginTop="6rem"
              fontFamily="Space Grotesk"
            >
              Sorting Algorithms
            </Typography>
            <Stack
              display="flex"
              direction={"column"}
              gap="1rem"
              alignItems={"center"}
            >
              {algorithms.map((algorithm, idx) => (
                <Link
                  key={idx}
                  sx={{
                    textDecoration: "none",
                  }}
                  href={`/${algorithm.name.toLowerCase()}`}
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

export default MobileNavbar;
