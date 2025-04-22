import { Flex, Box, HStack, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ColorModeToggle from "./ColorModeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <Box
      as="nav"
      boxShadow="md"
      py={4}
      px={6}
      bg="gray.100"
      _dark={{ bg: "gray.900" }}
    >
      <Flex align="center">
        {/* Logo / site title */}
        <Box fontWeight="bold" fontSize="xl">
          Corey Parsons
        </Box>

        <Spacer />

        <HStack spacing={4}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                padding: "8px 12px",
                borderRadius: "6px",
                fontWeight: 500,
                textDecoration: "none",
                backgroundColor: isActive ? "#319795" : "transparent", // teal.500
                color: isActive ? "white" : "inherit",
                transition: "all 0.2s ease-in-out",
              })}
              className="nav-link"
            >
              {link.name}
            </NavLink>
          ))}

          <ColorModeToggle />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
