import "./globals.css";
import MainNav from "@/components/MainNav";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNav/>
        {children}
      </body>
    </html>
  );
}
