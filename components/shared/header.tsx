"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { navLinks } from "@/config/constants";

interface NavLink {
  route: string;
  label: string;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Pages where the header should be active
  const activePages = ["/"]; // Add specific paths as needed

  // Check if the current pathname is an active page
  const isActivePage = pathname && activePages.includes(pathname);

  // Render nothing if not on an active page
  if (!isActivePage) {
    return null;
  }

  return (
    <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 h-20">
        <Logo />

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-6">
              {navLinks.map((link: NavLink) => {
                const isActive = link.route === pathname;
                return (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      className={`relative text-base font-medium transition-colors duration-200 text-gray-600 ${
                        isActive ? "text-black" : ""
                      } hover:text-gray-600 hover:after:w-full after:content-[''] after:absolute after:-bottom-1 after:left-0 
                        after:h-[2px] after:bg-[#0056D2] after:w-0 after:transition-all`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link href="/sign-up" passHref>
            <Button
              variant="outline"
              className="border-2 border-black hover:bg-[#0056D2] hover:text-white transition-colors"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0056D2]"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navLinks.map((link: NavLink) => {
                  const isActive = link.route === pathname;
                  return (
                    <Link
                      key={link.route}
                      href={link.route}
                      className={`block py-2 text-base font-medium ${
                        isActive
                          ? "text-[#0056D2]"
                          : "text-gray-600 hover:text-[#0056D2]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="w-full border-2 border-black hover:bg-[#0056D2] hover:text-white transition-colors"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
