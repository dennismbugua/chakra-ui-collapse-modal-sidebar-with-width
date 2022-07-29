import React from "react";

import ModalInner from "./Componetns/Modal/ModalContent";

import {
  Box,
  Modal,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody
} from "@chakra-ui/react";
import ModalContextProvider from "./context/modalContext";
import PageContent from "./Componetns/PageContent";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={5}>
      <Box mb="20px">
        <Button onClick={onOpen}>Open Modal</Button>
      </Box>
      <ModalContextProvider>
        <Modal size="full" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            maxW="calc(100vw - 50px)"
            minH="calc(100vh - 25px)"
            my="auto"
          >
            <ModalBody>
              <ModalInner />
            </ModalBody>
          </ModalContent>
        </Modal>
      </ModalContextProvider>
      <PageContent />
    </Box>
  );
};

export default App;
