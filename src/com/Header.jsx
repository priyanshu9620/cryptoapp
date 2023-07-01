import React from 'react';
import { Button, HStack,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <HStack p={5} shadow="base" bgColor='black'>
        <Button p={1} fontSize={"2xl"} variant="unstyled" color="white">
          <Link to="/">Home</Link>
        </Button>
        <Button p={1} fontSize={"2xl"} variant="unstyled" color="white">
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button p={1} fontSize={"2xl"} variant="unstyled" color="white">
          <Link to="/coin">Coins</Link>
        </Button>
        <Text
          mt={-5}
          ml={300}
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"whiteAlpha.700"}
        >
          Crypto
        </Text>
      </HStack>
    </div>
  )
}

export default Header