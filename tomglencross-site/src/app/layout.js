"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import MainNav from "@/components/MainNav";


export default function RootLayout({ children }) {
const [isDarkMode, setIsDarkMode] = useState(null)

const toggleMode = () => {
  setIsDarkMode(prev => !prev);
}

useEffect(()=>{
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

}, [isDarkMode])

  return (
    <html lang="en">
      <body>
        <button onClick={toggleMode}>{isDarkMode? 'Light' : 'Dark'}</button>
        <div className="pr-6"><MainNav/></div>
       <div className="pl-2 pr-9">{children}</div>
      </body>
    </html>
  );
}
