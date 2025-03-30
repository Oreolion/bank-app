"use client";
// import DashboardNav from "@/components/DashboardNav";
// import MobileDashBoardNav from "@/components/MobileDashBoardNav";
import { Toaster } from "@/components/ui/toaster";
// import { useState } from "react";
import React from "react";
// import styles from "@/styles/dashboardlayout.module.css";
// import Navbar from "./Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className=''>
      {/* <Navbar /> */}
      <main
        className=''
      >{children}</main>
      <Toaster/>
    </div>
  );
};

export default DashboardLayout;
