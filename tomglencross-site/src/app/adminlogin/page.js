"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginResponse = await fetch("/api/adminlogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        const loginResponseData = await loginResponse.json();

        if (loginResponseData.success) {
            Cookies.set("admin-auth", "true", { expires: 1 });
            router.push("/admin");
        } else {
            setError("Incorrect password");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="password"
                placeholder="Enter Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="m-4"
            />
            <button type="submit"
            className="bg-gray-300 px-2 hover:bg-gray-100">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
}
