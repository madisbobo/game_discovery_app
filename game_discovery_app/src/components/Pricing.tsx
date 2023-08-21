import React from "react";
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
      <Box
        maxW="994px"
        margin="auto"
        mt="-265px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="md"
      >
        <Flex>
          <Box bg="#F0EAFB" p="60px" textAlign="center" color="black">
            <Text fontSize="24px" fontWeight="800">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize="60px">
              $329
            </Heading>
            <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="24px">
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="18px" bg="white" color="black">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <UnorderedList spacing="20px" mt="20px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Pricing;
