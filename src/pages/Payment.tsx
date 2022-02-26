import { SunIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Heading, Select } from "@chakra-ui/react";
import React from "react";
import { PaymentCard } from "../components/payment/PaymentCard";
import "../styles/payment.scss";
const dummyCardsData = [
  {
    cardTitle: "SMS",
    icon: () => <SunIcon />,
    options: {
      option1: {
        name: "To send",
        value: "AED 0.00184 /token",
      },
      option2: {
        name: "To Receive",
        value: "AED 0.00184 /token",
      },
    },
  },
  {
    cardTitle: "Calls",
    icon: () => <SunIcon />,
    options: {
      option1: {
        name: "To make",
        value: "AED 0.00184 /token",
      },
      option2: {
        name: "To Receive",
        value: "AED 0.00184 /token",
      },
    },
  },
  {
    cardTitle: "Email",
    icon: () => <SunIcon />,
    options: {
      option1: {
        name: "To send",
        value: "AED 0.00184 /token",
      },
    },
  },
  {
    cardTitle: "WhatsApp",
    icon: () => <SunIcon />,
    options: {
      option1: {
        name: "To send",
        value: "AED 0.00184 /token",
      },
      option2: {
        name: "To Receive",
        value: "AED 0.00184 /token",
      },
    },
  },
  {
    cardTitle: "Verification",
    icon: () => <SunIcon />,
    options: {
      option1: {
        name: "To send",
        value: "AED 0.00184 /token",
      },
      option2: {
        name: "To Receive",
        value: "AED 0.00184 /token",
      },
    },
  },
];

export const Payment = () => {
  return (
    <div>
      <Box className="topSection">
        <Heading fontWeight="medium" fontSize="3xl" color="#1A2020C">
          Sendchamp Pricing
        </Heading>
        <Box my="10" fontWeight="semibold" color="#999" fontSize="sm" as="p">
          Start with our competitive pay-as-you-go pricing. For deeper discounts
          on committed spend as you scale, talk with our sales team.
        </Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%" bg="white">
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </GridItem>
          <GridItem w="100%" bg="white">
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </GridItem>
        </Grid>
      </Box>
      <div className="paymentCardContainer grid3">
        {dummyCardsData.map(({ cardTitle, options, icon }) => {
          return (
            <PaymentCard cardTitle={cardTitle} options={options} icon={icon} />
          );
        })}
      </div>
    </div>
  );
};
