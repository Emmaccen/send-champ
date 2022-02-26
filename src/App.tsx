import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Layout } from "./pages/Layout";
import { Payment } from "./pages/Payment";
import "./styles/globals.scss";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      {/* <Grid minH="100vh" p={3}> */}
      {/* <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack> */}
      {/* </Grid> */}
      <Layout>
        <Payment />
      </Layout>
    </Box>
  </ChakraProvider>
);
