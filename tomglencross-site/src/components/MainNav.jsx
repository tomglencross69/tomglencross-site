'use client';
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import worksData from '@/app/works/worksData'
import SideNav from "@/components/SideNav";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [expanded, setExpanded] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const router = useRouter()
  const pathname = usePathname()
  const { isDarkMode, toggleMode } = useTheme()
  const [prevPathname, setPrevPathname] = useState(null)

  const isOnDevPage = pathname === "/dev";


  useEffect(() => {
    if (prevPathname === "/dev" && pathname !== "/dev" && isDarkMode) {
      toggleMode();
    }
    setPrevPathname(pathname);
  }, [pathname]); 

  useEffect(() => {
    if (prevPathname === "/cv/dev-cv" && pathname !== "/cv/dev-cv") {
      handleItemClick("2 Dev", "/dev")
      setIsMenuOpen(true)
      toggleMode(); 
    }
    setPrevPathname(pathname);
  }, [pathname]);

  
  const toggleSubMenu = (menu) => {
    setExpanded(expanded === menu ? null: menu)
  }
  
  const worksListFunction = () => {
      return worksData.map((work)=>{
          return work.reference + " " + work.title
      })
  }

  useEffect(() => {
    if (pathname === "/") {
      setIsMenuOpen(true);
      setSelectedItem(null);
    } else if (pathname.startsWith("/works/")) {
      const work = worksData.find((work) => pathname.includes(work.urlSlug));
      setSelectedItem(work ? `${work.reference} ${work.title}` : null);
      setExpanded("Selected Works & Exhibitions");
    } else if (pathname.startsWith("/blog/")) {
      setSelectedItem("3 Blog")
    } else if (pathname === "/dev") {
      setSelectedItem("2 Dev")
    } else if (pathname === "/blog") {
      setSelectedItem("3 Blog");
    } else if (pathname === "/cv") {
      setSelectedItem("4 CV");
    } else if (pathname === "/about") {
      setSelectedItem("5 About");
    } else if (pathname === "/works") {
      setSelectedItem("1 Selected Works & Exhibitions")
    } else {
      setSelectedItem(null);
    }
  }, [pathname]);

    const handleItemClick = (item, route) => {
      if (route === pathname) return; 

      if (route === '/dev') {
        router.push(route)
        setIsMenuOpen(true) 

        if (!isDarkMode) {
        toggleMode()
      } 
      
     } else if (route === '/') {
            router.push(route)
            setSelectedItem(null);
            setIsMenuOpen(true);
            setExpanded(null)
        } else {
        router.push(route)
        setSelectedItem(item)
        const worksList = worksListFunction()
        worksList.includes(item) ? setExpanded('Selected Works & Exhibitions') : setExpanded(null)
        setIsMenuOpen(false)
        }
    }

    const handleClickedItemMenuReturn = () => {
      if (pathname.startsWith('/blog/')) {
        router.push('/blog');
      } else if (pathname === '/works') {
        router.push('/');
      } else if (pathname === '/cv') {
        router.push('/');
      }
      setIsMenuOpen(true);
    }

  return (
    <>
    <div className="flex">
        <Header onClick={() => handleItemClick(null, '/')}/>
        {!isOnDevPage && (
        <button className="text-xl ml-auto pr-2 cursor-pointer
                 dark:text-nightModeBlueCustom
                hover:text-blueCustom hover:dark:text-nightModePinkCustom 
                transition-colors duration-300"  onClick={toggleMode}> {isDarkMode? '☾ ☀' : '☀ ☾'}</button> )}
        </div>
        <SideNav handleItemClick={handleItemClick}/>
        <nav className={`text-blueCustom dark:text-nightModeBlueCustom bg-transparent text-3xl flex p-4`} >
      <ul className="space-y-0">
        {isMenuOpen && (
          <>
            <li>
              <div
                onClick={() => toggleSubMenu('Selected Works & Exhibitions')}
                className={`cursor-pointer hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300`}
              >
                <span><span className={`text-black dark:text-white`}>1</span> Selected Works & Exhibitions</span>
                <span>{expanded === 'Selected Works & Exhibitions' ? ' ↞' : ' ↡'}</span>
              </div>
              {expanded === 'Selected Works & Exhibitions' && (
  <ul className="pl-4 space-y-0">
    {worksData.map((work) => (
      <li
        key={work.id}
        onClick={() => handleItemClick(`${work.reference} ${work.title}`, `/works/${work.urlSlug}`)}
        className={`cursor-pointer ${selectedItem === `${work.reference} ${work.title}` ? `text-pinkCustom dark:nightModePinkCustom` : ''} hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300 `}
      >
        <span className={`text-black dark:text-white`}>{work.reference}</span> {work.title}
      </li>
    ))}
  </ul>
)}
            </li>
            <li>
              <div
                onClick={() => handleItemClick('2 Dev', '/dev')} 
                className={`cursor-pointer ${selectedItem === '2 Dev' ? `text-pinkCustom dark:nightModePinkCustom` : ''} hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300 `}
              >
                <span className={`text-black dark:text-white`}>2</span> Dev
              </div>
            </li>
            <li>
              <div
                onClick={() => handleItemClick('3 Blog', '/blog')}
                className={`cursor-pointer ${selectedItem === '3 Blog' ? `text-pinkCustom dark:nightModePinkCustom` : ''} hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300 `}
              >
                <span className={`text-black dark:text-white`}>3</span> Blog
              </div>
            </li>
            <li>
              <div
                onClick={() => handleItemClick('4 CV', '/cv')}
                className={`cursor-pointer ${selectedItem === '4 CV' ? `text-pinkCustom dark:nightModePinkCustom` : ''} hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300 `}
              >
                <span className={`text-black dark:text-white`}>4</span> CV
              </div>
            </li>
            <li>
              <div
                onClick={() => handleItemClick('5 About', '/about')}
                className={`cursor-pointer ${selectedItem === '5 About' ? `text-pinkCustom dark:nightModePinkCustom` : ''}hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300 `}
              >
                <span className={`text-black dark:text-white`}>5</span> About
              </div>
            </li>
          </>
        )}
        {selectedItem && !isMenuOpen && (
          <div className="text-3xl">
            <span 
            onClick={() => handleClickedItemMenuReturn()}className={`cursor-pointer text-pinkCustom dark:nightModePinkCustom`}>↞
            </span> 
            <span className={`text-black dark:text-white`}>{" " + selectedItem.split(' ')[0]}</span>
            <span className={`text-pinkCustom dark:nightModePinkCustom`}>{" " + selectedItem.split(' ').slice(1).join(' ')}</span>
          </div>
        )}
      </ul>
    </nav>
    </>
  )
}


/* to do 
-MEDIA QUERY RENDERING!!!\
-portrait images in modal not displaying properly on lg screen, is it to do with parent container settings?
-should menu disappear once selected? or remain in mobile too?
*/