"use client";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import DashboardNavAndSidebar from "./DashboardNavAndSidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header*/}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 backdrop-blur-md md:px-6">
        <DashboardNavAndSidebar />
      </header>
      {/* Main content */}
      <div className="flex flex-1 flex-row">
        {/* Sidebar fixed on left */}
        <aside className="hidden w-64 flex-shrink-0 border-r border-slate-800 bg-slate-950 lg:block">
          <DashboardNavAndSidebar isSidebarOnly={true} />
        </aside>
        {/* Main content takes remaining space */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;