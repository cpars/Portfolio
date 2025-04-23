import { Heading, Text, Box, Button, Stack } from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";
import AnimatedBackground from "../components/AnimatedBackground";

const Resume = () => {
  return (
    <PageWrapper>
      <AnimatedBackground />
      <Box>
        <Heading as="h1" mb={4}>
          Resume
        </Heading>
        <Text fontSize="lg" mb={4}>
          Download my resume below or preview it in your browser to check out my
          experience and skills.
        </Text>

        <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
          <Button
            colorScheme="teal"
            as="a"
            href="/Corey-Parsons-Resume.pdf"
            target="_blank"
          >
            Download Resume (PDF)
          </Button>
          <Button
            variant="outline"
            as="a"
            href="/Corey-Parsons-Resume.pdf"
            target="_blank"
          >
            Preview Resume
          </Button>
        </Stack>
      </Box>
    </PageWrapper>
  );
};

export default Resume;
