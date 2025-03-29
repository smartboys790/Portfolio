"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const eventsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (eventsRef.current) {
      observer.observe(eventsRef.current);
    }

    return () => {
      if (eventsRef.current) {
        observer.unobserve(eventsRef.current);
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
            Events Attended
          </h1>
        </div>

        <div ref={eventsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`bg-white/10 rounded-xl p-6 backdrop-blur-lg transform transition-all duration-500 hover:scale-105 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative h-[200px] mb-4 overflow-hidden rounded-lg">
              <img
                src="/devfest.jpg"
                alt="Google DevFest 2024 Mumbai event space with developer presentations"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex items-center mb-4">
              <i className="fab fa-google text-3xl text-[#007bff] mr-4"></i>
              <h3 className="text-xl font-montserrat font-bold text-white">
                Google DevFest 2024 Mumbai
              </h3>
            </div>
            <p className="font-montserrat text-gray-300 mb-4">
              Participated in Google's largest developer community event,
              gaining insights into latest technologies and networking with
              industry experts.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Technical Workshops
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Networking
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Innovation
              </span>
            </div>
          </div>

          <div
            className={`bg-white/10 rounded-xl p-6 backdrop-blur-lg transform transition-all duration-500 hover:scale-105 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative h-[200px] mb-4 overflow-hidden rounded-lg">
              <img
                src="/techfest.jpg"
                alt="IIT Bombay Techfest 2024 exhibition hall showcasing technology innovations"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-microchip text-3xl text-[#007bff] mr-4"></i>
              <h3 className="text-xl font-montserrat font-bold text-white">
                Techfest 2024 - IIT Bombay
              </h3>
            </div>
            <p className="font-montserrat text-gray-300 mb-4">
              Explored cutting-edge technology exhibitions and participated in
              technical competitions at Asia's largest science and technology
              festival.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Tech Exhibition
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Competitions
              </span>
              <span className="px-3 py-1 bg-[#007bff]/20 text-[#007bff] rounded-full text-sm font-montserrat">
                Learning
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