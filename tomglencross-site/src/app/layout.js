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
          {/* Default layout (mobile), turns into grid for large screens */}
          <div className="pr-6 md:grid md:grid-cols-3 md:h-screen">
            {/* Left Column: MainNav always visible on large screens */}
            <div className="md:col-span-1 md:h-screen">
              <MainNav />
            </div>

            {/* Right Column: Content takes up 2/3 on large screens */}
            <div className="pl-2 pr-9 md:col-span-2 md:pl-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}