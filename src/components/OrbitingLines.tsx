import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";

const MotionSvg = motion.svg;

const OrbitingLines = () => {
  const strokeColor = useColorModeValue(
    "rgba(0, 0, 0, 0.08)",
    "rgba(255, 255, 255, 0.08)"
  );

  return (
    <MotionSvg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={
        {
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        } as React.CSSProperties
      }
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={strokeColor}
        strokeWidth="0.3"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke={strokeColor}
        strokeWidth="0.3"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="20"
        stroke={strokeColor}
        strokeWidth="0.3"
        fill="none"
      />
    </MotionSvg>
  );
};

export default OrbitingLines;
