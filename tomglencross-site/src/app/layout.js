"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import MainNav from "@/components/MainNav";


export default function RootLayout({ children }) {
const [isDarkMode, setIsDarkMode] = useState(null)

useEffect(() => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    setIsDarkMode(true);
  } else {
    setIsDarkMode(false);
  }
}, [])

const toggleMode = () => {
  setIsDarkMode(prev => !prev);
}

useEffect(()=>{
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled')
}, [isDarkMode])

  return (
    <html lang="en">
      <body>
        {/* <button onClick={toggleMode}>{isDarkMode? 'Light' : 'Dark'}</button> */}
        <div className="pr-6"><MainNav isDarkMode={isDarkMode} toggleMode={toggleMode}/></div>
       <div className="pl-2 pr-9">{children}</div>
      </body>
    </html>
  );
}
