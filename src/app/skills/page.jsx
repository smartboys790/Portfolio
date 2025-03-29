"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'Python Programming', icon: '/icons/python.png' },
    { name: 'Web Automation', icon: '/icons/web-automation.png' },
    { name: 'Software Testing', icon: '/icons/software-testing.png' },
    { name: 'Selenium Testing', icon: '/icons/selenium.png' },
    { name: 'Web Development', icon: '/icons/web-development.png' },
    { name: 'C Programming', icon: '/icons/c-programming.png' },
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'GenAI', icon: '/icons/genai.png' },
    { name: 'Prompt Engineering', icon: '/icons/prompt-engineering.png' },
    { name: 'Cyber Security', icon: '/icons/cyber-security.png' },
    { name: 'Computer Networking', icon: '/icons/computer-networking.png' },
    { name: 'System Automation', icon: '/icons/system-automation.png' },
    { name: 'Machine Learning', icon: '/icons/machine-learning.png' },
  ];

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
              <a target="_self" href="/me" className="nav-link">Home</a>
              <a href="/about" target="_self" className="nav-link">About</a>
              <a href="/projects" target="_self" className="nav-link">Projects</a>
              <a href="/skills" target="_self" className="nav-link">Skills</a>
              <a href="/events-page" target="_self" className="nav-link">Events</a>
              <a href="/certificates" target="_self" className="nav-link">Certificates</a>
              <a href="/resume" target="_self" className="nav-link">Resume</a>
              <a target="_self" href="/contact-me" className="nav-link">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/me" target="_self" className="mobile-nav-link">Home</a>
                <a href="/about" target="_self" className="mobile-nav-link">About</a>
                <a href="/projects" target="_self" className="mobile-nav-link">Projects</a>
                <a href="/skills" target="_self" className="mobile-nav-link">Skills</a>
                <a href="/events-page" target="_self" className="mobile-nav-link">Events</a>
                <a href="/certificates" target="_self" className="mobile-nav-link">Certificates</a>
                <a href="/resume" target="_self" className="mobile-nav-link">Resume</a>
                <a href="/contact-me" target="_self" className="mobile-nav-link">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-bold text-white mb-4">
            Skills & Expertise
          </h1>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white/10 rounded-xl p-6 backdrop-blur-lg transform transition-all duration-500">
              <div className="flex flex-col items-center mb-4">
                <img src={skill.icon} alt={skill.name} className="h-20 mb-4" /> {/* Adjusted height and added margin */}
                <h3 className="text-xl font-montserrat font-bold text-white text-center">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
}

export default MainComponent;
