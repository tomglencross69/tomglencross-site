"use client"

import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

export default function AdminLayout({children}) {
const router = useRouter()

const handleLogout = () => {
    Cookies.remove("admin-auth")
    router.push("/adminlogin")
}

const navigateToCreate = () => {
    router.push("/admin/create")
}

const navigateToAdminHome = () => {
    router.push("/admin")
}

  return (
    <>
    <div>
        <button onClick={handleLogout}>Logout</button>
        </div>
        <div>
        <button onClick={navigateToAdminHome}>Admin</button>
        </div>
        <div>
        <button onClick={navigateToCreate}>Create Blog Post</button>
        {children}
    </div>
    </>
  )
}
