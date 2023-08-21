import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const Pricing = () => {
  return (
    <>
      <Box mx="6">
        <Box
          maxW="994px"
          margin="auto"
          mt="-265px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
        >
          <Flex direction={["column", "column", "row"]}>
            <Box bg="#F0EAFB" p="60px" textAlign="center" color="black">
              <Text fontSize="2xl" fontWeight="extrabold">
                Premium PRO
              </Text>
              <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]}>
                $329
              </Heading>
              <Text color="#171923" fontSize="xl" fontWeight="medium" mt="2">
                billed just once
              </Text>
              <Button colorScheme="purple" size="lg" w="282px" mt="6">
                Get Started
              </Button>
            </Box>
            <Box p="60px" fontSize="lg" bg="white" color="black">
              <Text textAlign="left">
                Access these features when you get this pricing package for your
                business.
              </Text>
              <UnorderedList spacing="5" mt="5">
                <ListItem>International calling and messaging API</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated messages via Zapier</ListItem>
                <ListItem>24/7 support and consulting</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Pricing;
