import { motion } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";

const MotionSvg = motion.svg;

const OrbitingLines = () => {
  const strokeColor = useColorModeValue(
    "rgba(0, 0, 0, 0.08)",
    "rgba(255, 255, 255, 0.08)"
  );

  const glowColor = useColorModeValue(
    "rgba(0, 150, 255, 0.15)", // light mode glow (blueish)
    "rgba(0, 255, 255, 0.08)" // dark mode glow (cyan-ish)
  );

  const sharedStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
  } as React.CSSProperties;

  return (
    <>
      {/* Blurred glow layer */}
      <MotionSvg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={
          {
            ...sharedStyles,
            filter: "blur(12px)",
          } as React.CSSProperties
        }
        initial={{ rotate: 0, opacity: 0.5 }}
        animate={{
          rotate: 360,
          opacity: [0.1, 0.6, 0.1],
        }}
        transition={{
          rotate: {
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke={glowColor}
          strokeWidth="0.6"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke={glowColor}
          strokeWidth="0.6"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke={glowColor}
          strokeWidth="0.6"
          fill="none"
        />
      </MotionSvg>

      {/* Crisp rings on top */}
      <MotionSvg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={sharedStyles}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
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
    </>
  );
};

export default OrbitingLines;
