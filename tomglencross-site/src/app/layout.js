import "./globals.css";
import MainNav from "@/components/MainNav";
import SideNav from "@/components/SideNav";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNav/>
        {children}
        {/* <SideNav/> */}
      </body>
    </html>
  );
}
