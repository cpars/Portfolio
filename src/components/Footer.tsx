// src/components/Footer.tsx
import { Box, Text, HStack, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      py={4}
      px={6}
      textAlign="center"
      bg="gray.100"
      _dark={{ bg: "gray.900" }}
    >
      <Text fontSize="sm" mb={2}>
        © {new Date().getFullYear()} Corey Parsons. All rights reserved.
      </Text>

      <HStack spacing={4} justify="center">
        {/* GitHub */}
        <Link href="https://github.com/cpars" isExternal>
          <IconButton
            icon={<FaGithub />}
            aria-label="GitHub"
            variant="ghost"
            fontSize="20px"
          />
        </Link>

        {/* LinkedIn */}
        <Link href="https://linkedin.com/in/cpars" isExternal>
          <IconButton
            icon={<FaLinkedin />}
            aria-label="LinkedIn"
            variant="ghost"
            fontSize="20px"
          />
        </Link>

        {/* Email */}
        <Link href="mailto:cparsons0730@yahoo.com.com">
          <IconButton
            icon={<FaEnvelope />}
            aria-label="Email"
            variant="ghost"
            fontSize="20px"
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;
