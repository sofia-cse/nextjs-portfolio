import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "./utils/ThemeProvider.js";
const akkurat = localFont({
  src: [
    {
      path: "../typography/Akkurat-Normal.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../typography/Akkurat-Normal-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../typography/Akkurat-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../typography/Akkurat-Bold-Italic.woff",
      weight: "700",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={akkurat.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="">
        <div className="mx-auto mb-24">
          <ThemeProvider enableSystem={true} defaultTheme="system">
            <Navbar />
            <div className="mx-auto items-start">{children}</div>
          </ThemeProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
