import { Box, Text } from "@chakra-ui/react";

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
      <Text fontSize="sm">
        © {new Date().getFullYear()} Corey Parsons. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
