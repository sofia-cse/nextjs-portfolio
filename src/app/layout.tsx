import React from "react";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { NavContextProvider } from "@/app/utils/NavContextProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className={akkurat.className} suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="">
        <div className="mx-auto pb-4 pt-16">
          <ThemeProvider
            enableSystem={true}
            defaultTheme="system"
            attribute="data-theme"
            disableTransitionOnChange
          >
            <NavContextProvider>
              <Navbar />
              <div></div>
              <div className="mx-auto items-start">{children}</div>
            </NavContextProvider>
            <Footer />
          </ThemeProvider>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
