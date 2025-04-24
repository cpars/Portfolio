import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalProps,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type MotionModalProps = ModalProps & {
  children: ReactNode;
};

const MotionDiv = motion(ModalContent);

const MotionModal = ({
  isOpen,
  onClose,
  children,
  ...props
}: MotionModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered {...props}>
          <ModalOverlay />
          <MotionDiv
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" } as React.CSSProperties}
          >
            {children}
          </MotionDiv>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default MotionModal;
