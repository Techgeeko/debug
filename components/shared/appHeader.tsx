import React, { Suspense } from "react";
import { UserButton } from "@clerk/nextjs";
import { NotificationPanel } from "./Parts/notificationBell";
import MobileNav from "./mobileNav";
import SearchBar from "./dynamic/searchBar";
import DateDisplay from "./dynamic/dateDisplay";

export default function Header() {
  return (
    <header
      className="w-full fixed top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 z-50"
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Mobile Navigation */}
        <nav aria-label="Main navigation">
          <MobileNav />
        </nav>

        {/* Search Bar */}
        <div
          className="flex-1 max-w-[600px] sm:ml-12"
          aria-label="Search functionality"
        >
          <Suspense fallback={<div className="text-sm text-gray-500">Loading search bar...</div>}>
            <SearchBar />
          </Suspense>
        </div>

        {/* Right Section: Notifications, User, Date */}
        <div className="flex items-center gap-4">
          <div aria-label="Notifications">
            <NotificationPanel />
          </div>
          <div aria-label="User profile">
            <UserButton />
          </div>
          <div aria-label="Current date">
            <Suspense fallback={<div className="text-sm text-gray-500">Loading date...</div>}>
              <DateDisplay />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
