import React from 'react';
import { Code2, Globe, Layout, Linkedin, Github, Mail, ExternalLink, Server } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Omtensify</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Omtensify</span>
              <span className="block text-indigo-600">Coding Solutions</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transforming ideas into elegant, scalable solutions. Building the future of web technology, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive, modern web applications with cutting-edge technologies",
      icon: Globe
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end solutions covering both frontend and backend development",
      icon: Server
    },
    {
      title: "E2E Websites",
      description: "Complete website solutions from design to deployment",
      icon: Layout
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Services</h2>
          <p className="mt-4 text-lg text-gray-500">Comprehensive development solutions for your digital needs</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              <div className="flex justify-center">
                <service.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-500 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">About Me</h2>
            <p className="mt-4 text-lg text-gray-500">
              With over a decade of experience in software development, I specialize in creating robust, scalable applications
              that solve real-world problems. My passion lies in crafting clean, efficient code and building intuitive user experiences.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              I stay current with the latest technologies and best practices, ensuring that every project benefits from cutting-edge solutions
              while maintaining stability and performance.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Developer working"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Real-time task management application with collaborative features",
      link: "#"
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to various open source projects",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Featured Projects</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-500">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  Learn more
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Get in Touch</h2>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-indigo-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-indigo-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="mailto:contact@omtensify.com"
            className="text-gray-400 hover:text-indigo-600 transition duration-300"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2024 Omtensify Coding Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;