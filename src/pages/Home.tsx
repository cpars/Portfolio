import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Avatar,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Custom animation and layout components
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";
import PageWrapper from "../components/PageWrapper";

// Typewriter text options
const phrases = [
  "I build interactive UIs.",
  "I solve real-world problems.",
  "I love futuristic tech.",
  "I craft sleek, scalable web apps.",
];

const MotionBox = motion(Box);

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typing effect logic
  useEffect(() => {
    let currentPhrase = phrases[index % phrases.length];
    let charIndex = 0;
    let typing = setInterval(() => {
      setDisplayText(currentPhrase.slice(0, ++charIndex));
      if (charIndex === currentPhrase.length) {
        clearInterval(typing);
        setTimeout(() => setIndex(index + 1), 2000); // delay before switching phrases
      }
    }, 75);

    return () => clearInterval(typing);
  }, [index]);

  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />

      <Flex
        minH="80vh"
        px={8}
        py={16}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={12}
        position="relative"
        zIndex={1}
      >
        {/* Avatar with glow */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          display="flex"
          justifyContent="center"
        >
          <Avatar
            size="2xl"
            name="Corey Parsons"
            src="/images/avatar.jpg"
            boxShadow="0 0 25px rgba(0,255,255,0.35)"
            border="2px solid teal"
          />
        </MotionBox>

        {/* Hero text */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          maxW="600px"
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize="md" color="teal.400" mb={2}>
            Full-Stack Developer • Technologist • Problem Solver
          </Text>

          <Heading as="h1" size="2xl" mb={4}>
            Hey, I’m Corey 👋
          </Heading>

          <Text fontSize="xl" mb={4} color={textColor} minH="32px">
            {displayText}
            <Box as="span" ml={1} color="teal.300" fontWeight="bold">
              |
            </Box>
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} spacing={4} mt={6}>
            <Button as={RouterLink} to="/projects" colorScheme="teal" size="lg">
              View Projects
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              variant="outline"
              colorScheme="teal"
              size="lg"
            >
              Contact Me
            </Button>
          </Stack>
        </MotionBox>
      </Flex>
    </PageWrapper>
  );
};

export default Home;
