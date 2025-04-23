import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false); // Controls the loader

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      {/* Always show navbar */}
      <Navbar setLoading={setLoading} />

      {/* Main content container */}
      <Container maxW="container.lg" flex="1" py={8}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>

      <Footer />

      {/* Loader is always mounted and animates in/out on top */}
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
    </Box>
  );
}

export default App;
