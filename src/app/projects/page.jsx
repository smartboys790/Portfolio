"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
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

      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-gray-300 font-montserrat">
            Showcasing my technical expertise and creativity
          </p>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-500 hover:scale-105 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
                AI Desktop Assistant
              </h3>
            </div>
            <p className="font-montserrat text-gray-300 mb-4">
              Voice command project implementing advanced automation features to
              help handicapped users control their computers through speech.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Python
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Speech Recognition
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                AI
              </span>
            </div>
          </div>

          <div
            className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-500 hover:scale-105 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
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
              Comprehensive web automation toolkit with Selenium integration for
              efficient testing and process automation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Selenium
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Python
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Testing
              </span>
            </div>
          </div>

          <div
            className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-500 hover:scale-105 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
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
              showcasing projects and skills.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                React
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
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