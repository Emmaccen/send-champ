import { ExternalLinkIcon, SunIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

interface PaymentCardPropDTO {
  cardTitle: string;
  icon: React.FC;
  options: {
    option1: {
      name: string;
      value: string;
    };
    option2?: {
      name: string;
      value: string;
    };
  };
}

export const PaymentCard: React.FC<Required<PaymentCardPropDTO>> = ({
  cardTitle,
  options,
}) => {
  return (
    <Box
      className="paymentCard"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      bg="white"
    >
      <Flex alignItems={"center"}>
        <Badge borderRadius="full" p="2" colorScheme="teal">
          <SunIcon />
        </Badge>
        <Heading pl="2" as="h5" size="sm">
          {cardTitle}
        </Heading>
      </Flex>

      <Flex
        sx={{ minHeight: "190px" }}
        direction="column"
        justify="space-between"
      >
        <Box>
          <Grid mt="5" templateColumns="repeat(2, 1fr)">
            {
              <Box
                mt="1"
                fontWeight="semibold"
                fontSize={"sm"}
                as="h6"
                lineHeight="tight"
                isTruncated
              >
                {`${options.option1.name} ${cardTitle}`}
              </Box>
            }
            <Box>
              <Box as="span" color="1A202C" fontWeight="medium" fontSize="xs">
                Starts at
              </Box>
              <Box
                mt="1"
                fontWeight="medium"
                fontSize={"sm"}
                as="h6"
                lineHeight="tight"
                isTruncated
              >
                {options.option1.value}
              </Box>
            </Box>
          </Grid>
          {options.option2 && (
            <Grid mt="5" templateColumns="repeat(2, 1fr)">
              <Box
                mt="1"
                fontWeight="semibold"
                fontSize={"sm"}
                as="h6"
                lineHeight="tight"
                isTruncated
              >
                {`${options.option2.name} ${cardTitle}`}
              </Box>
              <Box
                mt="1"
                fontWeight="medium"
                fontSize={"sm"}
                as="h6"
                lineHeight="tight"
                isTruncated
              >
                {options.option2.value}
              </Box>
            </Grid>
          )}
        </Box>
        <Spacer />
        <Link
          sx={{ textAlign: "right" }}
          fontSize="sm"
          href="https://github.com/emmaccen"
          isExternal
          color="#0080FC"
        >
          See more details <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </Box>
  );
};
