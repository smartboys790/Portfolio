"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientY - innerHeight / 2) / 50;
      const y = (clientX - innerWidth / 2) / 50;
      setRotation({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
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
              <a target="_self" href="/contact-me" className="nav-link">
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
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <h2 className="text-3xl font-bold font-montserrat text-center mb-12 text-white">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2" ref={profileRef}>
              <div
                className="relative w-[300px] h-[300px] mx-auto perspective-[1000px]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: `rotateX(${rotation.x}deg) rotateY(${
                    rotation.y
                  }deg) scale(${isVisible ? 1 : 0.8})`,
                  transition: "all 0.8s ease-out",
                }}
              >
                <img
                  src="https://ucarecdn.com/d6a19b5a-0b67-4208-b895-5f60fbc4295f/-/format/auto/"
                  alt="Professional headshot of Shubham Gupta"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))",
                  }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h3 className="font-montserrat text-2xl font-bold text-white mb-2">
                  Shubham Gupta
                </h3>
                <p className="font-montserrat text-gray-300">
                  Computer Science Engineering Student
                </p>
                <p className="font-montserrat text-gray-300">
                  Pillai HOC College of Engineering And Technology, Rasayani
                </p>
              </div>
              <p className="font-montserrat text-gray-300">
                As a passionate third-year Computer Engineering student, I focus
                on leveraging technology to solve real-world problems. With over
                a year of experience in Python programming, web automation, and
                web scraping, I've developed a strong foundation in software
                development.
              </p>
              <div className="space-y-4">
                <h4 className="font-montserrat text-lg font-bold text-white">
                  Leadership Roles
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-users text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">
                      Technical Manager, GDG-PHCET
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-crown text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">
                      Technical Head, TPC-PHCET
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-star text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">
                      Vice President, Student Council
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-certificate text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">
                      Member, CSI-PHCET
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-montserrat text-lg font-bold text-white">
                  Technical Skills
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <i className="fab fa-python text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">
                      Python
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-code text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">
                      Web Development
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-robot text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">GenAI</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cogs text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">
                      Automation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-github text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">
                      Git/GitHub
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-video text-[#007bff] mr-2"></i>
                    <span className="font-montserrat text-gray-300">
                      Video Editing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .perspective-[1000px] {
          perspective: 1000px;
          transform-style: preserve-3d;
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