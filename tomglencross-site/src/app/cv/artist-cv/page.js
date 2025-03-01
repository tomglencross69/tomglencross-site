"use client"
import { useRouter } from "next/navigation"
import { use } from "react"

export default function ArtistCV() {
    const router = useRouter()
  return (
    <>
    <div>
    <span onClick={(()=> router.back())} className={`text-3xl cursor-pointer text-pinkCustom dark:nightModePinkCustom`}>↞</span> 
    ArtistCV
    </div>
  </>
  )

}
