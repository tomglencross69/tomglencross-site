'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dev() {
  const router = useRouter()
  const [text, setText] = useState('');
  const fullText = '2 Dev';
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [fadeIn, setFadeIn] = useState(false); 


  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [index]); 

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    document.body.classList.add('dev-mode');
    setTimeout(() => setFadeIn(true), 50);
    return () => {
      document.body.classList.remove('dev-mode');
    };
  }, []);


  return (
    <div 
      className={`min-h-screen font-mono transition-opacity duration-[1000ms] ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
    >
      <h1 className="text-4xl font-bold text-green-400">
      <a className="cursor-pointer" onClick={() => {router.push("/")}}>↞ </a> 
      {text}
      <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
      </h1>
      <p className="mt-4 text-lg opacity-80 text-green-300">Welcome to my dev page.</p>
    </div>
  );
};
