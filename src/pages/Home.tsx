// src/pages/Home.tsx
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";

const Home = () => {
  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />
      <Box
        minHeight="80vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={6}
      >
        <VStack spacing={6} textAlign="center">
          <Avatar size="2xl" name="Corey Parsons" src="/images/avatar.jpg" />
          <Heading as="h1" size="2xl">
            Hey, I’m Corey 👋
          </Heading>

          <Text
            fontSize="xl"
            maxW="600px"
            color={useColorModeValue("gray.700", "gray.300")}
          >
            I'm a full-stack web developer who loves solving real-world problems
            with clean, efficient code. I specialize in building modern web apps
            using React, Node.js, and PostgreSQL.
          </Text>

          <Button as={RouterLink} to="/projects" colorScheme="teal" size="lg">
            View My Projects
          </Button>
        </VStack>
      </Box>
    </PageWrapper>
  );
};

export default Home;
