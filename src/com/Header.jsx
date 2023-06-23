import React from 'react';
import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <HStack p={5} shadow="base" bgColor='purple'>
        <Button p={2} variant="unstyled" color="white">
          <Link to="/">Home</Link>
        </Button>
        <Button p={2} variant="unstyled" color="white">
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button p={2} variant="unstyled" color="white">
          <Link to="/coin">Coins</Link>
        </Button>
      </HStack>
    </div>
  )
}

export default Header
