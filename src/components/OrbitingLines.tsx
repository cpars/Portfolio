import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";

const MotionSvg = motion.svg;

const OrbitingLines = () => {
  const strokeColor = useColorModeValue(
    "rgba(0, 0, 0, 0.08)",
    "rgba(255, 255, 255, 0.08)"
  );

  const glowColor = useColorModeValue(
    "rgba(0, 150, 255, 0.15)", // Light mode
    "rgba(0, 255, 255, 0.08)" // Dark mode
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

  // Motion values for interactivity
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth them with spring physics
  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  // Combine x/y into a CSS transform string
  const motionTransform = useMotionTemplate`translate(${smoothX}px, ${smoothY}px)`;

  // Mouse move listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const offsetX = (e.clientX / window.innerWidth - 0.5) * 200; // wide range
      const offsetY = (e.clientY / window.innerHeight - 0.5) * 200;
      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Glow layer with blur and pulse */}
      <MotionSvg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={
          {
            ...sharedStyles,
            filter: "blur(12px)",
            transform: motionTransform,
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
