import { 
  Box, 
  IconButton, 
  useDisclosure, 
  Tooltip, 
  useColorModeValue,
  keyframes
} from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight, FiSidebar } from "react-icons/fi";
import { ModalContext } from "../../context/modalContext";
import { useContext } from "react";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7); }
  70% { box-shadow: 0 0 0 6px rgba(168, 85, 247, 0); }
  100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); }
`;

const SwitchButton = () => {
  const { modalState, toggleSidebar } = useContext(ModalContext);
  
  const buttonBg = useColorModeValue("white", "gray.800");
  const shadowColor = useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)");

  const onToggleSidebarHandler = () => {
    toggleSidebar();
  };

  return (
    <Box
      pos="absolute"
      right={modalState.sidebarIsOpen ? "4px" : "20px"}
      top="20px"
      zIndex={20}
      transition="right 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <Tooltip 
        label={modalState.sidebarIsOpen ? "Hide Sidebar" : "Show Sidebar"} 
        placement="left"
        bg="gray.800"
        color="white"
        fontSize="sm"
        borderRadius="md"
        hasArrow
      >
        <IconButton
          icon={
            modalState.sidebarIsOpen ? <FiChevronRight /> : <FiChevronLeft />
          }
          onClick={onToggleSidebarHandler}
          size="md"
          variant="solid"
          colorScheme="purple"
          bg="purple.500"
          color="white"
          borderRadius="full"
          boxShadow={`0 4px 12px ${shadowColor}`}
          _hover={{
            bg: "purple.600",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 20px rgba(168, 85, 247, 0.4)",
            animation: `${pulse} 1.5s infinite`,
          }}
          _active={{
            transform: "translateY(0px)",
            bg: "purple.700",
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          aria-label={modalState.sidebarIsOpen ? "Hide Sidebar" : "Show Sidebar"}
        />
      </Tooltip>
      
      {/* Floating indicator */}
      <Box
        position="absolute"
        top="-2px"
        right="-2px"
        w="3"
        h="3"
        bg="green.400"
        borderRadius="full"
        border="2px solid"
        borderColor={buttonBg}
        opacity={modalState.sidebarIsOpen ? 1 : 0}
        transform={modalState.sidebarIsOpen ? "scale(1)" : "scale(0)"}
        transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
      />
    </Box>
  );
};

export default SwitchButton;
