import React from 'react';
import { Box, Flex, Stack, Typography } from '@mui/material';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isDesktop = window.innerWidth >= 768;

  return (
    <Box>
      <Flex
        className={isOpen ? 'mobile-nav-wrapper open' : 'mobile-nav-wrapper'}
        position="fixed"
        top={0}
        left={0}
        width="100%"
        zIndex={1000}
      >
        <Stack p={6}>
          <Typography
            color="orange"
            fontSize={{ md: '2rem', xs: '1.5rem' }}
            margin="0 auto"
            marginTop="2rem"
            fontFamily="Space Grotesk"
          >
            Select an Algorithm
          </Typography>
          <Stack
            display="flex"
            direction={"column"}
            gap="1rem"
            textAlign={"center"}
            marginRight="1%"
            marginTop="2rem"
          >
            {/* Algorithm selection items go here */}
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
