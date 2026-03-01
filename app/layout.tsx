import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";


export const metadata: Metadata = {
  title: "3D Website Studio",
  description: "Professional 3D Website Development Services",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#0a0a0a",
          color: "white",
        }}
      >
        <Header />
        <main style={{ minHeight: "80vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}