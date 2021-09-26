import Head from "next/head";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="h-[10vh]">
        <Header />
      </div>

      <div className="md:ml-40 relative ml-5 mb-10">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
