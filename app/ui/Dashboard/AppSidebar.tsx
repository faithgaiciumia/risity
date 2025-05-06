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
  SidebarGroupLabel,
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
    <Sidebar>
      <SidebarHeader className="my-6 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center bg-blue-100">
          <BiCalculator className="text-green-500 text-2xl hidden" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`${poppins.className} hover:text-green-600 ${
                        currentPath === item.url ||
                        currentPath.startsWith(item.url + "/")
                          ? "text-green-600"
                          : ""
                      }`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
