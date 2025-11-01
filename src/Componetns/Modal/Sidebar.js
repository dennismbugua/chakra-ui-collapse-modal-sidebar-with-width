import { 
  Box, 
  VStack, 
  Text, 
  Heading, 
  Avatar, 
  HStack, 
  Badge, 
  Divider,
  useColorModeValue,
  Progress,
  Icon,
  Button,
  Flex,
  Circle
} from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useRef } from "react";
import { 
  FiUser, 
  FiSettings, 
  FiBell, 
  FiActivity, 
  FiCalendar, 
  FiMail, 
  FiPhone,
  FiMapPin,
  FiStar
} from "react-icons/fi";
import { ModalContext } from "../../context/modalContext";

const Sidebar = () => {
  const sidebarWrapRef = useRef();
  const sidebarContentRef = useRef();
  const { modalState } = useContext(ModalContext);
  
  const sidebarBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  const updateSidebarContentWidth = useCallback(() => {
    if (!sidebarWrapRef.current) return;

    // get percentage from 0 to 1
    const u = modalState.sidebarWidth / 100;

    // highest width of scrollbar among browsers
    const scrollbarWidth = 18;

    const width =
      sidebarWrapRef.current.parentElement.clientWidth * u - scrollbarWidth;

    if (width > 0) {
      sidebarContentRef.current.style.width = width + "px";
    }
  }, [modalState.sidebarWidth]);

  useEffect(() => {
    setTimeout(updateSidebarContentWidth, modalState.duration * 1000);

    window.addEventListener("resize", updateSidebarContentWidth);

    return () => {
      window.removeEventListener("resize", updateSidebarContentWidth);
    };
  }, [modalState.duration, updateSidebarContentWidth]);

  const notifications = [
    { type: "success", message: "Profile updated successfully", time: "2 min ago" },
    { type: "info", message: "New message received", time: "5 min ago" },
    { type: "warning", message: "System maintenance scheduled", time: "1 hour ago" },
  ];

  const menuItems = [
    { icon: FiUser, label: "Profile", active: true },
    { icon: FiActivity, label: "Analytics", badge: "3" },
    { icon: FiSettings, label: "Settings" },
    { icon: FiBell, label: "Notifications", badge: "12" },
    { icon: FiCalendar, label: "Calendar" },
  ];

  return (
    <Box
      ref={sidebarWrapRef}
      w={modalState.sidebarIsOpen ? `${modalState.sidebarWidth}%` : "0"}
      transition={`width ${modalState.duration}s cubic-bezier(0.4, 0, 0.2, 1)`}
      overflow="hidden"
      bg={sidebarBg}
      borderLeft="1px solid"
      borderColor={borderColor}
      position="relative"
    >
      <Box 
        ref={sidebarContentRef} 
        overflow="auto" 
        h="100%"
        sx={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray.300',
            borderRadius: '2px',
          },
        }}
      >
        <VStack spacing={6} p={6} align="stretch">
          {/* User Profile Section */}
          <Box bg="transparent">
            <VStack spacing={4}>
              <Avatar
                size="xl"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                border="4px solid"
                borderColor="purple.500"
                shadow="lg"
              />
              <VStack spacing={1} textAlign="center">
                <Heading size="md" color={headingColor} fontWeight="700">
                  Alex Thompson
                </Heading>
                <Text color={textColor} fontSize="sm">
                  Senior Product Manager
                </Text>
                <Badge colorScheme="green" variant="subtle" borderRadius="full" px={3}>
                  Online
                </Badge>
              </VStack>
            </VStack>
          </Box>

          <Divider />

          {/* Contact Information */}
          <Box>
            <Heading size="sm" color={headingColor} mb={4} fontWeight="600">
              Contact Information
            </Heading>
            <VStack spacing={3} align="stretch">
              <HStack spacing={3}>
                <Circle size="8" bg="blue.100" color="blue.600">
                  <Icon as={FiMail} boxSize={3} />
                </Circle>
                <Box flex={1}>
                  <Text fontSize="xs" color={textColor} mb={1}>Email</Text>
                  <Text fontSize="sm" fontWeight="500">alex.thompson@company.com</Text>
                </Box>
              </HStack>
              <HStack spacing={3}>
                <Circle size="8" bg="green.100" color="green.600">
                  <Icon as={FiPhone} boxSize={3} />
                </Circle>
                <Box flex={1}>
                  <Text fontSize="xs" color={textColor} mb={1}>Phone</Text>
                  <Text fontSize="sm" fontWeight="500">+1 (555) 123-4567</Text>
                </Box>
              </HStack>
              <HStack spacing={3}>
                <Circle size="8" bg="purple.100" color="purple.600">
                  <Icon as={FiMapPin} boxSize={3} />
                </Circle>
                <Box flex={1}>
                  <Text fontSize="xs" color={textColor} mb={1}>Location</Text>
                  <Text fontSize="sm" fontWeight="500">San Francisco, CA</Text>
                </Box>
              </HStack>
            </VStack>
          </Box>

          <Divider />

          {/* Navigation Menu */}
          <Box>
            <Heading size="sm" color={headingColor} mb={4} fontWeight="600">
              Navigation
            </Heading>
            <VStack spacing={2} align="stretch">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant={item.active ? "solid" : "ghost"}
                  colorScheme={item.active ? "purple" : "gray"}
                  justifyContent="flex-start"
                  size="sm"
                  leftIcon={<Icon as={item.icon} />}
                  borderRadius="lg"
                  fontWeight="500"
                  _hover={{
                    bg: item.active ? "purple.600" : "gray.100",
                    transform: "translateX(4px)"
                  }}
                  transition="all 0.2s"
                >
                  <Flex justify="space-between" align="center" w="100%">
                    <Text>{item.label}</Text>
                    {item.badge && (
                      <Badge
                        colorScheme="red"
                        variant="solid"
                        borderRadius="full"
                        fontSize="xs"
                        px={2}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Flex>
                </Button>
              ))}
            </VStack>
          </Box>

          <Divider />

          {/* Recent Activity */}
          <Box>
            <Heading size="sm" color={headingColor} mb={4} fontWeight="600">
              Recent Activity
            </Heading>
            <VStack spacing={3} align="stretch">
              {notifications.map((notification, index) => (
                <Box
                  key={index}
                  p={3}
                  bg={useColorModeValue("gray.50", "gray.700")}
                  borderRadius="lg"
                  borderLeft="3px solid"
                  borderColor={
                    notification.type === "success" ? "green.500" :
                    notification.type === "info" ? "blue.500" : "orange.500"
                  }
                >
                  <Text fontSize="sm" fontWeight="500" mb={1}>
                    {notification.message}
                  </Text>
                  <Text fontSize="xs" color={textColor}>
                    {notification.time}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Box>

          <Divider />

          {/* Performance Metrics */}
          <Box>
            <Heading size="sm" color={headingColor} mb={4} fontWeight="600">
              Performance
            </Heading>
            <VStack spacing={4}>
              <Box w="100%">
                <Flex justify="space-between" mb={2}>
                  <Text fontSize="sm" fontWeight="500">Tasks Completed</Text>
                  <Text fontSize="sm" color={textColor}>87%</Text>
                </Flex>
                <Progress value={87} colorScheme="green" size="sm" borderRadius="full" />
              </Box>
              <Box w="100%">
                <Flex justify="space-between" mb={2}>
                  <Text fontSize="sm" fontWeight="500">Project Progress</Text>
                  <Text fontSize="sm" color={textColor}>92%</Text>
                </Flex>
                <Progress value={92} colorScheme="blue" size="sm" borderRadius="full" />
              </Box>
              <Box w="100%">
                <Flex justify="space-between" mb={2}>
                  <Text fontSize="sm" fontWeight="500">Team Rating</Text>
                  <HStack spacing={1}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        as={FiStar}
                        boxSize={3}
                        color={star <= 4 ? "yellow.400" : "gray.300"}
                        fill={star <= 4 ? "yellow.400" : "transparent"}
                      />
                    ))}
                  </HStack>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
