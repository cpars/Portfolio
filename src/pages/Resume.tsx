// src/pages/Resume.tsx
import { Heading, Text, Box, Button } from "@chakra-ui/react";

const Resume = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        Resume
      </Heading>
      <Text fontSize="lg" mb={4}>
        Download my resume below or scroll through the highlights of my
        experience and skills.
      </Text>
      {/* Replace with actual link when your resume PDF is ready */}
      <Button
        colorScheme="teal"
        as="a"
        href="/Corey-Parsons-Resume.pdf"
        target="_blank"
      >
        Download Resume (PDF)
      </Button>
    </Box>
  );
};

export default Resume;
