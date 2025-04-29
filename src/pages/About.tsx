// src/pages/About.tsx
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";
import PageWrapper from "../components/PageWrapper";
import { Heading, Text, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>

        <Text fontSize="lg" mb={6}>
          Hey, I'm <strong>Corey</strong> — a Georgia native raised in the metro
          Atlanta area and a proud graduate of{" "}
          <strong>Georgia Southern University</strong>, where I earned my degree
          in Computer Science.
        </Text>

        <Text fontSize="lg" mb={6}>
          My path to becoming a software developer has been anything but linear
          — and that’s what makes me a uniquely valuable team member. I've
          worked across a wide range of industries: from serving as a{" "}
          <strong>QA Engineer</strong> for a global lottery technology leader,
          to designing with <strong>CNC machines and laser engraving</strong>,
          to working hands-on in roles like ecommerce operations and juvenile
          detention supervision. Every experience sharpened my creativity,
          critical thinking, and problem-solving skills in new ways.
        </Text>

        <Text fontSize="lg" mb={6}>
          My mission is simple:{" "}
          <strong>build clean, interactive, and meaningful software</strong>{" "}
          that makes life easier. I’ve always been drawn to technology — I just
          lacked the confidence early on to pursue it professionally. After
          completing an intensive full-stack coding bootcamp, I’m now fully
          committed to growing as a developer and embracing the ever-evolving
          world of tech.
        </Text>

        <Text fontSize="lg" mb={6}>
          When I’m not coding, I’m a diehard <strong>Georgia Bulldogs</strong>{" "}
          and <strong>Atlanta sports</strong> fan, a curious learner, and
          someone who enjoys being outdoors with my dogs. I love working with my
          hands just as much as with my keyboard — whether it’s crafting
          something out of wood or solving a complex front-end challenge.
        </Text>

        <Text fontSize="lg" mb={6}>
          I’m actively seeking a role where I can bring my passion for
          problem-solving, my attention to detail, and my drive for continuous
          learning. I’m open to opportunities in many locations and excited to
          take the next step into a full-time software development role.
        </Text>

        <Text fontSize="lg">
          Thanks for stopping by — let’s build something awesome together.
        </Text>
      </Box>
    </PageWrapper>
  );
};

export default About;
