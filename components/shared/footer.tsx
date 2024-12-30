"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./footerlogo";
import BackToTop from "./backTop";

export default function Footer() {
  const pathname = usePathname();

  // Pages where the footer should be active
  const activePages = ["/"]; // Add specific paths as needed

  // Check if the current pathname is an active page
  const isActivePage = pathname && activePages.includes(pathname);

  // Render nothing if not on an active page
  if (!isActivePage) {
    return null;
  }

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <Logo />
            <p className="text-gray-400 pt-5 leading-relaxed">
              Create, Track, and Send Quotes in minutes
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "#blog", label: "Blog" },
                { href: "#pricing", label: "Pricing" },
                { href: "#testimonial", label: "Testimonials" },
                { href: "#faqs", label: "FAQs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 leading-relaxed">
              hello@quickquote.com
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Quick Quote. All rights reserved.
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
