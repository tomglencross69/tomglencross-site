'use client';
import { useRouter } from "next/navigation";

export default function Header({onClick}) {
  const router = useRouter()
  return (
    <>
    <div onClick={onClick} className="cursor-pointer flex p-2 text-4xl sm:p-4 hover:text-pinkCustom active:text-pinkCustom transition-colors duration-1000">TOM GLENCROSS
    </div>
    </>
  )
}
