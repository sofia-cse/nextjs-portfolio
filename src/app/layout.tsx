import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HashScroll from "./hash-scroll";
import localFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sofia Martin",
  description:
    "Sofia Martin is a technologist experienced with all parts of the product discovery, design, and development process.",
};

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
      <body>
        <div className="container mx-auto mb-24">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
