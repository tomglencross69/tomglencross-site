"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import MainNav from "@/components/MainNav";
import { ThemeProvider } from "./context/ThemeContext";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* becomes grid on large screen */}
          <div className="pr-2 md:pr-6 md:grid md:grid-cols-3 md:h-screen">
            {/* mainnav always visible in one column on large screen */}
            <div className="md:col-span-1 md:h-screen">
              <MainNav />
            </div>
            {/* everything else in two columns on large screen */}
            <div className="pl-2 pr-9 md:col-span-2 md:pl-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}