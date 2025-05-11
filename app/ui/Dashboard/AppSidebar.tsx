"use client";

import {
  FileText,
  LayoutDashboard,
  Settings2,
  User,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { BiCalculator } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { poppins } from "../fonts";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: FileText,
  },
  {
    title: "Clients",
    url: "/clients",
    icon: Users,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
  },
];

export function AppSidebar() {
  const currentPath = usePathname();

  return (
    <Sidebar className="bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 shadow-sm">
      {/* Logo / Brand */}
      <SidebarHeader className="my-6 flex flex-col items-center justify-center">
        <Link href="/dashboard" className="flex items-center space-x-2 hover:opacity-80 transition">
          <BiCalculator className="text-green-500 text-2xl" />
          <h1
            className={`${poppins.className} text-md md:text-xl font-semibold text-gray-800 dark:text-white`}
          >
            Risity
          </h1>
        </Link>
      </SidebarHeader>

      {/* Menu Items */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive =
                  currentPath === item.url || currentPath.startsWith(item.url + "/");

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`
                          ${poppins.className} flex items-center w-full px-3 py-2 rounded-md transition
                          ${isActive ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400" : "text-gray-700 dark:text-gray-300"}
                          hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-600 dark:hover:text-green-400
                        `}
                      >
                        <item.icon className="mr-2 h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
