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
      <div className="theme-controls flex flex-row gap-4 rounded-full border p-2">
        <GiSun className="inactive h-5 w-5" />
        <RiComputerLine className="inactive h-5 w-5" />
        <GiMoonBats className="inactive h-5 w-5" />
      </div>
    );
  }

  return (
    <div className="theme-controls flex flex-row gap-4 rounded-full border p-2">
      <GiSun
        className={
          theme === "system" || theme === "dark"
            ? "inactive h-5 w-5"
            : "active h-5 w-5"
        }
        onClick={() => setTheme("light")}
      />
      <RiComputerLine
        className={
          theme === "light" || theme === "dark"
            ? "inactive h-5 w-5"
            : "active h-5 w-5"
        }
        onClick={() => setTheme("system")}
      />
      <GiMoonBats
        className={
          theme === "system" || theme === "light"
            ? "inactive h-5 w-5"
            : "active h-5 w-5"
        }
        onClick={() => setTheme("dark")}
      />
    </div>
  );
};

export default ThemeButton;
