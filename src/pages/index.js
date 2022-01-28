import React from "react";
import "../styles/global.css";
import General from "../layouts/general";
import Home from "../components/index_components/home";
import Study from "../components/index_components/study";
import About from "../components/index_components/about";
import Projects from "../components/index_components/projects";

const Index = () => {
  return (
    <General pageTitle="Jofay-zs | Home">
      <main className="h-auto min-h-screen max-w-full flex flex-col w-full px-5 sm:px-20 lg:px-32">
        <Home />
        <About />
        <Study />
        <Projects />
      </main>
    </General>
  );
};

export default Index;
