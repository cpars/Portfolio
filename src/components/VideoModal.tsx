import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

type VideoModalProps = {
  videoUrl: string; // YouTube watch URL
  buttonLabel: string;
};

const VideoModal = ({ videoUrl, buttonLabel }: VideoModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getYoutubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([^&\n?#]+)/);
    const videoId = match?.[1];
    if (!videoId) return url;

    const baseEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
    return `${baseEmbedUrl}?autoplay=1`; // ✅ Autoplay added
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen} size="sm">
        {buttonLabel}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        isCentered
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent bg="gray.900" color="white" overflow="hidden">
          <ModalCloseButton />
          <ModalBody p={0}>
            {isOpen && (
              <iframe
                width="100%"
                height="450"
                src={getYoutubeEmbedUrl(videoUrl)}
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: "none" }}
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoModal;
