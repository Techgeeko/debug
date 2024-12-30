'use client';

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { items, settingItems } from "@/config/constants";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "../ui/sheet"; // Import ShadCN Sheet
import { Menu } from "lucide-react"; // Import icons from lucide-react
import Logo from "./logo";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar visibility
  const pathname = usePathname();
  const { user } = useUser(); // Access user details from Clerk

  // Safely extract user details
  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Sidebar with ShadCN Sheet */}
      <Sheet open={isOpen} onOpenChange={toggleSidebar}>
        {/* Sheet Trigger (Hamburger Icon) */}
        <SheetTrigger className="fixed top-6 left-6 z-50 md:hidden p-4 bg-[#0056D2] text-white rounded-full">
          <Menu size={24} />
        </SheetTrigger>

        {/* Sheet Content (Sidebar) */}
        <SheetContent className="bg-white w-64 p-6">
          {/* Logo Section */}
          <div className="mb-6">
            <Logo />
          </div>

          {/* General Section */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-gray-500 uppercase">General</h4>
            <ul className="mt-4 space-y-2">
              {items.map((link) => {
                const isActive = link.url === pathname;

                return (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
                        isActive
                          ? "bg-black text-white font-bold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.title}
                        width={16}
                        height={16}
                        className={`${isActive ? "brightness-200" : ""}`}
                      />
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Configuration Section */}
          <div className="mb-8">
            <h4 className="text-sm font-medium text-gray-500 uppercase">Settings</h4>
            <ul className="mt-4 space-y-2">
              {settingItems.map((link) => {
                const isActive = link.url === pathname;

                return (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
                        isActive
                          ? "bg-black text-white font-bold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.title}
                        width={16}
                        height={16}
                        className={`${isActive ? "brightness-200" : ""}`}
                      />
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* User Profile Section */}
          <div className="mt-auto p-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              {user?.imageUrl ? (
                <Image
                  src={user.imageUrl} // Use the profile image URL from Clerk
                  alt="Profile Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div className="w-10 h-10 bg-gray-300 rounded-full" /> // Placeholder for missing image
              )}
              <div>
                <h5 className="text-sm font-medium">
                  {fullName || "User"} {/* Fallback to 'User' if fullName is not available */}
                </h5>
                <p className="text-xs text-gray-500">Pro Plan</p>
              </div>
            </div>
      </div>

          {/* Close Button (Times Icon) */}
          {/* Ensure this is the only close button being rendered */}
          <SheetClose className="absolute top-4 right-4 text-gray-600">
            {/* <X size={24} /> */}
          </SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
}
