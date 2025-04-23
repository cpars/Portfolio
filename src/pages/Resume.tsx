import { Heading, Text, Box, Button } from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";

const Resume = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default Resume;
