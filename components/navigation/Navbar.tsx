"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Puzzle,
  Info,
  PenLine,
  Mail,
  Activity,
  BookCopy,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileInsights = () => {
    setMobileInsightsOpen(!mobileInsightsOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-2 border-b-2 border-[#13589e] ${
        scrolled ? "bg-white shadow-md" : "bg-white bg-opacity-95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={120}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-[#13589e] hover:text-[#f9463a] flex items-center space-x-1"
            >
              <Home size={18} />
              <span>Home</span>
            </Link>

            <Link
              href="/about-us"
              className="text-[#13589e] hover:text-[#f9463a] flex items-center space-x-1"
            >
              <Info size={18} />
              <span>About Us</span>
            </Link>

            <Link
              href="/our-solutions"
              className="text-[#13589e] hover:text-[#f9463a] flex items-center space-x-1"
            >
              <Puzzle size={18} />
              <span>Solutions</span>
            </Link>

            <Link
              href="/signin"
              className="bg-[#f9463a] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
            >
              Sign In{" "}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#13589e] hover:text-[#f9463a] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute left-0 right-0 max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} className="mr-3" />
              Home
            </Link>

            <Link
              href="/about-us"
              className="text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Info size={18} className="mr-3" />
              About Us
            </Link>

            <Link
              href="/our-solutions"
              className="text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <Puzzle size={18} className="mr-3" />
              Solutions
            </Link>

            {/* Mobile insights dropdown */}
            <div className="relative">
              <button
                onClick={toggleMobileInsights}
                className="w-full text-[#13589e] hover:bg-gray-100 px-3 py-3 rounded-md text-base font-medium flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Activity size={18} className="mr-3" />
                  Insights
                </div>
                {mobileInsightsOpen ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {mobileInsightsOpen && (
                <div className="bg-gray-50 rounded-md mt-1 ml-6 border-l-2 border-[#13589e]">
                  <Link
                    href="/insights/resources"
                    className="text-[#13589e] hover:bg-gray-100 px-4 py-3 rounded-md text-base flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Activity size={16} className="mr-3" />
                    Resources
                  </Link>

                  <Link
                    href="/insights/case-studies"
                    className="text-[#13589e] hover:bg-gray-100 px-4 py-3 rounded-md text-base flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <BookCopy size={16} className="mr-3" />
                    Case Studies
                  </Link>

                  <Link
                    href="/blog"
                    className="text-[#13589e] hover:bg-gray-100 px-4 py-3 rounded-md text-base flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <PenLine size={16} className="mr-3" />
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/signin"
              className="bg-[#f9463a] text-white flex items-center justify-center px-3 py-3 rounded-md text-base font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Mail size={18} className="mr-2" />
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
