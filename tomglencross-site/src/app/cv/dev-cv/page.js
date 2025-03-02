"use client"
import { useRouter } from "next/navigation"

export default function DevCV() {
    const router = useRouter()
  return (
    <>
    <div>
    <span onClick={(()=> router.push('/cv'))} className={`text-3xl cursor-pointer text-pinkCustom dark:nightModePinkCustom`}>↞</span> 
    <div className="text-3xl pl-4 py-9 space-y-0">
                  4.2 
                  <span className={`cursor-pointer text-blueCustom dark:text-nightModeBlueCustom
                      hover:text-pinkCustom hover:dark:text-nightModePinkCustom 
                      transition-colors duration-300`}> Dev CV</span>
                </div>
    </div>
  </>
  )

}