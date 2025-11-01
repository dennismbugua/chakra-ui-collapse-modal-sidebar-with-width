import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Heading,
  VStack,
  HStack,
  Icon,
  Badge,
  Button,
  Image,
  useColorModeValue,
  Flex,
  Avatar,
  AvatarGroup,
  Divider,
  SimpleGrid
} from "@chakra-ui/react";
import { 
  FiCode, 
  FiZap, 
  FiShield, 
  FiTrendingUp, 
  FiUsers, 
  FiTarget,
  FiStar,
  FiArrowRight,
  FiPlay
} from "react-icons/fi";

const PageContent = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  const features = [
    {
      icon: FiCode,
      title: "Modern Architecture",
      description: "Built with the latest React patterns and best practices for optimal performance and maintainability.",
      color: "blue"
    },
    {
      icon: FiZap,
      title: "Lightning Fast",
      description: "Optimized for speed with lazy loading, code splitting, and efficient state management.",
      color: "yellow"
    },
    {
      icon: FiShield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with comprehensive testing and error handling mechanisms.",
      color: "green"
    },
    {
      icon: FiTrendingUp,
      title: "Scalable Solution",
      description: "Designed to grow with your business needs, from startup to enterprise scale.",
      color: "purple"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      company: "TechCorp Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "This modal system has revolutionized our workflow. The professional design and smooth animations create an exceptional user experience.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager", 
      company: "Innovation Labs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "The attention to detail and professional polish makes this component library stand out from the rest. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={16}>
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          {/* Hero Section */}
          <Box textAlign="center">
            <Badge
              colorScheme="purple"
              variant="subtle"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="600"
              mb={4}
            >
              Professional Components
            </Badge>
            <Heading
              size="2xl"
              color={headingColor}
              mb={6}
              fontWeight="800"
              lineHeight="1.2"
            >
              Revolutionize Your Development
              <Text as="span" color="purple.500" display="block">
                Experience
              </Text>
            </Heading>
            <Text
              fontSize="xl"
              color={textColor}
              maxW="3xl"
              mx="auto"
              lineHeight="1.7"
              mb={8}
            >
              Our professional modal system combines cutting-edge design principles with 
              powerful functionality to deliver an unparalleled user experience. Built for 
              developers who demand excellence in every detail.
            </Text>
            <HStack spacing={4} justify="center" wrap="wrap">
              <Button
                size="lg"
                colorScheme="purple"
                leftIcon={<Icon as={FiPlay} />}
                px={8}
                py={6}
                fontSize="md"
                fontWeight="600"
                borderRadius="xl"
                _hover={{ transform: "translateY(-2px)" }}
                transition="all 0.3s"
              >
                View Live Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                colorScheme="purple"
                leftIcon={<Icon as={FiCode} />}
                px={8}
                py={6}
                fontSize="md"
                fontWeight="600"
                borderRadius="xl"
                _hover={{ transform: "translateY(-2px)" }}
                transition="all 0.3s"
              >
                View Source Code
              </Button>
            </HStack>
          </Box>

          {/* Features Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {features.map((feature, index) => (
              <Box
                key={index}
                bg={cardBg}
                shadow="lg"
                borderRadius="xl"
                _hover={{ 
                  transform: "translateY(-8px)", 
                  shadow: "2xl" 
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                border="1px solid"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                p={8}
              >
                <VStack spacing={4} align="start">
                  <Box
                    p={3}
                    bg={`${feature.color}.100`}
                    color={`${feature.color}.600`}
                    borderRadius="lg"
                  >
                    <Icon as={feature.icon} boxSize={6} />
                  </Box>
                  <Heading size="md" color={headingColor} fontWeight="700">
                    {feature.title}
                  </Heading>
                  <Text color={textColor} lineHeight="1.6">
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Statistics Section */}
          <Box bg={cardBg} shadow="xl" borderRadius="2xl" overflow="hidden">
            <Box
              bg="linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))"
              p={12}
            >
              <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
                {[
                  { value: "50K+", label: "Downloads", icon: FiTrendingUp },
                  { value: "4.9/5", label: "Rating", icon: FiStar },
                  { value: "100+", label: "Companies", icon: FiUsers },
                  { value: "99.9%", label: "Uptime", icon: FiTarget }
                ].map((stat, index) => (
                  <GridItem key={index}>
                    <VStack spacing={3} textAlign="center">
                      <Icon
                        as={stat.icon}
                        boxSize={8}
                        color="purple.500"
                      />
                      <Text
                        fontSize="3xl"
                        fontWeight="800"
                        color={headingColor}
                        lineHeight="1"
                      >
                        {stat.value}
                      </Text>
                      <Text
                        fontSize="sm"
                        color={textColor}
                        fontWeight="500"
                        textTransform="uppercase"
                        letterSpacing="wider"
                      >
                        {stat.label}
                      </Text>
                    </VStack>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          </Box>

          {/* Testimonials */}
          <Box>
            <VStack spacing={8} textAlign="center" mb={12}>
              <Heading size="xl" color={headingColor} fontWeight="700">
                Trusted by Industry Leaders
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl">
                Join thousands of developers and companies who have transformed their 
                applications with our professional component library.
              </Text>
            </VStack>
            
            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={8}>
              {testimonials.map((testimonial, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  shadow="lg"
                  borderRadius="xl"
                  _hover={{ shadow: "2xl" }}
                  transition="all 0.3s"
                  p={8}
                >
                  <VStack spacing={6} align="start">
                      <HStack spacing={2}>
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Icon key={i} as={FiStar} color="yellow.400" fill="yellow.400" />
                        ))}
                      </HStack>
                      <Text
                        color={textColor}
                        fontSize="lg"
                        lineHeight="1.7"
                        fontStyle="italic"
                      >
                        "{testimonial.content}"
                      </Text>
                      <Divider />
                      <HStack spacing={4}>
                        <Avatar
                          src={testimonial.avatar}
                          size="md"
                          border="2px solid"
                          borderColor="purple.500"
                        />
                        <Box>
                          <Text fontWeight="700" color={headingColor}>
                            {testimonial.name}
                          </Text>
                          <Text fontSize="sm" color={textColor}>
                            {testimonial.role}, {testimonial.company}
                          </Text>
                        </Box>
                      </HStack>
                    </VStack>
                </Box>
              ))}
            </Grid>
          </Box>

          {/* Team Section */}
          <Box bg={cardBg} shadow="lg" borderRadius="xl" overflow="hidden" p={12}>
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={8}
            >
                <Box flex={1}>
                  <Badge
                    colorScheme="green"
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full"
                    mb={4}
                  >
                    Professional Team
                  </Badge>
                  <Heading size="lg" color={headingColor} mb={4} fontWeight="700">
                    Built by Experts, Trusted by Professionals
                  </Heading>
                  <Text color={textColor} fontSize="lg" lineHeight="1.7" mb={6}>
                    Our dedicated team of senior developers and designers work continuously 
                    to ensure this component library meets the highest standards of quality, 
                    performance, and user experience.
                  </Text>
                  <Button
                    colorScheme="purple"
                    rightIcon={<Icon as={FiArrowRight} />}
                    size="lg"
                    borderRadius="lg"
                  >
                    Meet the Team
                  </Button>
                </Box>
                <Box>
                  <AvatarGroup size="lg" max={5}>
                    <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <Avatar src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  </AvatarGroup>
                </Box>
              </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default PageContent;