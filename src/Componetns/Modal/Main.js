import { 
  Box, 
  Image, 
  Text, 
  Heading, 
  VStack, 
  HStack, 
  Badge, 
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useColorModeValue,
  Flex,
  Icon,
  Progress,
  Divider
} from "@chakra-ui/react";
import { useContext } from "react";
import { FiTrendingUp, FiUsers, FiDollarSign, FiActivity } from "react-icons/fi";
import { ModalContext } from "../../context/modalContext";
import SwitchButton from "./SwitchButton";

const Main = () => {
  const { modalState } = useContext(ModalContext);
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  const stats = [
    { label: "Total Revenue", value: "$125,430", change: 12.5, icon: FiDollarSign, color: "green" },
    { label: "Active Users", value: "2,847", change: 8.2, icon: FiUsers, color: "blue" },
    { label: "Growth Rate", value: "94.3%", change: 15.3, icon: FiTrendingUp, color: "purple" },
    { label: "Performance", value: "98.2%", change: 2.1, icon: FiActivity, color: "orange" }
  ];

  return (
    <Box
      w={modalState.sidebarIsOpen ? `${modalState.mainWidth}%` : "100%"}
      transition={`width ${modalState.duration}s cubic-bezier(0.4, 0, 0.2, 1)`}
      pos="relative"
      overflow="hidden"
    >
      <SwitchButton />
      
      <Box 
        overflow="auto" 
        h="100%" 
        p={6}
        sx={{
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray.300',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'gray.400',
          },
        }}
      >
        <VStack spacing={8} align="stretch">
          {/* Hero Section */}
          <Box bg={cardBg} shadow="xl" borderRadius="2xl" overflow="hidden">
            <Box position="relative">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                w="100%"
                h="300px"
                objectFit="cover"
                alt="Professional Dashboard"
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="linear-gradient(transparent, rgba(0,0,0,0.8))"
                p={6}
              >
                <VStack align="start" spacing={2}>
                  <Badge colorScheme="purple" px={3} py={1} borderRadius="full" fontSize="xs">
                    Featured Content
                  </Badge>
                  <Heading size="lg" color="white" fontWeight="700">
                    Professional Analytics Dashboard
                  </Heading>
                  <Text color="whiteAlpha.900" fontSize="md">
                    Real-time insights and comprehensive data visualization
                  </Text>
                </VStack>
              </Box>
            </Box>
          </Box>

          {/* Statistics Grid */}
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
            {stats.map((stat, index) => (
              <GridItem key={index}>
                <Box bg={cardBg} shadow="lg" borderRadius="xl" _hover={{ transform: "translateY(-4px)", shadow: "2xl" }} transition="all 0.3s" p={6}>
                  <Stat>
                      <Flex justify="space-between" align="start" mb={3}>
                        <Box>
                          <StatLabel color={textColor} fontSize="sm" fontWeight="500">
                            {stat.label}
                          </StatLabel>
                          <StatNumber color={headingColor} fontSize="2xl" fontWeight="700">
                            {stat.value}
                          </StatNumber>
                        </Box>
                        <Icon
                          as={stat.icon}
                          w={8}
                          h={8}
                          color={`${stat.color}.500`}
                          p={2}
                          bg={`${stat.color}.50`}
                          borderRadius="lg"
                        />
                      </Flex>
                      <StatHelpText mb={0}>
                        <StatArrow type="increase" />
                        {stat.change}% vs last month
                      </StatHelpText>
                      <Progress
                        value={stat.change * 5}
                        size="sm"
                        colorScheme={stat.color}
                        borderRadius="full"
                        mt={2}
                      />
                    </Stat>
                </Box>
              </GridItem>
            ))}
          </Grid>

          {/* Main Content */}
          <Box bg={cardBg} shadow="lg" borderRadius="xl" p={8}>
            <VStack spacing={6} align="stretch">
                <Box>
                  <Heading size="md" color={headingColor} mb={3} fontWeight="700">
                    Professional Content Management
                  </Heading>
                  <Divider />
                </Box>
                
                <Text color={textColor} lineHeight="1.8" fontSize="md">
                  Welcome to our cutting-edge content management system. This platform represents 
                  the pinnacle of modern web development, combining elegant design principles with 
                  powerful functionality to deliver an exceptional user experience.
                </Text>
                
                <Text color={textColor} lineHeight="1.8" fontSize="md">
                  Our sophisticated architecture leverages the latest in React technology, 
                  featuring smooth animations, responsive design patterns, and intuitive 
                  user interfaces that adapt seamlessly to any device or screen size.
                </Text>

                <Box bg={useColorModeValue("blue.50", "blue.900")} p={6} borderRadius="xl" borderLeft="4px solid" borderColor="blue.500">
                  <Text fontWeight="600" color="blue.700" mb={2}>
                    Key Features & Capabilities
                  </Text>
                  <Text color={useColorModeValue("blue.600", "blue.300")} fontSize="sm" lineHeight="1.6">
                    • Dynamic sidebar with intelligent width management<br />
                    • Smooth animations and transitions using modern CSS techniques<br />
                    • Responsive design that works flawlessly across all devices<br />
                    • Professional color schemes and typography systems<br />
                    • Advanced state management with React Context API
                  </Text>
                </Box>

                <Text color={textColor} lineHeight="1.8" fontSize="md">
                  The system has been meticulously crafted to provide developers and end-users 
                  with the tools they need to create, manage, and display content in the most 
                  effective and visually appealing way possible. Every component has been 
                  optimized for performance and accessibility.
                </Text>
              </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Main;
