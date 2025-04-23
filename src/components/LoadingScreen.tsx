// src/components/LoadingScreen.tsx
import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import animationData from "../assets/loading.json";

const LoadingScreen = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      bg="rgba(255, 255, 255, 0.8)"
      _dark={{ bg: "rgba(0, 0, 0, 0.8)" }}
      zIndex="overlay"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="200px">
        <Lottie animationData={animationData} loop autoplay />
      </Box>
    </Box>
  );
};

export default LoadingScreen;
