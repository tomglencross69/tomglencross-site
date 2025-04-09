"use client"
import { useRouter } from "next/navigation"

export default function AdminLayout({children}) {
const router = useRouter()

const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/adminlogin");
};

const navigateToCreate = () => {
    router.push("/admin/create")
}

const navigateToAdminHome = () => {
    router.push("/admin")
}

  return (
    <>
    <div onClick={navigateToAdminHome} className={`text-3xl pl-2 pt-4 cursor-pointer text-pinkCustom hover:text-nightModeBlueCustom dark:nightModeBlueCustom transition-colors duration-300 `}>ADMIN DASHBOARD</div>
    <nav className="column pl-2 text-3xl text-pinkCustom">
        <div>
        <button className={`text-3xl cursor-pointer text-pinkCustom hover:text-nightModeBlueCustom dark:nightModeBlueCustom transition-colors duration-300`}
        onClick={navigateToAdminHome}>I Blog Post Dashboard</button>
        </div>
        <div>
        <button className={`text-3xl cursor-pointer text-pinkCustom hover:text-nightModeBlueCustom dark:nightModeBlueCustom transition-colors duration-300`}
        onClick={navigateToCreate}>II Create Blog Post</button>
    </div>
    <div>
        <button className={`text-3xl cursor-pointer text-pinkCustom hover:text-nightModeBlueCustom dark:nightModeBlueCustom transition-colors duration-300`}
        onClick={handleLogout}>III Logout</button>
        </div>
    </nav>
        {children}
    </>
  )
}
