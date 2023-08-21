import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box
        as="section"
        color="F7FAFC"
        bg="#6B46C1"
        textAlign="center"
        pt="90px"
        pb="198px"
        px="32px"
      >
        <Heading fontWeight="800" fontSize="48px">
          Simple pricing for your business
        </Heading>
        <Text fontWeight="500" fontSize="24px" mt="18px">
          Plans that are carefully crafted for your business
        </Text>
      </Box>
    </>
  );
};

export default Header;
