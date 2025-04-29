// src/pages/About.tsx
import {
  Box,
  Heading,
  Text,
  Stack,
  Highlight,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import AnimatedBackground from "../components/AnimatedBackground";
import OrbitingLines from "../components/OrbitingLines";

const MotionBox = motion(Box);

const About = () => {
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <PageWrapper>
      <AnimatedBackground />
      <OrbitingLines />

      <Stack
        spacing={8}
        maxW="4xl"
        mx="auto"
        mt={12}
        px={6}
        position="relative"
        zIndex={2}
        color={textColor}
      >
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h2" size="xl" mb={6}>
            About Me
          </Heading>
          <Text fontSize="lg">
            Hey, I'm{" "}
            <Highlight query="Corey" styles={{ color: "teal.300" }}>
              Corey
            </Highlight>{" "}
            — a Georgia native raised in the metro Atlanta area and a proud
            graduate of{" "}
            <Highlight
              query="Georgia Southern University"
              styles={{ color: "teal.300" }}
            >
              Georgia Southern University
            </Highlight>
            , where I earned my degree in Computer Science.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Text fontSize="lg">
            My path to becoming a software developer has been anything but
            linear — and that’s what makes me a uniquely valuable team member.
            I've worked across a wide range of industries: from serving as a{" "}
            <Highlight query="QA Engineer" styles={{ color: "teal.300" }}>
              QA Engineer
            </Highlight>{" "}
            for a global lottery technology leader, to designing with CNC
            machines, to ecommerce operations and juvenile detention
            supervision. Each experience strengthened my creativity, leadership,
            and problem-solving skills.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Text fontSize="lg">
            My mission is simple:{" "}
            <Highlight
              query="build clean, interactive, and meaningful software"
              styles={{ color: "teal.300" }}
            >
              build clean, interactive, and meaningful software
            </Highlight>{" "}
            that makes life easier. After completing an intensive full-stack
            bootcamp, I am ready to build and learn in the ever-evolving tech
            world.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Text fontSize="lg">
            When I’m not coding, you can find me cheering for the{" "}
            <Highlight query="Georgia Bulldogs" styles={{ color: "teal.300" }}>
              Georgia Bulldogs
            </Highlight>{" "}
            and{" "}
            <Highlight query="Atlanta sports" styles={{ color: "teal.300" }}>
              Atlanta sports teams
            </Highlight>
            , spending time outdoors with my dogs, or learning something new. I
            love working with my hands, whether it's through woodworking
            projects or CNC design.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Text fontSize="lg">
            I'm excited to finally launch my career as a software developer,
            keep leveling up my skills, earn more certifications, and grow into
            the best version of myself. Thanks for stopping by — let's build
            something great together.
          </Text>
        </MotionBox>
      </Stack>
    </PageWrapper>
  );
};

export default About;
