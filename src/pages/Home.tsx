import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Avatar,
  Stack,
  Image,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Custom components
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";
import PageWrapper from "../components/PageWrapper";

// Phrases for the typewriter effect
const phrases = [
  "I build interactive UIs.",
  "I solve real-world problems.",
  "I love futuristic tech.",
  "I craft sleek, scalable web apps.",
];

const MotionBox = motion(Box);

// Blinking cursor animation
const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const textColor = useColorModeValue("gray.700", "gray.300");
  const navigate = useNavigate();

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    let charIndex = 0;
    const typing = setInterval(() => {
      setDisplayText(currentPhrase.slice(0, ++charIndex));
      if (charIndex === currentPhrase.length) {
        clearInterval(typing);
        setTimeout(() => setIndex(index + 1), 2000);
      }
    }, 75);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />

      {/* Hero Section */}
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
        {/* Avatar with Glow */}
        <MotionBox
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            rotate: [0, 2, -2, 0],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          {/* Glow Ring */}
          <Box
            position="absolute"
            boxSize="240px"
            borderRadius="full"
            bg="teal.300"
            filter="blur(60px)"
            opacity={0.25}
            zIndex={0}
          />
          <Avatar
            boxSize="200px"
            name="Corey Parsons"
            src="/images/avatar.jpg"
            border="3px solid teal"
            boxShadow="0 0 30px rgba(0,255,255,0.35)"
            zIndex={1}
          />
        </MotionBox>

        {/* Hero Text */}
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
            <Box
              as="span"
              ml={1}
              fontWeight="bold"
              color="teal.300"
              animation={`${blink} 1.2s step-start infinite`}
            >
              ▍
            </Box>
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} spacing={4} mt={6}>
            <Button
              onClick={() => navigate("/projects")}
              colorScheme="teal"
              size="lg"
            >
              View Projects
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              variant="outline"
              colorScheme="teal"
              size="lg"
            >
              Contact Me
            </Button>
          </Stack>
        </MotionBox>
      </Flex>

      {/* Tech Stack Section */}
      <Heading as="h2" size="md" textAlign="center" mt={16} mb={4}>
        Tech Stack
      </Heading>

      <HStack
        spacing={6}
        justify="center"
        mt={4}
        flexWrap="wrap"
        px={6}
        mb={16}
      >
        {[
          "React",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "GraphQL",
          "PostgresSQL",
          "MongoDB",
          "Python",
          "GitHub",
        ].map((tech) => (
          <Image
            key={tech}
            src={`/tech/${tech}.svg`}
            alt={tech}
            boxSize={{ base: "50px", md: "60px" }}
            opacity={0.75}
            transition="all 0.3s ease"
            _hover={{
              opacity: 1,
              transform: "scale(1.1)",
              filter: "drop-shadow(0 0 4px teal)",
            }}
          />
        ))}
      </HStack>
    </PageWrapper>
  );
};

export default Home;
