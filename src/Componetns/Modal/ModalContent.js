import React from "react";
import { Flex } from "@chakra-ui/react";

import Sidebar from "./Sidebar";
import Main from "./Main";

const ModalContent = () => {
  return (
    <Flex bg="white" p={5} maxH="calc(100vh - 50px)">
      <Main />
      <Sidebar />
    </Flex>
  );
};

export default ModalContent;
