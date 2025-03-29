"use client";
import React, { useState, useEffect, useRef } from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await fetch("/api/db/visitors-details", {
          method: "POST",
          body: JSON.stringify({
            query:
              "INSERT INTO `contact_submissions` (name, email, phone, message, submission_time) VALUES (?, ?, ?, ?, ?)",
            values: [
              formData.name,
              formData.email,
              formData.phone,
              formData.message,
              new Date().toISOString(),
            ],
          }),
        });
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        setErrors({ submit: "Failed to submit. Please try again." });
      }
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

      <div className="pt-24 px-4 max-w-4xl mx-auto text-white">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-8">
              Contact Me
            </h2>

            {submitSuccess && (
              <div className="bg-green-500/20 text-green-300 p-4 rounded-lg mb-6 text-center">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-montserrat mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white/5 rounded-lg p-3 text-white ${
                    errors.name ? "border-red-500" : "border-transparent"
                  } border-2`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block font-montserrat mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/5 rounded-lg p-3 text-white ${
                    errors.email ? "border-red-500" : "border-transparent"
                  } border-2`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block font-montserrat mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-white/5 rounded-lg p-3 text-white ${
                    errors.phone ? "border-red-500" : "border-transparent"
                  } border-2`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block font-montserrat mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full bg-white/5 rounded-lg p-3 text-white ${
                    errors.message ? "border-red-500" : "border-transparent"
                  } border-2`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white font-montserrat py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
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
          width: 100%;
          text-align: center;
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