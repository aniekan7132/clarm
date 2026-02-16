"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#154D19] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div>
            <img
              src="/clarm-logo.svg"
              alt="clarm logo"
              className="w-17.75 h-17.75"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[#FAFAFA] hover:text-[#FFB300] font-medium"
          >
            Home
          </Link>
          <Link
            href="/what-we-do"
            className="text-[#FAFAFA] hover:text-[#FFB300] font-medium"
          >
            What We Do
          </Link>
          <Link
            href="/about"
            className="text-[#FAFAFA] hover:text-[#FFB300] font-medium"
          >
            About CLARM
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-[#FFFFFF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Home
              </Link>
              <Link
                href="/what-we-do"
                className="text-gray-700 hover:text-primary font-medium"
              >
                What We Do
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary font-medium"
              >
                About CLARM
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
