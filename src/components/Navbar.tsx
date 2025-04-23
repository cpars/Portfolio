import {
  Flex,
  Box,
  HStack,
  Spacer,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useDelayedNavigation } from "../hooks/useDelayedNavigation";
import ColorModeToggle from "./ColorModeToggle";

// Props to receive the setLoading function from App
type NavbarProps = {
  setLoading: (val: boolean) => void;
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ setLoading }: NavbarProps) => {
  const location = useLocation();
  const delayedNavigate = useDelayedNavigation(setLoading);

  // Function to determine active link style
  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      as="nav"
      boxShadow="md"
      py={4}
      px={6}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex align="center">
        {/* Site name or logo */}
        <Box fontWeight="bold" fontSize="xl">
          Corey Parsons
        </Box>

        <Spacer />

        <HStack spacing={4}>
          {navLinks.map((link) => (
            <Button
              key={link.name}
              onClick={() => delayedNavigate(link.path)}
              variant={isActive(link.path) ? "solid" : "ghost"}
              colorScheme={isActive(link.path) ? "teal" : undefined}
              size="sm"
              px={3}
            >
              {link.name}
            </Button>
          ))}

          <ColorModeToggle />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
