import { Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"} transform={"scale(3)"}>
        <Spinner size={"xl"} />
    </VStack>
  );
};

export default Loader;