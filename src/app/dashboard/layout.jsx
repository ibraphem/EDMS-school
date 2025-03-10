"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Search, ChevronDown, ChevronLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFilesSidebarOpen, setIsFilesSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: "Workbench", href: "/dashboard" },
    { label: "Requests", href: "/dashboard/requests" },
    { label: "Files", href: "/dashboard/files" },
    { label: "User Management", href: "/dashboard/user-management" },
  ];

  const filesMenuItems = [
    {
      category: "Personal",
      items: ["All", "My Drive"],
    },
    {
      category: "Restricted",
      items: ["Document", "Administrative", "Files", "Archive"],
    },
    {
      category: "Other",
      items: ["Restricted", "Recent", "Shared", "People"],
    },
  ];

  useEffect(() => {
    if (pathname?.startsWith("/dashboard/files")) {
      setIsFilesSidebarOpen(true);
    } else {
      setIsFilesSidebarOpen(false);
    }
  }, [pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Main Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } text-white bg-primary border-r fixed inset-0 items-center transition-all duration-300 ease-in-out`}
      >
        <div className="h-full relative text-white py-8">
          <Image
            src="/auth-side.png"
            fill
            alt="auth bg"
            className="object-fill"
          />
          {/* Logo */}
          <Image
            src="/logo.png"
            width={70}
            height={70}
            alt="logo"
            className="relative z-1 ml-6"
          />

          <div className="relative z-1 mt-20">
            {/* Menu Items */}
            {menuItems.map(({ label, href }, index) => (
              <Link
                key={index}
                href={href}
                className="w-full flex items-center space-x-4 px-4 py-2 hover:bg-gray-100 hover:text-primary rounded-md"
              >
                {isSidebarOpen && <span className="text-sm">{label}</span>}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* Nested Sidebar for Files */}
      {isFilesSidebarOpen && (
        <aside className="w-64  bg-white border-r fixed inset-0 left-64 items-center transition-all duration-300 ease-in-out">
          <div className="h-full relative py-8">
            {/* Close Button */}

            <div className="absolute top-10 left-[-20px] shadow-2xl flex bg-white rounded-full cursor-pointer items-center justify-center p-2">
              <button
                onClick={() => setIsFilesSidebarOpen(false)}
                className=" bg-white rounded-full border border-primary text-primary p-0.5  text-xs  transition"
              >
                <ChevronLeft size={16} />
              </button>
            </div>

            <div className="mt-4 ml-8 ">
              <h3 className="font-bold mb-4">Files</h3>
              {filesMenuItems.map(({ category, items }, index) => (
                <div key={index}>
                  {/* Category Title */}
                  <h3 className="text-xs font-semibold uppercase px-4 mt-4 text-gray-400">
                    {category}
                  </h3>

                  {/* Category Items */}
                  {items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/dashboard/files/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="w-full flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md"
                    >
                      <span className="text-sm">{item}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <div
        className={`flex flex-col flex-1 ${
          isFilesSidebarOpen ? "ml-[500px]" : "ml-[250px]"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Header */}
        <header className="bg-white h-16 px-8 flex items-center justify-between">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search for anything"
              className={`${
                isFilesSidebarOpen ? "w-[380px]" : "w-[250px]"
              } pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5 text-gray-600" />
            </Button>

            {/* User Avatar */}
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="User avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ChevronDown className="cursor-pointer text-input ml-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
