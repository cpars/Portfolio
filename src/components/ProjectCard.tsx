// src/components/ProjectCard.tsx
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

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
};

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  demoLink,
  githubLink,
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
      {/* Optional image */}
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

      {/* Tech stack tags */}
      <HStack spacing={2} mb={4} wrap="wrap">
        {tech.map((item) => (
          <Tag key={item} colorScheme="teal">
            {item}
          </Tag>
        ))}
      </HStack>

      {/* Action buttons */}
      <Stack direction="row" spacing={4}>
        {demoLink && (
          <Button
            as={Link}
            href={demoLink}
            isExternal
            colorScheme="teal"
            size="sm"
          >
            Live Demo
          </Button>
        )}
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
      </Stack>
    </Box>
  );
};

export default ProjectCard;
