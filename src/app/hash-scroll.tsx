"use client";
import React from "react";
import { ReactNode, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * HashScroll is a workaround for Next.js's appDir not scrolling to hash links.
 * See: https://github.com/vercel/next.js/issues/44625
 */
export default function HashScroll({ children }: { children: ReactNode }) {
  const nextHash = useRef("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // On page load, scroll to the currently active hash.
    // Then watch all link clicks for hash navigations. If they're on the same page,
    // scroll to them. If they're on a different page, save it in a ref.

    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName !== "A") return;
      const el = e.target as HTMLAnchorElement;
      const id = el.hash.slice(1);
      if (!id) return;
      if (el.origin !== window.location.origin) return;
      if (el.pathname === window.location.pathname) {
        scrollToEl(id);
        return;
      }
      nextHash.current = id;
    };
    scrollToEl(window.location.hash.slice(1));
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (nextHash.current) {
      // If we have a saved hash from the previous page,
      // scroll to it and clear the value.
      scrollToEl(nextHash.current);
      nextHash.current = "";
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}

function scrollToEl(id: string) {
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView();
}
