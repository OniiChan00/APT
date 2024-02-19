import "./globals.css";
import Sidebar from "./sidebar/page";
import Home from "./home/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <body>
      <div className="h-screen flex flex-row justify-start">
        <Sidebar/>
        <div className="bg-indigo-800 flex-1 p-4 text-white">
            <main>{children}</main>
        </div>
      </div>
    </body>
    </html>
  );
}
