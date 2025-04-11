'use client';
import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <img
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206"
                alt="SumItUp AI Logo"
                className="w-10 h-10 rounded-full"
              /> */}
              <span className="text-xl font-bold">SumItUp AI</span>
            </div>
            <p className="text-lg font-semibold">Summarize Smarter, Read Faster</p>
            <p className="text-gray-400">
              Leveraging cutting-edge AI technology to transform your reading experience
              with intelligent summarization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Features",
                "How It Works",
                "Pricing",
                "Blog",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-rose-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "GDPR Compliance",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-rose-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>

            {/* Contact and Social */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <MdEmail className="text-gray-400" />
                <a
                  href="mailto:contact@sumitup.ai"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  contact@sumitup.ai
                </a>
              </div>
              
            </div>

            <div className="mt-4 flex space-x-4">
              {[
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaGithub, label: "GitHub" },
                { icon: FaInstagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-gray-400 hover:text-rose-400 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {year} SumItUp AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;