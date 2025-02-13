'use client';

import Header from "./Header";
import { useState } from "react";
import Link from "next/link";

export default function MainNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [expanded, setExpanded] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)

    const toggleSubMenu = (menu) => {
        setExpanded(expanded === menu ? null: menu)
    }
    
    const handleItemClick = (item) => {
        setSelectedItem(item)
        setIsMenuOpen(false)
    }

    const handleClickedItemMenuReturn = () => {
        setIsMenuOpen(true)
        setSelectedItem(null)
    }

  return (
    <>
        <Header/>
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
                    onClick={() => handleItemClick('1.1 Work 1')}
                    className={`cursor-pointer ${selectedItem === '1.1 Work 1' ? 'text-pinkCustom' : ''} hover:text-pinkCustom transition-colors duration-300 `}
                  >
                    <span className="text-black">1.1</span> Work 1
                  </li>
                  <li
                    onClick={() => handleItemClick('1.2 Work 2')}
                    className={`cursor-pointer ${selectedItem === '1.2 Work 2' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
                  >
                    <span className="text-black">1.2</span> Work 2
                  </li>
                  <li
                    onClick={() => handleItemClick('1.3 Work 3')}
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
                onClick={() => handleItemClick('2 Dev')}
                className={`cursor-pointer ${selectedItem === '2. Dev' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
              >
                <span className="text-black">2</span> Dev
              </div>
            </li>
            <li>
              <div
                onClick={() => handleItemClick('3 Blog')}
                className={`cursor-pointer ${selectedItem === '3. Blog' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
              >
                <span className="text-black">3</span> Blog
              </div>
            </li>
            <li>
              <div
                onClick={() => handleItemClick('4 CV')}
                className={`cursor-pointer ${selectedItem === '4. CV' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
              >
                <span className="text-black">4</span> CV
              </div>
            </li>
            <li>
              <div
                onClick={() => handleItemClick('5 About')}
                className={`cursor-pointer ${selectedItem === '5. About' ? 'text-pinkCustom' : ''}hover:text-pinkCustom transition-colors duration-300 `}
              >
                <span className="text-black">5</span> About
              </div>
            </li>
          </>
        )}

        {/* Display Selected Item at the Top */}
        {selectedItem && (
          <div className="text-2xl text-pinkCustom">
            <span 
            onClick={() => handleClickedItemMenuReturn()}className="cursor-pointer text-black">↞
            </span> {selectedItem}
          </div>
        )}
      </ul>
    </nav>
    </>
  )
}


/* to do 
-make back arrow return to home
-code TOM GLENCROSS for home
-do a dummy run to link to about page thru menu clicks
*/