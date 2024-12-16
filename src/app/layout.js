"use client";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/global.scss";
import TopBar from "@/components/common/topsection/TopBar";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { useEffect } from "react";
import Navbar from "@/components/header/navbar/Navbar";
import CommonFooter from "@/components/homepage/footer/CommonFooter";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Import Bootstrap JS dynamically
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <CurrencyProvider>
          <TopBar />
          <Navbar />
          {children}
        </CurrencyProvider>
        <CommonFooter />
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" />
      </body>
    </html>
  );
}
