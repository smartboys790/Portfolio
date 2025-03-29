"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => observer.disconnect();
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
                <a target="_self" href="/me" className="mobile-nav-link">
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

      <main className="pt-16">
        <div className="min-h-screen relative">
          <div
            className={`transition-all duration-1000 ease-in-out transform ${
              scrolled
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="container mx-auto px-4 py-16">
              <div
                className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-1000 ${
                  scrolled ? "md:justify-between" : "md:justify-center"
                }`}
              >
                <div
                  className={`w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#007bff] transition-all duration-1000 transform ${
                    scrolled ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src="/profile-photo.jpg"
                    alt="Shubham Gupta profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className={`text-center md:text-left transition-all duration-1000 transform ${
                    scrolled ? "translate-x-0" : "translate-x-0"
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
                    Shubham Gupta
                  </h1>
                  <p className="text-xl text-[#007bff] font-montserrat mb-4">
                    Software Engineer & Tech Enthusiast
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a
                      href="mailto:contact@shubhamgupta.dev"
                      className="contact-button"
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      Email Me
                    </a>
                    <a
                      href="https://linkedin.com/in/shubhamgupta"
                      className="contact-button"
                    >
                      <i className="fab fa-linkedin mr-2"></i>
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/shubhamgupta"
                      className="contact-button"
                    >
                      <i className="fab fa-github mr-2"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-screen relative">
              <div
                className={`transition-all duration-700 ease-in-out ${
                  scrolled
                    ? 'flex flex-col md:flex-row items-center justify-between px-8 py-4'
                    : 'h-[80vh] flex flex-col items-center justify-center'
                }`}
              >
                <div
                  className={`transition-all duration-700 ${
                    scrolled ? 'md:w-1/2 text-left' : 'text-center mb-8'
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">
                    Shubham Gupta
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-4 fade-in">
                    Computer Engineering Student
                  </p>
                  <div className="space-y-2 fade-in">
                    <p className="flex items-center gap-2">
                      <span className="text-blue-400">📧</span> shubhamg.2026@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-400">📞</span> +91 810XXXXXXX
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-400">📍</span> New Panvel, Navi Mumbai
                    </p>
                  </div>
                </div>
                <div
                  className={`relative transition-all duration-700 ${
                    scrolled
                      ? 'w-full md:w-1/3 h-[300px] md:h-[400px]'
                      : 'w-full md:w-2/3 h-[400px] md:h-[600px]'
                  }`}
                >
                  <img
                    src="profile1.png"
                    alt="Shubham Gupta"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <div
                className={`container mx-auto px-4 py-8 transition-opacity duration-700 ${
                  scrolled ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <h2 className="text-2xl font-bold mb-4">Current Roles</h2>
                    <ul className="space-y-2">
                      <li>• Sr. Technical Manager at GDG-On Campus</li>
                      <li>• Technical Head at TPC-PHCET</li>
                      <li>• Vice President of Student Council - Computer Engineering Department</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
                    <ul className="space-y-2">
                      <li>• Volunteered for National level Hackathon - HackOverflow 2.0 .</li>
                      <li>• Helped 100+ students complete Google Cloud JAM.</li>
                      <li>• Developed AI desktop assistant for disabled individuals.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-lg leading-relaxed">
                    As a third-year Computer Engineering student at the University of Mumbai,
                    I am passionate about leveraging technology to solve real-world problems.
                    With over a year of experience in Python programming, web automation, and
                    web scraping, I have developed a strong foundation in software development.
                    My journey in computer engineering has been driven by curiosity and a
                    desire to continuously learn and grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    

     <style jsx global>{`
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
      <style jsx global>{`
        .contact-button {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }
        
        .contact-button:hover {
          background-color: #007bff;
          transform: translateY(-2px);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;