'use client';
import Header from "./Header";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MainNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [expanded, setExpanded] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)
    const router = useRouter()
console.log(selectedItem)

    const toggleSubMenu = (menu) => {
        setExpanded(expanded === menu ? null: menu)
    }
    
    const handleItemClick = (item, route) => {
        console.log(route)
        if (route === '/') {
            router.push(route)
            setSelectedItem(null);
            setIsMenuOpen(true);
            setExpanded(null)
        } else {
        router.push(route)
        setSelectedItem(item)
        const worksList = ['1.1 Work 1','1.2 Work 2','1.3 Work 3']
        worksList.includes(item) ? setExpanded('works') : setExpanded(null)
        setIsMenuOpen(false)
        }
    }

    const handleClickedItemMenuReturn = () => {
        setIsMenuOpen(true)
        // setSelectedItem(null)
    }
console.log(selectedItem)

  return (
    <>
        <Header onClick={() => handleItemClick(null, '/')}/>
        <nav className="bg-transparent text-blueCustom text-2xl p-2 sm:p-4 ">
      {/* Main Menu */}
      <ul className="space-y-0">
        {isMenuOpen && (
          <>
            {/* Works - Dropdown */}
            <li>
              <div
                onClick={() => toggleSubMenu('works')}
                className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
              >
                <span><span className="text-black">1</span> Works</span>
                <span>{expanded === 'works' ? ' ↞' : ' ↡'}</span>
              </div>
              {expanded === 'works' && (
                <ul className="pl-4 space-y-0">
                  <li
                    onClick={() => handleItemClick('1.1 Work 1', '/')}
                    className={`cursor-pointer ${selectedItem === '1.1 Work 1' ? 'text-pinkCustom' : ''} hover:text-pinkCustom transition-colors duration-300 `}
                  >
                    <span className="text-black">1.1</span> Work 1
                  </li>
                  <li
                    onClick={() => handleItemClick('1.2 Work 2', '/')}
                    className={`cursor-pointer ${selectedItem === '1.2 Work 2' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
                  >
                    <span className="text-black">1.2</span> Work 2
                  </li>
                  <li
                    onClick={() => handleItemClick('1.3 Work 3', '/')}
                    className={`cursor-pointer ${selectedItem === '1.3 Work 3' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
                  >
                    <span className="text-black">1.3</span> Work 3
                  </li>
                </ul>
              )}
            </li>

            {/* Other Menu Items */}
            <li>
              <div
                onClick={() => handleItemClick('2 Dev', 'dev')} 
                className={`cursor-pointer ${selectedItem == '2 Dev' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
              >
                <span className="text-black">2</span> Dev
              </div>
            </li>
            <li>
              <div
                onClick={() => handleItemClick('3 Blog', 'blog')}
                className={`cursor-pointer ${selectedItem == '3 Blog' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
              >
                <span className="text-black">3</span> Blog
              </div>
            </li>
            <li>
              <div
                onClick={() => handleItemClick('4 CV', 'cv')}
                className={`cursor-pointer ${selectedItem == '4 CV' ? 'text-pinkCustom' : ''} hover:text-pinkCustom transition-colors duration-300 `}
              >
                <span className="text-black">4</span> CV
              </div>
            </li>
            <li>
              <div
                onClick={() => handleItemClick('5 About', 'about')}
                className={`cursor-pointer ${selectedItem == '5 About' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
              >
                <span className="text-black">5</span> About
              </div>
            </li>
          </>
        )}

        {/* Display Selected Item at the Top */}
        {selectedItem && !isMenuOpen && (
          <div className="text-2xl">
            <span 
            onClick={() => handleClickedItemMenuReturn()}className="cursor-pointer text-pinkCustom">↞
            </span> 
            <span className="text-black">{" " + selectedItem.split(' ')[0]}</span>
            <span className="text-pinkCustom">{" " + selectedItem.split(' ').slice(1).join(' ')}</span>
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
-build other navbar
-kanban rest of project...
-make selected items remain pink on menu return!! it only works for CV?!?!?!?
*/