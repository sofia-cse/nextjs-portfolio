"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GiMoonBats, GiSun } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex flex-row gap-4 p-2 border rounded-full theme-controls">
        <GiSun className="inactive w-5 h-5" />
        <RiComputerLine className="inactive w-5 h-5" />
        <GiMoonBats className="inactive w-5 h-5" />
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-4 p-2 border rounded-full theme-controls">
      <GiSun
        className={
          theme === "system" || theme === "dark"
            ? "inactive w-5 h-5"
            : "active w-5 h-5"
        }
        onClick={() => setTheme("light")}
      />
      <RiComputerLine
        className={
          theme === "light" || theme === "dark"
            ? "inactive w-5 h-5"
            : "active w-5 h-5"
        }
        onClick={() => setTheme("system")}
      />
      <GiMoonBats
        className={
          theme === "system" || theme === "light"
            ? "inactive w-5 h-5"
            : "active w-5 h-5"
        }
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export default ThemeButton;
