import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Tag,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import VideoModal from "./VideoModal";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
  testLink?: string;
};

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  demoLink,
  githubLink,
  testLink,
}: ProjectCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg="white"
      _dark={{ bg: "gray.800" }}
      boxShadow="md"
    >
      {image && (
        <Image
          src={image}
          alt={`${title} screenshot`}
          mb={4}
          borderRadius="md"
        />
      )}

      <Heading size="md" mb={2}>
        {title}
      </Heading>

      <Text mb={4}>{description}</Text>

      <HStack spacing={2} mb={4} wrap="wrap">
        {tech.map((item) => (
          <Tag key={item} colorScheme="teal">
            {item}
          </Tag>
        ))}
      </HStack>

      <Stack direction="row" spacing={4}>
        {/* Demo Link (Primary) */}
        {demoLink && demoLink.includes("youtu.be") ? (
          <VideoModal
            videoUrl={demoLink.replace("watch?v=", "embed/")}
            buttonLabel="Watch Demo"
          />
        ) : (
          demoLink && (
            <Button
              as={Link}
              href={demoLink}
              isExternal
              colorScheme="teal"
              size="sm"
            >
              Live Demo
            </Button>
          )
        )}

        {/* GitHub Link */}
        {githubLink && (
          <Button
            as={Link}
            href={githubLink}
            isExternal
            variant="outline"
            size="sm"
          >
            GitHub
          </Button>
        )}

        {/* Test Link (Secondary) */}
        {testLink && testLink.includes("youtu.be") ? (
          <VideoModal
            videoUrl={testLink.replace("watch?v=", "embed/")}
            buttonLabel="Cypress Demo"
          />
        ) : (
          testLink && (
            <Button
              as={Link}
              href={testLink}
              isExternal
              variant="outline"
              size="sm"
            >
              Test Demo
            </Button>
          )
        )}
      </Stack>
    </Box>
  );
};

export default ProjectCard;
