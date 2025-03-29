"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const DownloadButton = ({ onClick, disabled, isGenerating }) => (
    <a href="https://file.io/CUmX5QH6F1cg" target="_blank">
      <button
        onClick={onClick}
        disabled={disabled}
        className="bg-[#007bff] hover:bg-[#0056b3] text-white font-montserrat font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center space-x-2 disabled:opacity-50"
      >
        {isGenerating ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            <span>Generating PDF...</span>
          </>
        ) : (
          <>
            <i className="fas fa-download"></i>
            <span>Download PDF</span>
          </>
        )}
      </button>
    </a>
  );
  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const resumeContent = document.querySelector(
        ".bg-white\\/10.backdrop-blur-lg.rounded-xl"
      );

      if (!resumeContent) {
        throw new Error("Resume content not found");
      }

      const styles = `
      body { font-family: 'Montserrat', sans-serif; }
      h1, h2, h3, h4 { color: #000000; }
      p { color: #333333; }
      .bg-white\\/5 { background-color: #f5f5f5; border-radius: 8px; padding: 16px; margin-bottom: 16px; }
      .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
      .space-y-4 > * + * { margin-top: 16px; }
      .list-disc { list-style-type: disc; padding-left: 20px; }
    `;

      const response = await fetch("/integrations/pdf-generation/pdf", {
        method: "POST",
        body: JSON.stringify({
          source: {
            html: `<!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body style="padding: 40px;">
                ${resumeContent.innerHTML}
              </body>
            </html>`,
          },
          styles: [{ content: styles }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "shubham-gupta-resume.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
    setIsGenerating(false);
  };

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        const timestamp = new Date().toISOString();

        await fetch("/api/db/visitors-details", {
          method: "POST",
          body: JSON.stringify({
            query:
              "INSERT INTO `visitor_tracking` (ip_address, visit_time, page_url) VALUES (?, ?, ?)",
            values: [data.ip, timestamp, window.location.pathname],
          }),
        });
      } catch (error) {
        console.error("Error tracking visit:", error);
      }
    };

    trackVisit();
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
        <div className="flex justify-between items-center mb-12">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-montserrat font-bold text-white mb-4">
              Resume
            </h1>
            <p className="text-gray-300 font-montserrat">
              Bachelor of Engineering: Computer Science
            </p>
            <p className="text-gray-300 font-montserrat">
              Pillai HOC College of Engineering And Technology
            </p>
          </div>
          <DownloadButton
            onClick={generatePDF}
            disabled={isGenerating}
            isGenerating={isGenerating}
          />
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-montserrat font-bold text-white">
                  Shubham Gupta
                </h2>
                <p className="text-gray-300 font-montserrat mt-2">
                  New Panvel Maharashtra | +91 81XXXXXXXX |
                  shub.ham.g.2024@gmail.com
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/shubham-gupta-b07599275/"
                  className="text-[#007bff] hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://github.com"
                  className="text-[#007bff] hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Professional Summary
              </h2>
              <div className="bg-white/5 rounded-lg p-6">
                <p className="text-gray-300 font-montserrat">
                  Passionate about leveraging technology to solve real-world
                  problems, third-year Computer Engineering student with a
                  strong foundation in software development. Over a year of
                  experience in Python programming, web automation, and web
                  scraping, honed skills and gained practical knowledge in these
                  areas.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Education
              </h2>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src="/phcet-logo.png"
                      alt="PHCET Logo"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-montserrat font-bold text-white">
                        Bachelor of Engineering
                      </h3>
                      <p className="text-gray-300 font-montserrat">
                        Pillai HOC College of Engineering And Technology
                      </p>
                      <p className="text-gray-300 font-montserrat">
                        Expected in 05/2026
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-montserrat font-bold text-white mb-2">
                      Leadership Roles:
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 font-montserrat space-y-1">
                      <li>Technical Head, TPC-PHCET, 2023 to 2025</li>
                      <li>Technical Head, GDSC-PHCET, 2023 to 2025</li>
                      <li>Member of CSI-PHCET, 2023 to 2025</li>
                      <li>Vice President of Student Council, 2023 to 2024</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Work History
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="/gdg-logo.png"
                      alt="GDG Logo"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-montserrat font-bold text-white">
                        Sr. Technical Manager
                      </h3>
                      <p className="text-gray-300 font-montserrat">
                        Google Developers Group - On Campus
                      </p>
                      <p className="text-gray-300 font-montserrat">
                        11/2023 to Current
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="/tpc-logo.png"
                      alt="TPC Logo"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-montserrat font-bold text-white">
                        Technical Head
                      </h3>
                      <p className="text-gray-300 font-montserrat">
                        Training & Placement Committee - PHCET
                      </p>
                      <p className="text-gray-300 font-montserrat">
                        10/2023 to Current
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="/phcet-logo.png"
                      alt="PHCET Logo"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-montserrat font-bold text-white">
                        Vice President of Student Council
                      </h3>
                      <p className="text-gray-300 font-montserrat">
                        Computer Engineering Department
                      </p>
                      <p className="text-gray-300 font-montserrat">
                        Pillai HOC College of Engineering and Technology -
                        Rasayani, Maharashtra
                      </p>
                      <p className="text-gray-300 font-montserrat">
                        09/2023 to 10/2024
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src="/hackoverflow-logo.png"
                      alt="HackOverflow Logo"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-montserrat font-bold text-white">
                        Volunteer
                      </h3>
                      <p className="text-gray-300 font-montserrat">
                        HackOverflow 2.0 - Rasayani, Raigad
                      </p>
                      <p className="text-gray-300 font-montserrat">
                        03/2024 to 03/2024
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-300 font-montserrat space-y-2">
                    <li>Assisted with special events and programs</li>
                    <li>
                      Supported engaging, fun, and smooth-running events by
                      helping with organization and planning
                    </li>
                    <li>
                      Used strong interpersonal communication skills to convey
                      information to others
                    </li>
                    <li>
                      Represented organization positively and professionally
                      while providing community with much-needed services
                    </li>
                    <li>
                      Mentored new volunteers, fostering a supportive and
                      inclusive team environment
                    </li>
                    <li>
                      Coordinated and managed volunteer activities for community
                      projects
                    </li>
                    <li>
                      Coordinated with different service providers to meet
                      student's individual needs
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center">
                    <img
                      src="/shivam-classes-logo.png"
                      alt="Shivam Classes Logo"
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-montserrat font-bold text-white">
                        Tutor
                      </h3>
                      <p className="text-gray-300 font-montserrat">
                        Shivam Classes - Nalasopara
                      </p>
                      <p className="text-gray-300 font-montserrat">
                        06/2020 to 02/2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Languages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-montserrat font-bold text-white mb-2">
                    English
                  </h3>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-[#007bff] h-full rounded-full w-[80%]"></div>
                  </div>
                  <p className="text-gray-300 font-montserrat mt-1">
                    Advanced (C1)
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-montserrat font-bold text-white mb-2">
                    Hindi
                  </h3>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-[#007bff] h-full rounded-full w-[95%]"></div>
                  </div>
                  <p className="text-gray-300 font-montserrat mt-1">
                    Bilingual or Proficient (C2)
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-montserrat font-bold text-white mb-2">
                    Marathi
                  </h3>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-[#007bff] h-full rounded-full w-[80%]"></div>
                  </div>
                  <p className="text-gray-300 font-montserrat mt-1">
                    Advanced (C1)
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Hobbies and Interests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-brain text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Machine Learning
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-database text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Data Science
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-layer-group text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Full-Stack Development
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-montserrat font-bold text-white">
                    Python And Flask Demonstrations
                  </h3>
                  <p className="text-gray-300 font-montserrat text-sm">
                    07/2023 | Horizon Tech
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-montserrat font-bold text-white">
                    Cyber Security: Detect and Prevent Malware
                  </h3>
                  <p className="text-gray-300 font-montserrat text-sm">
                    02/2024 | Frank Anemaet
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-montserrat font-bold text-white">
                    Linux Command Line Terminal Basic
                  </h3>
                  <p className="text-gray-300 font-montserrat text-sm">
                    08/2023 | Jaikishan Mohanty
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-montserrat font-bold text-white">
                    Batch Script Programming Crash Course
                  </h3>
                  <p className="text-gray-300 font-montserrat text-sm">
                    02/2024 | Narendra Dwivedi
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-montserrat font-bold text-white">
                    AI Assistant (JARVIS) With Python
                  </h3>
                  <p className="text-gray-300 font-montserrat text-sm">
                    08/2023 | Arbaz Khan
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Passions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-shield-alt text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Cyber Security
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-network-wired text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Computer Networking
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fab fa-python text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Python Programming
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-robot text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Web Automation
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-vial text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Selenium Testing
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-cogs text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    System Automation
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fab fa-python text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">Python</span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-code text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Web Development
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-robot text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">GenAI</span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-cogs text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Software Testing
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-tasks text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Requirements Gathering
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-project-diagram text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Project Management
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-desktop text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    OS Installation
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-users text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Team Management
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 flex items-center">
                  <i className="fas fa-video text-[#007bff] text-2xl mr-2"></i>
                  <span className="text-gray-300 font-montserrat">
                    Video Editing
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Events
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    Google DevFest 2024 Mumbai
                  </h3>
                  <p className="text-gray-300 font-montserrat">
                    Participated in Google's largest developer community event,
                    gaining insights into latest technologies and networking
                    with industry experts.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    Techfest 2024 - IIT Bombay
                  </h3>
                  <p className="text-gray-300 font-montserrat">
                    Explored cutting-edge technology exhibitions and
                    participated in technical competitions at Asia's largest
                    science and technology festival.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                Projects
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    AI Desktop Assistant
                  </h3>
                  <p className="text-gray-300 font-montserrat">
                    Voice command project implementing advanced automation
                    features to help handicapped to use desktops
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    Web Automation Suite
                  </h3>
                  <p className="text-gray-300 font-montserrat">
                    Advanced web automation toolkit with Selenium integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;