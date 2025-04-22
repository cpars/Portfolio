// src/pages/Projects.tsx
import { Heading, Text, Box } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        Projects
      </Heading>
      <Text fontSize="lg">
        Here are some of my favorite projects that showcase my skills in React,
        Node.js, PostgreSQL, and more.
      </Text>
      {/* Later we'll add ProjectCards here */}
    </Box>
  );
};

export default Projects;
