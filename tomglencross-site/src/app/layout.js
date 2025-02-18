import "./globals.css";
import MainNav from "@/components/MainNav";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="pr-6"><MainNav/></div>
       <div className="pl-2 pr-9">{children}</div>
      </body>
    </html>
  );
}
