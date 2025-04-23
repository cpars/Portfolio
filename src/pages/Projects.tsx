import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import PageWrapper from "../components/PageWrapper"; // 👈 Add this
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "Weaver",
      description:
        "A collaborative story-writing platform with branching paths and social interaction.",
      tech: ["React", "GraphQL", "TypeScript", "MongoDB"],
      demoLink: "https://weaver-app.netlify.app",
      githubLink: "https://github.com/your-username/weaver",
    },
    {
      title: "Tech Quiz App",
      description:
        "An interactive MERN stack quiz app with Cypress testing and CI/CD setup.",
      tech: ["MERN", "Cypress", "CI/CD"],
      demoLink: "https://techquiz-app.render.com",
      githubLink: "https://github.com/your-username/techquiz",
    },
    // Add more projects as needed
  ];

  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />
      <Box>
        <Heading as="h1" mb={6}>
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
