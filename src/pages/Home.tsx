// src/pages/Home.tsx
import { Heading, Text, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        Welcome to My Portfolio
      </Heading>
      <Text fontSize="lg">
        I'm Corey Parsons, a full-stack web developer with a passion for clean
        code and creative solutions.
      </Text>
    </Box>
  );
};

export default Home;
