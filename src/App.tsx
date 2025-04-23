// src/App.tsx
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

// Import your pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate loading delay
    return () => clearTimeout(timer);
    // This cleanup function ensures the timer is cleared if the component unmounts or updates before the timer completes
  }, [location.pathname, location.search, location.hash, location.state]);

  return (
    <>
      {loading && <LoadingScreen />}
      {/* Main Layout */}
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar />

        {/* Main Content */}
        <Container maxW="container.lg" flex="1" py={8}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Container>

        <Footer />
      </Box>
    </>
  );
}

export default App;
