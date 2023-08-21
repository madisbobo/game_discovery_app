import { HStack, Text, Icon, StackProps, Box, Stack } from "@chakra-ui/react";
import {
  MoneyBackGuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from "../icons/icons";
import { ElementType } from "react";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

const Feature = ({ icon, children, ...rest }: FeatureProps) => {
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <>
      <Box mx="6">
        <Box maxW="1024px" m="auto" py="10">
          <Stack
            px="12"
            spacing={["8", "8", "5"]}
            direction={["column", "column", "row"]}
          >
            <Feature icon={MoneyBackGuaranteeIcon}>
              30 day money back guarantee
            </Feature>
            <Feature icon={HassleFreeIcon}>
              No setup fees 100% hassle-free
            </Feature>
            <Feature icon={MonthlySubscriptionIcon}>
              No monthly subscription Pay once and for all
            </Feature>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Features;
