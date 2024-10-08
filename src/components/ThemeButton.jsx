"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { GiMoonBats, GiMoonOrbit } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <GiMoonOrbit size={24} />;

  if (resolvedTheme === "dark") {
    return <IoSunny size={24} onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <GiMoonBats size={24} onClick={() => setTheme("dark")} />;
  }
};

export default ThemeButton;
