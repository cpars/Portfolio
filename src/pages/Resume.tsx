import {
  Heading,
  Text,
  Box,
  Button,
  Stack,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import MotionModal from "../components/MotionModal";
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";
import PageWrapper from "../components/PageWrapper";

const Resume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />

      <Box>
        <Heading as="h1" mb={4}>
          Resume
        </Heading>

        <Text fontSize="lg" mb={4}>
          Download my resume below or preview it in-browser to check out my
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

          <Button variant="outline" onClick={onOpen}>
            Preview Resume
          </Button>
        </Stack>

        <MotionModal isOpen={isOpen} onClose={onClose} size="6xl">
          <ModalHeader>Resume Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>
            <iframe
              src="/Corey-Parsons-Resume.pdf"
              title="Corey Parsons Resume"
              style={{
                width: "100%",
                height: "80vh",
                border: "none",
              }}
            />
          </ModalBody>
        </MotionModal>
      </Box>
    </PageWrapper>
  );
};

export default Resume;
