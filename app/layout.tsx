import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Astitva | Psychological Counselling Centre",
  description: "Professional, confidential, and compassionate psychological support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 flex flex-col min-h-screen">
        {/* Navbar hamesha top par rahega kyunki wo fixed hai */}
        <Navbar />

        {/* Main content ko 'flex-grow' diya hai taaki agar content kam ho 
          toh bhi Footer hamesha screen ke bottom mein rahe.
        */}

        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}