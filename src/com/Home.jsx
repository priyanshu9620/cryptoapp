import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc2.jpg";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"full"}>
        <Image
          w={"full"}
          h={"100vh"}
          src={btcSrc}
        />
    </Box>
  );
};

export default Home;