"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { items, settingItems } from "@/config/constants/index";
import Logo from "./logo";

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  // Safely extract user details
  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim();

  return (
    <aside className="md:block lg:w-64 h-screen flex flex-col justify-between bg-white border-r border-gray-200">
      {/* Top Section */}
      <div>
        {/* Logo Section */}
        <div className="px-4 flex items-center justify-center border-b border-gray-200">
          {/* Reduced padding and centered */}
          <Logo />
        </div>

        {/* General Section */}
        <div className="px-4">
          <h4 className="text-sm font-medium text-gray-500 uppercase mt-6">General</h4>
          <ul className="mt-4 space-y-2">
            {items.map((item) => {
              const isActive = item.url === pathname;

              return (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
                      isActive
                        ? "bg-black text-white font-bold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={16}
                      height={16}
                      className={`${isActive ? "brightness-200" : "brightness-100"}`}
                    />
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Settings Section */}
        <div className="px-4 mt-8">
          <h4 className="text-sm font-medium text-gray-500 uppercase">Settings</h4>
          <ul className="mt-4 space-y-2">
            {settingItems.map((setting) => {
              const isActive = pathname === setting.url;

              return (
                <li key={setting.title}>
                  <Link
                    href={setting.url}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
                      isActive
                        ? "bg-black text-white font-bold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Image
                      src={setting.icon}
                      alt={setting.title}
                      width={16}
                      height={16}
                      className={`${isActive ? "brightness-200" : "brightness-100"}`}
                    />
                    {setting.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="mt-auto px-4 py-6 border-t border-gray-200">
        <div className="flex items-center gap-3">
          {/* Profile Avatar Placeholder */}
          {/* {user?.imageUrl ? (
            <Image
              src={user.imageUrl}
              alt="Profile Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
          )} */}
          <div>
            <h5 className="text-sm font-medium">{fullName || "User"}</h5>
            <p className="text-xs text-gray-500">Pro Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
