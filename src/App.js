import React from "react";
import ModalInner from "./Componetns/Modal/ModalContent";
import {
  Box,
  Modal,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Container,
  VStack,
  Text,
  Heading,
  Icon,
  Flex,
  useColorModeValue,
  ScaleFade,
  SlideFade
} from "@chakra-ui/react";
import { FiEye, FiLayers, FiMaximize } from "react-icons/fi";
import ModalContextProvider from "./context/modalContext";
import PageContent from "./Componetns/PageContent";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgGradient = useColorModeValue(
    "linear(to-br, blue.50, purple.50, pink.50)",
    "linear(to-br, gray.900, purple.900, blue.900)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const shadowColor = useColorModeValue("rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)");

  return (
    <Box minH="100vh" bg={bgGradient} position="relative" overflow="hidden">
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="-50px"
        right="-50px"
        width="200px"
        height="200px"
        borderRadius="50%"
        bg="linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))"
        filter="blur(40px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-100px"
        left="-100px"
        width="300px"
        height="300px"
        borderRadius="50%"
        bg="linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))"
        filter="blur(60px)"
        zIndex={0}
      />

      <Container maxW="container.xl" py={8} position="relative" zIndex={1}>
        <VStack spacing={8} align="center">
          <ScaleFade initialScale={0.8} in={true}>
            <VStack spacing={4} textAlign="center">
              <Icon
                as={FiLayers}
                w={16}
                h={16}
                color="purple.500"
                filter="drop-shadow(0 4px 8px rgba(168, 85, 247, 0.3))"
              />
              <Heading
                size="2xl"
                bgGradient="linear(to-r, purple.500, blue.500, pink.500)"
                bgClip="text"
                fontWeight="800"
                letterSpacing="-0.02em"
              >
                Professional Modal System
              </Heading>
              <Text
                fontSize="lg"
                color="gray.600"
                maxW="2xl"
                lineHeight="1.7"
                fontWeight="400"
              >
                Experience a beautifully crafted, responsive modal interface with smooth animations,
                intelligent sidebar management, and stunning visual design.
              </Text>
            </VStack>
          </ScaleFade>

          <SlideFade in={true} offsetY="40px" delay={0.2}>
            <Flex gap={4} wrap="wrap" justify="center">
              <Button
                onClick={onOpen}
                size="lg"
                colorScheme="purple"
                bgGradient="linear(to-r, purple.500, blue.500)"
                color="white"
                px={8}
                py={6}
                fontSize="md"
                fontWeight="600"
                borderRadius="xl"
                boxShadow={`0 8px 32px ${shadowColor}`}
                leftIcon={<Icon as={FiMaximize} />}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 40px rgba(168, 85, 247, 0.4)",
                  bgGradient: "linear(to-r, purple.600, blue.600)",
                }}
                _active={{
                  transform: "translateY(0px)",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                Launch Modal Experience
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="purple.300"
                color="purple.600"
                px={8}
                py={6}
                fontSize="md"
                fontWeight="600"
                borderRadius="xl"
                leftIcon={<Icon as={FiEye} />}
                _hover={{
                  bg: "purple.50",
                  borderColor: "purple.400",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                Preview Features
              </Button>
            </Flex>
          </SlideFade>
        </VStack>

        <ModalContextProvider>
          <Modal 
            size="full" 
            isOpen={isOpen} 
            onClose={onClose}
            motionPreset="slideInBottom"
          >
            <ModalOverlay 
              bg="blackAlpha.600"
              backdropFilter="blur(10px)"
            />
            <ModalContent
              maxW="calc(100vw - 40px)"
              minH="calc(100vh - 40px)"
              my="20px"
              mx="20px"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              bg={cardBg}
            >
              <ModalBody p={0}>
                <ModalInner />
              </ModalBody>
            </ModalContent>
          </Modal>
        </ModalContextProvider>

        <Box mt={16}>
          <PageContent />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
