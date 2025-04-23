// src/pages/Resume.tsx
import {
  Heading,
  Text,
  Box,
  Button,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const Resume = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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

      {/* Modal for in-site PDF preview */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent maxW="90vw" h="90vh">
          <ModalHeader>Resume Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>
            <iframe
              src="/Corey-Parsons-Resume.pdf"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              title="Corey Parsons Resume Preview"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Resume;
