"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { CartProvider } from "@/contexts/CartContext";
import CartPanel from "@/components/cart/CartPanel";
import { UserProvider } from "@/contexts/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <CartProvider>
            <Navbar />
            {children}
            <CartPanel />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
