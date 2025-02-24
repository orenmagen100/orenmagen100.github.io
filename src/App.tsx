import { useEffect, useState } from 'react';
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
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className="relative bg-black pt-16 pb-32 overflow-hidden min-h-screen">
        <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${offset * 0.5}px)`,
              opacity: 0.6
            }}
        />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block mb-2">Omtensify</span>
                <span className="block text-indigo-400">Coding Solutions</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Transforming ideas into elegant, scalable solutions. Building the future of web technology, one line of code at a time.
              </p>
            </div>
          </div>
        </div>
        <div
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
            style={{
              transform: `translateY(${offset * 0.3}px)`,
            }}
        />
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
      title: "Code Architecture",
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
              className="rounded-lg shadow-lg max-h-96"
              src="https://i.imghippo.com/files/sXG2881EE.png"
              alt="Omtensify"
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
      title: "Signal Desktop",
      description: "Signal Desktop is an Electron application that links with Signal on Android or iOS",
      link: "https://github.com/orenmagen100/Signal-Desktop"
    },
    {
      title: "Next Insurance",
      description: "Tailored business insurance.",
      link: "https://www.nextinsurance.com/"
    },
    {
      title: "HoneyBook",
      description: "Client relationship platform for independent businesses",
      link: "https://www.honeybook.com/"
    },
    {
      title: "WalkMe",
      description: "Leading digital adoption platform",
      link: "https://www.walkme.com/"
    },
    {
      title: "Tikal",
      description: "Software development & consulting company",
      link: "https://www.tikal.com/"
    },
    {
      title: "Outbrain",
      description: "Outbrain connects businesses with engaged audiences",
      link: "https://www.outbrain.com/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Featured Projects I Took Part Building</h2>
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
            href="https://www.linkedin.com/in/oren-magen/"
            className="text-gray-400 hover:text-indigo-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href="https://github.com/orenmagen100"
            className="text-gray-400 hover:text-indigo-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="mailto:orenmagen100@gmail.com"
            className="text-gray-400 hover:text-indigo-600 transition duration-300"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
         <div className="mt-12 flex justify-center space-x-6">
          <img
              className="rounded-lg shadow-lg max-h-48"
              src="https://i.imghippo.com/files/quO1332cAI.png"
              alt="Omtensify Profile"
          />
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
