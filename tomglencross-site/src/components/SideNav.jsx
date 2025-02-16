'use client'
import { useRouter } from "next/navigation";

export default function SideNav ({handleItemClick}) {
  return (
    <nav className="bg-gray-200 text-black text-xl sm:p-2 fixed right-0 top-0 h-full" style={{writingMode: 'vertical-rl'}} >
        <ul className="flex flex-row">
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick(null, '/')}>Home </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('1 Works', '/works')}>Works </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('2 Dev', '/dev')}>Dev </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('3 Blog', '/blog')}>Blog </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('4 CV', '/blog')}>CV </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('5 About', '/about')}>About</li>
            </ul>
    </nav>
  )
}
