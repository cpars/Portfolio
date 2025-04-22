// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import your pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
