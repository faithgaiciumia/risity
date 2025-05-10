"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../ui/Dashboard/AppSidebar";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  // logic to exclude new and public routes from sidebar
  const pathName = usePathname();
  const hideSidebar =
    pathName === "/invoices/new" || pathName === "/invoices/public";

  return (
    <SidebarProvider>
      {!hideSidebar && <AppSidebar />}
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
