import {
  Heading,
  Text,
  Box,
  Stack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import PageWrapper from "../components/PageWrapper";
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";

const Contact = () => {
  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />
      <Box>
        <Heading as="h1" mb={4}>
          Contact Me
        </Heading>
        <Text fontSize="lg" mb={4}>
          Got a question, opportunity, or just want to say hi? Send me a
          message!
        </Text>
        <Stack spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" rows={5} />
          <Button colorScheme="teal">Send Message</Button>
        </Stack>
      </Box>
    </PageWrapper>
  );
};

export default Contact;
