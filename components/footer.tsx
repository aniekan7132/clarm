"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* I just added this part */}
          <div>
            <div className="flex flex-col items-start gap-3 mb-4">
              <div className="flex items-center justify-center mt-1">
                {/* <span className="text-sm font-bold">C</span> */}
                <img
                  src="/clarm-logo.svg"
                  alt="Mobilization - grassroots political movement"
                  className="w-17.75 h-17.75"
                />
              </div>

              <div>
                <p className="text-sm text-white/90">
                  A youth-driven coalition transforming Nigeria's National and
                  State Assemblies through peaceful democratic participation.
                </p>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>

            <div className="space-y-4 text-sm text-white/80">
              <Link href="/" className="block hover:text-[#FFB300]">
                Home
              </Link>
              <Link href="/what-we-do" className="block hover:text-[#FFB300]">
                What We Do
              </Link>
              <Link href="/about" className="block hover:text-[#FFB300]">
                About CLARM
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-2">
                <img src="/email.svg" alt="email" />
                <a
                  href="mailto:info@clarminitiative.org"
                  className="hover:text-[#FFB300]"
                >
                  info@clarminitiative.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src="/phone.svg" alt="phone" />
                <a href="tel:+2348005566827" className="hover:text-[#FFB300]">
                  +234 800 CLARM 27
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src="/location.svg" alt="location" />
                <span className="hover:text-[#FFB300]">Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-white/80 mb-4">
              Subscribe to our newsletter for updates on the movement.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button
                type="submit"
                className="bg-[#FFB300] hover:bg-accent/90 text-[#1B5E20] font-semibold cursor-pointer"
              >
                {subscribed ? "✓ Subscribed!" : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            © 2025 CLARM Initiative. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              className="text-white/70 hover:text-white"
            >
              <img src="/facebook.svg" alt="facebook" className="w-10 h-10" />
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              <img src="/x.svg" alt="x" className="w-10 h-10" />
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              <img src="instagram.svg" alt="instagram" className="w-10 h-10" />
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              <img src="linkedin.svg" alt="linkedin" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
