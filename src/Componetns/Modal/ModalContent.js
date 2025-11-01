import React from "react";
import { 
  Flex, 
  Box, 
  useColorModeValue,
  IconButton,
  Tooltip,
  HStack
} from "@chakra-ui/react";
import { FiX, FiMinimize2, FiMaximize2 } from "react-icons/fi";
import Sidebar from "./Sidebar";
import Main from "./Main";

const ModalContent = () => {
  const bgGradient = useColorModeValue(
    "linear(to-br, gray.50, blue.50)",
    "linear(to-br, gray.800, gray.900)"
  );
  const headerBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box h="100%" bg={bgGradient} position="relative" overflow="hidden">
      {/* Header Bar */}
      <Box
        bg={headerBg}
        borderBottom="1px solid"
        borderColor={borderColor}
        px={6}
        py={4}
        position="sticky"
        top={0}
        zIndex={10}
        backdropFilter="blur(10px)"
        boxShadow="0 1px 3px rgba(0, 0, 0, 0.1)"
      >
        <Flex justify="space-between" align="center">
          <Box>
            <Box
              fontSize="lg"
              fontWeight="700"
              bgGradient="linear(to-r, purple.600, blue.600)"
              bgClip="text"
            >
              Professional Dashboard
            </Box>
            <Box fontSize="sm" color="gray.500" mt={1}>
              Advanced modal interface with dynamic sidebar
            </Box>
          </Box>
          <HStack spacing={2}>
            <Tooltip label="Minimize" placement="bottom">
              <IconButton
                icon={<FiMinimize2 />}
                variant="ghost"
                size="sm"
                borderRadius="lg"
                _hover={{ bg: "gray.100" }}
              />
            </Tooltip>
            <Tooltip label="Maximize" placement="bottom">
              <IconButton
                icon={<FiMaximize2 />}
                variant="ghost"
                size="sm"
                borderRadius="lg"
                _hover={{ bg: "gray.100" }}
              />
            </Tooltip>
            <Tooltip label="Close" placement="bottom">
              <IconButton
                icon={<FiX />}
                variant="ghost"
                size="sm"
                borderRadius="lg"
                colorScheme="red"
                _hover={{ bg: "red.50", color: "red.600" }}
              />
            </Tooltip>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex h="calc(100% - 80px)" position="relative">
        <Main />
        <Sidebar />
      </Flex>

      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="20%"
        right="-10%"
        width="200px"
        height="200px"
        borderRadius="50%"
        bg="linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(59, 130, 246, 0.05))"
        filter="blur(40px)"
        pointerEvents="none"
      />
    </Box>
  );
};

export default ModalContent;
