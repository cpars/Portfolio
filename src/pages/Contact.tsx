// src/pages/Contact.tsx
import {
  Heading,
  Text,
  Box,
  Stack,
  Input,
  Textarea,
  Button,
  useToast,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  const formEndpoint = "https://formspree.io/f/movdjlby"; // 🔁 Replace with your actual Formspree endpoint

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "I'll get back to you soon 👋",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />

      <Box position="relative" zIndex={1} maxW="3xl" mx="auto" mt={12} px={6}>
        <Heading as="h1" mb={4} color="teal.300">
          Contact Me
        </Heading>
        <Text fontSize="lg" mb={8}>
          Got a question, collaboration, or just want to say hi? I’d love to
          hear from you!
        </Text>

        <Box as="form" onSubmit={handleSubmit}>
          <Stack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                rows={6}
                placeholder="What would you like to say?"
                value={formData.message}
                onChange={handleChange}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              isLoading={submitting}
              loadingText="Sending"
              size="lg"
              w="fit-content"
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Contact;
