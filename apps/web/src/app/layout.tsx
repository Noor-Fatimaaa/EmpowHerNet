import "./globals.css";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Nav />
        {children}
      </body>
    </html>
  );
}

