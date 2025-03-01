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
        <div className="pr-6"><MainNav/></div>
       <div className="pl-2 pr-9">{children}</div>
       </ThemeProvider>
      </body>
    </html>
  );
}
