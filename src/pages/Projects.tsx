import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import PageWrapper from "../components/PageWrapper";
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";
import projects from "../data/projects"; // 🔥 imported here

const Projects = () => {
  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />

      <Box zIndex={1} position="relative" px={6}>
        <Heading
          as="h1"
          size="xl"
          mb={8}
          textAlign="center"
          color="teal.300"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          My Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </Box>
    </PageWrapper>
  );
};

export default Projects;
