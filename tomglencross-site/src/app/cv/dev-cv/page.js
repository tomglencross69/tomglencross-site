"use client"
import { useRouter } from "next/navigation"

export default function DevCV() {
    const router = useRouter()
  return (
    <>
    <div>
    <span onClick={(()=> router.push('/cv'))} className={`text-3xl cursor-pointer text-pinkCustom dark:nightModePinkCustom`}>↞</span> 
    DevCV
    </div>
  </>
  )

}