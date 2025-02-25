"use client"

import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function AdminLayout({children}) {
const router = useRouter()

const handleLogout = () => {
    Cookies.remove("admin-auth")
    router.push("/adminlogin")
}
console.log('Rendering Admin Layout with children:', children)
  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
        {children}
    </div>
  )
}
