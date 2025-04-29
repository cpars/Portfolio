// src/pages/Projects.tsx
import { Heading, Box } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion
import PageWrapper from "../components/PageWrapper";
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";
import ProjectCard from "../components/ProjectCard";

// Motion version of Box or SimpleGrid
const MotionGrid = motion.create(Box);

import projects from "../data/projects"; // Assuming you moved your project data

const Projects = () => {
  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />

      <Box>
        <Heading as="h1" mb={6}>
          My Projects
        </Heading>

        <MotionGrid
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </MotionGrid>
      </Box>
    </PageWrapper>
  );
};

export default Projects;
