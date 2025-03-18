"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DOMPurify from 'dompurify'
import { useTheme } from "@/app/context/ThemeContext";

export default function Dev() {
  const router = useRouter();
  const [text, setText] = useState("");
  const fullText = "2 <dev><dev><dev><dev><dev><dev><dev><dev><dev><dev><dev><dev><dev>";
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const defaultBgColor = "#000000";
  const defaultTextColor = "#86efac";

  const [bgColor, setBgColor] = useState(defaultBgColor);
  const [textColor, setTextColor] = useState(defaultTextColor);
  const [colourChange, setColourChange] = useState(false)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 200);

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
    document.body.classList.add("dev-mode");
    document.body.style.overflowX = "hidden";
    setTimeout(() => setFadeIn(true), 50);
    return () => {
      document.body.classList.remove("dev-mode");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.overflowX = ""
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor || defaultBgColor;
    document.body.style.color = textColor || defaultTextColor;
  }, [bgColor, textColor]);

  const resetColors = () => {
    setBgColor(defaultBgColor);
    setTextColor(defaultTextColor);
    setColourChange(false)
  };

  const handleHexChange = (e, setter) => {
    let value = e.target.textContent.trim();
    setter(DOMPurify.sanitize(value));
    setColourChange(true)
  };

  const limitInputLength = (e) => {
    if (e.target.textContent.length >= 7) {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`font-mono transition-opacity duration-[1000ms]  ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="overflow-visible whitespace-nowrap">
      <h1 className="text-4xl md:text-5 inline-block">
        <a
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          ↞{" "}
        </a>
        {text}
        <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
          ▮
        </span>
      </h1>
      </div>
      <p className="py-4 text-2xl md:text-3xl">Projects</p>
      <div className="opacity-90 text-xl md:text-2xl">NOCTURNE</div>
      <pre className="text-center text-[8px] md:text-[12px] py-4 cursor-pointer hover:text-pinkCustom transition-colors duration-1000">
        <a href="https://nocturne-journal.netlify.app"
          target="_blank" > 
          {`N   N  OOO   CCCC  TTTTT  U   U  RRRR   N   N  EEEEE
 NN  N O   O C        T    U   U  R   R  NN  N  E    
 N N N O   O C        T    U   U  RRRR   N N N  EEEE 
 N  NN O   O C        T    U   U  R  R   N  NN  E    
 N   N  OOO   CCCC    T     UUU   R   R  N   N  EEEEE`}
</a>   

</pre>
      <div className="md:text-xl">
        <a
          className="md:text-xl font-bold cursor-pointer hover:text-pinkCustom hover:underline transition-colors duration-1000"
          href="https://nocturne-journal.netlify.app"
          target="_blank"
        >
          nocturne-journal.netlify.app
        </a>
        <p>
          Nocturne is a playful way for users to interpret, remember and analyse
          their dreams with responsive and reactive visual and textual feedback
          provided by two custom-trained AI models.
        </p>
        <p>- Full-stack web application built with React</p>
        <p>
          - Database and user account authentication in Firestore/Firebase
        </p>
        <p>- Deployed with Netlify</p>
        <p>- MotionFramer and tsParticles for dynamic visuals</p>
        <p>- Open-source LLMs hosted on Hugging Face</p>
        <p>
          - App demo and tech-stack can be viewed {""}
          <a
            className="underline cursor-pointer hover:text-pinkCustom hover:underline transition-colors duration-1000"
            href="https://www.youtube.com/watch?v=eZsLUtNKPNk"
            target="_blank"
          >here
          </a>
        </p>
        <p>
          - GitHub {""}
          <a
            className="underline cursor-pointer hover:text-pinkCustom hover:underline transition-colors duration-1000"
            href="https://github.com/MGough22/dream-team"
            target="_blank"
          >
            here
          </a>
        </p>
      </div>
      <div className="md:text-2xl pt-4 text-center">
        +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      </div>
      <div className="opacity-90 md:text-2xl text-xl pt-4">TOMGLENCROSS.COM</div>
      <pre className="text-[5px] md:text-[8px] text-center py-4 cursor-pointer hover:text-pinkCustom transition-colors duration-1000">
        <a href="https:/tomglencross.com"
          target="_blank">{`  TTTTT  OOO  M   M  GGGG  L      EEEEE  N   N  CCCC  RRRR   OOO  SSSS  SSSS  .  CCCC  OOO  M   M
   T   O   O MM MM G      L      E      NN  N C      R   R O   O S      S    .  C     O   O MM MM
   T   O   O M M M G  GG  L      EEEE   N N N C      RRRR  O   O  SSS   SSS  .  C     O   O M M M
   T   O   O M   M G   G L      E      N  NN C      R  R  O   O     S      S .  C     O   O M   M
   T    OOO  M   M  GGGG  LLLLL  EEEEE  N   N  CCCC  R   R  OOO  SSSS  SSSS  .  CCCC  OOO  M   M
`}</a>
</pre>
      <div className="pb-10 md:text-xl">
        <a
          className="font-bold cursor-pointer hover:text-pinkCustom  hover:underline transition-colors duration-1000"
          href="https:/tomglencross.com"
          target="_blank"
        >
          tomglencross.com
        </a>
        <p>
          You're surfin' it right now buddy. A full-stack personal website
          project to host portfolio, projects, blog, artworks.
        </p>
        <p>
          - Full-stack project built with Next.js & React using RESTful API
          principles
        </p>
        <p>
          - UI/UX designed following WCAG 3.0 accessibility, & low-energy
          guidelines
        </p>
        <p>
          - Custom Admin Dashboard CMS with js-cookie login-auth, blogpost and
          comment approval/deletion
        </p>
        <p>- react-quill custom wysiwyg blogpost dashboard with live preview</p>
        <p>- Database built in PostgreSQL</p>
        <p>
          - TailwindCSS for dynamic inline styling and custom night-mode and
          dev-themes
        </p>
        <p>
          - Project plan and progress including wireframes, component tree etc., {""}
          <a
            className="underline cursor-pointer hover:text-pinkCustom hover:text-lg hover:underline transition-colors duration-1000"
            href="https://www.figma.com/board/QLJFEnQSkpcz5B7RYu9ETN/tomglencross.com-project-board?node-id=0-1&p=f&t=lP7eonXJilk17Gzc-0"
            target="_blank"
          >
            here
          </a>
        </p>
        <p>
          - GitHub {""}
          <a
            className="underline cursor-pointer hover:text-pinkCustom hover:text-lg hover:underline transition-colors duration-1000"
            href="https://github.com/tomglencross69/tomglencross-site"
            target="_blank"
          >
            here
          </a>
        </p>
      </div>

     
      <div className="p-4 border rounded-lg md:text-xl" style={{ borderColor: textColor }}>
        <div>
          body {`{`}&nbsp;&nbsp;background-color:
          <span
            onBeforeInput={limitInputLength}
            contentEditable
            suppressContentEditableWarning
            className="px-1 cursor-text border border-dashed rounded"
            style={{ borderColor: textColor }}
            onBlur={(e) => handleHexChange(e, setBgColor)}
          >
            {bgColor}
          </span>
          ; &nbsp;&nbsp;color:
          <span
            onBeforeInput={limitInputLength}
            contentEditable
            suppressContentEditableWarning
            className="px-1 cursor-text border border-dashed rounded"
            style={{ borderColor: textColor }}
            onBlur={(e) => handleHexChange(e, setTextColor)}
          >
            {textColor}
          </span>
          ; {`}`}
        </div>

        <button
          className="mt-4 px-3 py-1 border rounded hover:opacity-70"
          style={{
            color: colourChange ? bgColor : textColor,
            borderColor: colourChange ? bgColor : textColor,
            filter: colourChange ? "invert(1)" : "none",
          }}
          onClick={resetColors}
        >
          reset
        </button>
      </div>
    </div>
  );
}
