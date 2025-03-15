'use client'

export default function SideNav ({handleItemClick}) {
  return (
    <nav className="bg-gray-200 text-black text-xl fixed right-0 top-0 h-full md:w-10" style={{writingMode: 'vertical-rl'}} >
        <ul className="flex flex-row pt-2 md:text-2xl">
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick(null, '/')}>home </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('1 Selected Works & Exhibitions', '/works')}>works </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('2 Dev', '/dev')}>dev </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('3 Blog', '/blog')}>blog </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('4 CV', '/cv')}>cv </li><span>•</span>
            <li className="cursor-pointer hover:text-pinkCustom transition-colors duration-300"
            onClick={() => handleItemClick('5 About', '/about')}>about</li>
            </ul>
    </nav>
  )
}
