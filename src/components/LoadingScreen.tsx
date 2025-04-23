import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import animationData from "../assets/loading.json";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion.create(Box);

const LoadingScreen = () => {
  return (
    <AnimatePresence>
      <MotionBox
        position="fixed"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        bg="rgba(255, 255, 255, 0.85)"
        _dark={{ bg: "rgba(0, 0, 0, 0.85)" }}
        zIndex="overlay"
        display="flex"
        alignItems="center"
        justifyContent="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Box w="200px">
          <Lottie animationData={animationData} loop autoplay />
        </Box>
      </MotionBox>
    </AnimatePresence>
  );
};

export default LoadingScreen;
