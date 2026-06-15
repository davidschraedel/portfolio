import { useState } from "react";

// import "../App.css";

import { default as BodyHome } from "./HomePage/Body";
import { default as BodyAbout } from "./AboutPage/Body";
import { default as BodyProjects } from "./ProjectsPage/Body";
import { default as BodyMusings } from "./MusingsPage/Body";
import NotFound from "./NotFound";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<BodyHome />} />
        <Route path="/about" element={<BodyAbout />} />
        <Route path="/portfolio" element={<BodyProjects />} />
        <Route path="/musings" element={<BodyMusings />} />
        <Route path="/egg" element={<BodyMusings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
