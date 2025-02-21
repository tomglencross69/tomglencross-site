'use client';
import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import fakeWorksData from "@/testdata/testWorksData";
import SideNav from "@/components/SideNav";

export default function MainNav({toggleMode, isDarkMode}) {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [expanded, setExpanded] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const router = useRouter()
  const pathname = usePathname()
  
  const toggleSubMenu = (menu) => {
    setExpanded(expanded === menu ? null: menu)
  }
  
  const worksListFunction = () => {
      return fakeWorksData.map((work)=>{
          return work.reference + " " + work.title
      })
  }
    const handleItemClick = (item, route) => {
        if (route === '/') {
            router.push(route)
            setSelectedItem(null);
            setIsMenuOpen(true);
            setExpanded(null)
        } else {
        router.push(route)
        setSelectedItem(item)
        const worksList = worksListFunction()
        worksList.includes(item) ? setExpanded('works') : setExpanded(null)
        setIsMenuOpen(false)
        }
    }

    const handleClickedItemMenuReturn = () => {
      if (pathname.startsWith('/blog/')) {
        router.push('/blog')
      }
        setIsMenuOpen(true)
    }

  return (
    <>
    <div className="flex">
        <Header onClick={() => handleItemClick(null, '/')}/>
        <button className="text-xl ml-auto pr-2"  onClick={toggleMode}> {isDarkMode? '☾ ☀' : '☀ ☾'}</button>
        </div>
        <SideNav handleItemClick={handleItemClick}  />
        <nav className={`text-blueCustom dark:text-nightModeBlueCustom bg-transparent text-3xl flex p-2 sm:p-4`} >
      <ul className="space-y-0">
        {isMenuOpen && (
          <>
            <li>
              <div
                onClick={() => toggleSubMenu('works')}
                className={`cursor-pointer hover:text-pinkCustom dark:nightModePinkCustom transition-colors duration-300`}
              >
                <span><span className={`text-black dark:text-white`}>1</span> Works</span>
                <span>{expanded === 'works' ? ' ↞' : ' ↡'}</span>
              </div>
              {expanded === 'works' && (
  <ul className="pl-4 space-y-0">
    {fakeWorksData.map((work) => (
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
-pink background?
-think about themes now?
-should menu disappear once selected? or remain in mobile too?
*/