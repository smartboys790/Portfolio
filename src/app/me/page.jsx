"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] to-[#003366]">
      <nav className="fixed w-full bg-white/10 backdrop-blur-lg shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a
                href="/me"
                target="_self"
                className="flex items-center space-x-2"
              >
                <i className="fas fa-code text-[#007bff] text-2xl"></i>
                <span className="text-xl font-montserrat font-bold text-white">
                  Shubham Gupta
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a target="_self" href="/me" className="nav-link">
                Home
              </a>
              <a href="/about" target="_self" className="nav-link">
                About
              </a>
              <a href="/projects" target="_self" className="nav-link">
                Projects
              </a>
              <a href="/skills" target="_self" className="nav-link">
                Skills
              </a>
              <a href="/events-page" target="_self" className="nav-link">
                Events
              </a>
              <a href="/certificates" target="_self" className="nav-link">
                Certificates
              </a>
              <a href="/resume" target="_self" className="nav-link">
                Resume
              </a>
              <a href="/contact-me" target="_self" className="nav-link">
                Contact
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                <i
                  className={`fas ${
                    isMenuOpen ? "fa-times" : "fa-bars"
                  } text-2xl`}
                ></i>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/me" target="_self" className="mobile-nav-link">
                  Home
                </a>
                <a href="/about" target="_self" className="mobile-nav-link">
                  About
                </a>
                <a href="/projects" target="_self" className="mobile-nav-link">
                  Projects
                </a>
                <a href="/skills" target="_self" className="mobile-nav-link">
                  Skills
                </a>
                <a
                  href="/events-page"
                  target="_self"
                  className="mobile-nav-link"
                >
                  Events
                </a>
                <a
                  href="/certificates"
                  target="_self"
                  className="mobile-nav-link"
                >
                  Certificates
                </a>
                <a href="/resume" target="_self" className="mobile-nav-link">
                  Resume
                </a>
                <a
                  href="/contact-me"
                  target="_self"
                  className="mobile-nav-link"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center sticky top-0"
      >
        <div
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 py-20"
          style={{
            opacity: 1 - scrollPosition / 500,
            transform: `translateY(${scrollPosition * 0.3}px)`,
            transition: "all 0.3s ease-out",
          }}
        >
          <div
            className="w-[300px] h-[300px] mb-8 md:mb-0 md:mr-12"
            style={{
              transform: `perspective(1000px) rotateY(${
                scrollPosition * 0.05
              }deg) translateX(${-scrollPosition * 0.5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <img
              src="https://ucarecdn.com/4d606b35-9007-4775-be89-365128cdf128/-/format/auto/"
              alt="Profile photo of a person in a black sweater with yellow accents"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <div
            className="text-center md:text-left"
            style={{
              transform: `translateX(${scrollPosition * 0.5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <h1 className="text-5xl font-montserrat font-bold text-white mb-4">
              Shubham Gupta
            </h1>
            <p className="text-xl font-montserrat text-gray-300 mb-2">
              Computer Science Engineering Student
            </p>
            <p className="font-montserrat text-gray-400">
              New Panvel, Maharashtra
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 bg-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12 text-white">
            About Me
          </h2>
          <p className="font-montserrat text-gray-300 text-lg text-center max-w-3xl mx-auto">
            As a passionate third-year Computer Engineering student at Pillai
            HOC College of Engineering And Technology, I focus on leveraging
            technology to solve real-world problems. With over a year of
            experience in Python programming, web automation, and web scraping,
            I've developed a strong foundation in software development.
            Currently serving as Sr. Technical Manager at GDG-PHCET and
            Technical Head at TPC-PHCET.
          </p>
        </div>
      </section>
      <section id="education" className="py-20 bg-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12 text-white">
            Education
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0">
              <div className="w-full md:w-1/3">
                <h3 className="font-montserrat font-bold text-xl text-white">
                  2022 - Present
                </h3>
                <p className="font-montserrat text-gray-300">
                  Bachelor of Engineering
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-montserrat font-bold text-xl text-white">
                  Pillai HOC College of Engineering And Technology
                </h3>
                <p className="font-montserrat text-gray-300 mt-2">
                  Computer Engineering
                </p>
                <div className="mt-4">
                  <h4 className="font-montserrat font-bold text-white">
                    Leadership Roles:
                  </h4>
                  <ul className="list-disc list-inside mt-2">
                    <li className="font-montserrat text-gray-300">
                      Technical Manager, GDG-PHCET
                    </li>
                    <li className="font-montserrat text-gray-300">
                      Technical Head, TPC-PHCET
                    </li>
                    <li className="font-montserrat text-gray-300">
                      Vice President, Student Council
                    </li>
                    <li className="font-montserrat text-gray-300">
                      Member, CSI-PCHCET
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-20 bg-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12 text-white">
            Projects
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full font-montserrat ${
                activeTab === "all"
                  ? "bg-[#007bff] text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("automation")}
              className={`px-4 py-2 rounded-full font-montserrat ${
                activeTab === "automation"
                  ? "bg-[#007bff] text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Automation
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-2 rounded-full font-montserrat ${
                activeTab === "web"
                  ? "bg-[#007bff] text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Web Development
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-500 hover:scale-105">
              <div className="relative h-[200px] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/arice-project.jpg"
                  alt="Voice command interface showing microphone and command suggestions"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-robot text-3xl text-[#007bff] mr-4"></i>
                <h3 className="text-xl font-montserrat font-bold text-white">
                  Arice President
                </h3>
              </div>
              <p className="font-montserrat text-gray-300 mb-4">
                Voice command project implementing advanced automation features
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                  Python
                </span>
                <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                  Voice Recognition
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-500 hover:scale-105">
              <div className="relative h-[200px] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/portfolio-project.jpg"
                  alt="Modern portfolio website design with dark theme"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-code text-3xl text-[#007bff] mr-4"></i>
                <h3 className="text-xl font-montserrat font-bold text-white">
                  Portfolio Website
                </h3>
              </div>
              <p className="font-montserrat text-gray-300 mb-4">
                Personal portfolio website built with modern web technologies
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                  React
                </span>
                <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-500 hover:scale-105">
              <div className="relative h-[200px] mb-4 overflow-hidden rounded-lg">
                <img
                  src="/automation-project.jpg"
                  alt="Web automation dashboard showing test results and metrics"
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-cogs text-3xl text-[#007bff] mr-4"></i>
                <h3 className="text-xl font-montserrat font-bold text-white">
                  Web Automation Suite
                </h3>
              </div>
              <p className="font-montserrat text-gray-300 mb-4">
                Advanced web automation toolkit with Selenium integration
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                  Selenium
                </span>
                <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                  Python
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-20 bg-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12 text-white">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <i className="fab fa-python text-4xl text-[#007bff]"></i>
              <p className="font-montserrat mt-2 text-white">Python</p>
            </div>
            <div className="text-center">
              <i className="fas fa-code text-4xl text-[#007bff]"></i>
              <p className="font-montserrat mt-2 text-white">Web Development</p>
            </div>
            <div className="text-center">
              <i className="fas fa-robot text-4xl text-[#007bff]"></i>
              <p className="font-montserrat mt-2 text-white">GenAI</p>
            </div>
            <div className="text-center">
              <i className="fas fa-cogs text-4xl text-[#007bff]"></i>
              <p className="font-montserrat mt-2 text-white">Automation</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-montserrat font-bold text-center mb-8 text-white">
              Featured Project
            </h3>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h4 className="font-montserrat font-bold text-xl mb-2 text-white">
                AI Desktop Assistant
              </h4>
              <p className="font-montserrat text-gray-300">
                Voice command project implementing advanced automation features
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-white/10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12 text-white">
            Contact Me
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <p className="font-montserrat text-white">
              📍 New Panvel, Maharashtra
            </p>
            <p className="font-montserrat text-white">
              ✉️ shubham.g2024@gmail.com
            </p>
            <a
              href="https://www.linkedin.com/in/shubham-gupta-b07599275/"
              className="text-white hover:text-[#007bff]"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </section>
      <style jsx global>{`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes rotate3D {
    from { transform: perspective(1000px) rotateY(15deg) translateX(100px); }
    to { transform: perspective(1000px) rotateY(-15deg) translateX(-100px); }
  }
  @keyframes slideApart {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
  }
  .nav-link {
    font-family: 'Montserrat', sans-serif;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #007bff;
    transform: translateY(-2px);
  }
  .mobile-nav-link {
    display: block;
    font-family: 'Montserrat', sans-serif;
    color: white;
    padding: 0.75rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }
  .mobile-nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #007bff;
  }
`}</style>
    </div>
  );
}

export default MainComponent;
