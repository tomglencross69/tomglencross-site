"use client";

import "./globals.css";
import Head from "next/head";
import MainNav from "@/components/MainNav";
import { ThemeProvider } from "./context/ThemeContext";


export default function RootLayout({ children }) {
  return (
    <>
    <title>TOMGLENCROSS.COM</title> 
    <link rel="icon" href="/favicon.png" />
    <html lang="en">
      <head>
      <meta
                property="og:description"
                content="✿ welcome to tomglencross.com - for portfolio, blog, projects, and more ... ✿"
              />
              <meta
                property="og:image"
                content="https://www.tomglencross.com/images/link.jpg" // Replace with your image URL
              />
              <meta property="og:url" content="https://tomglencross.com" />
              <meta property="og:type" content="website" />
      </head>
      <body>
        <ThemeProvider>
          {/* becomes grid on large screen */}
          <div className="pr-2 md:pr-6 md:grid md:grid-cols-3 md:h-screen">
            {/* mainnav always visible in one column on large screen */}
            <div className="md:col-span-1 md:h-screen md:h-[100%] md:border-r">
              <MainNav />
            </div>
            {/* everything else in two columns on large screen */}
            <div className="pl-2 pr-9 md:col-span-2 md:pl-10 ">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
    </>
  );
}