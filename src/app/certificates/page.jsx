"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const certificatesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (certificatesRef.current) {
      observer.observe(certificatesRef.current);
    }

    return () => {
      if (certificatesRef.current) {
        observer.unobserve(certificatesRef.current);
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

      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-white mb-4">
            Certifications & Achievements
          </h1>
        </div>

        <div ref={certificatesRef} className="grid grid-cols-1 gap-8">
          <div
            className={`bg-white/10 rounded-xl p-6 backdrop-blur-lg transform transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-4">
              <i className="fas fa-award text-3xl text-[#007bff] mr-4"></i>
              <h3 className="text-xl font-montserrat font-bold text-white">
                Professional Certifications
              </h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fab fa-python text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Python And Flask Demonstrations Practice Course
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Horizon Tech | 07/28/2023
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fas fa-shield-alt text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Cyber Security: Detect and Prevent Malware
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Frank Anemaet | 02/09/2024
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fab fa-linux text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Linux Command Line Terminal Basic for Beginners
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Jaikishan Mohanty | 08/18/2023
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fas fa-terminal text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Batch Script Programming Crash Course (CMD)
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Narendra Dwivedi | 02/09/2024
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fas fa-robot text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Learn To Create AI Assistant (JARVIS) With Python
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Arbaz Khan | 08/03/2023
                </p>
              </div>
            </div>
          </div>
          <div
            className={`bg-white/10 rounded-xl p-6 backdrop-blur-lg transform transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="flex items-center mb-4">
              <i className="fas fa-trophy text-3xl text-[#007bff] mr-4"></i>
              <h3 className="text-xl font-montserrat font-bold text-white">
                Leadership Achievements
              </h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fas fa-users text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Senior Technical Manager - GDG-On Campus
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Led technical initiatives and helped fellow students
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fas fa-user-tie text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Technical Head - TPC-PHCET
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Managed technical operations and team coordination
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fas fa-users text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Vice president - Student Council
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`bg-white/10 rounded-xl p-6 backdrop-blur-lg transform transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="flex items-center mb-4">
              <i className="fas fa-certificate text-3xl text-[#007bff] mr-4"></i>
              <h3 className="text-xl font-montserrat font-bold text-white">
                Technical Accomplishments
              </h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <img
                  src="/python-cert.jpg"
                  alt="Python Programming Competition Winner certificate"
                  className="w-full h-48 object-contain mb-4 rounded-lg"
                />
                <div className="flex items-center mb-2">
                  <i className="fas fa-laptop-code text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Python Programming
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  First place in college-level programming contest
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <img
                  src="/ai-project.jpg"
                  alt="AI Project Recognition award"
                  className="w-full h-48 object-contain mb-4 rounded-lg"
                />
                <div className="flex items-center mb-2">
                  <i className="fas fa-robot text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    AI Project Recognition
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Developed award-winning AI desktop assistant
                </p>
              </div>
            </div>
          </div>

          <div
            className={`bg-white/10 rounded-xl p-6 backdrop-blur-lg transform transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <div className="flex items-center mb-4">
              <i className="fas fa-hands-helping text-3xl text-[#007bff] mr-4"></i>
              <h3 className="text-xl font-montserrat font-bold text-white">
                Community Contributions
              </h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fas fa-code text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    HackOverflow 2.0 Volunteer
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Contributed to national level hackathon success
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <i className="fab fa-google text-[#007bff] mr-2"></i>
                  <span className="font-montserrat text-white font-bold">
                    Google Cloud Study Jam Mentor
                  </span>
                </div>
                <p className="text-gray-300 font-montserrat">
                  Helped 100+ students complete certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global>{`
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
      `}</style>
    </div>
  );
}

export default MainComponent;