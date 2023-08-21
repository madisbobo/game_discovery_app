import { Box, Text, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box as="section" pb="28">
        <Box
          color="gray.50"
          bg="purple.600"
          textAlign={["left", "left", "center"]}
          pt="90px"
          pb="198px"
          px="8"
        >
          <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
            Simple pricing for your business
          </Heading>
          <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} mt="4">
            Plans that are carefully crafted for your business
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Header;
