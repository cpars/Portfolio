// src/pages/About.tsx
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";
import PageWrapper from "../components/PageWrapper";
import { Heading, Text, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />
      <Box>
        <Heading as="h1" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">
          I’m a software developer with a background in software testing and a
          passion for building web apps that make life easier. I’m currently
          leveling up with a full-stack coding bootcamp and loving every minute
          of it.
        </Text>
      </Box>
    </PageWrapper>
  );
};

export default About;
