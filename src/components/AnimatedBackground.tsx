import { useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Regular HTML div with motion
const MotionDiv = motion.div;

const AnimatedBackground = () => {
  const gradient = useColorModeValue(
    "linear-gradient(to right, #e6fffa, #bee3f8, #fbb6ce)",
    "linear-gradient(to right, #1a202c, #234e52, #2a4365)"
  );

  return (
    <MotionDiv
      style={
        {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          backgroundImage: gradient,
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 50%",
        } as React.CSSProperties
      }
      animate={
        {
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        } as any
      }
      transition={{
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
};

export default AnimatedBackground;
