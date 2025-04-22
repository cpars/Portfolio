// src/pages/Contact.tsx
import {
  Heading,
  Text,
  Box,
  Stack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>
        Contact Me
      </Heading>
      <Text fontSize="lg" mb={4}>
        Got a question, opportunity, or just want to say hi? Send me a message!
      </Text>
      <Stack spacing={4}>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" type="email" />
        <Textarea placeholder="Your Message" rows={5} />
        <Button colorScheme="teal">Send Message</Button>
      </Stack>
    </Box>
  );
};

export default Contact;
