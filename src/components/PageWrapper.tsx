import { motion } from "framer-motion";
import { chakra, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

const MotionBox = chakra(motion.div);

type PageWrapperProps = {
  children: ReactNode;
  delay?: number;
} & BoxProps;

const PageWrapper = ({ children, delay = 0, ...rest }: PageWrapperProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        {
          duration: 0.5,
          delay,
          ease: "easeInOut", // optional, helps silence some type errors
        } as any
      }
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default PageWrapper;
