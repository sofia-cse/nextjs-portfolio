"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  GiBeamSatellite,
  GiMoonBats,
  GiMoonOrbit,
  GiRocketThruster,
  GiSun,
} from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  //if (!mounted) return <GiMoonOrbit />;
  if (!mounted) {
    return (
      <div className="flex flex-row gap-4 p-2 border rounded-full theme-controls">
        <GiBeamSatellite className="inactive w-5 h-5" />
        <GiRocketThruster className="inactive w-5 h-5" />
        <GiMoonOrbit className="inactive w-5 h-5" />
      </div>
    );
  }
  if (theme === "system") {
    return (
      <div className="flex flex-row gap-4 p-2 border rounded-full theme-controls">
        <GiSun className="inactive w-5 h-5" onClick={() => setTheme("light")} />
        <RiComputerLine
          className="active w-5 h-5"
          onClick={() => setTheme("system")}
        />
        <GiMoonBats
          className="inactive w-5 h-5"
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }

  if (theme === "dark") {
    return (
      <div className="flex flex-row gap-4 p-2 border rounded-full theme-controls">
        <GiSun className="inactive w-5 h-5" onClick={() => setTheme("light")} />
        <RiComputerLine
          className="inactive w-5 h-5"
          onClick={() => setTheme("system")}
        />
        <GiMoonBats
          className="active w-5 h-5"
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }

  if (theme === "light") {
    return (
      <div className="flex flex-row gap-4 p-2 border rounded-full theme-controls">
        <GiSun className="active w-5 h-5" onClick={() => setTheme("light")} />
        <RiComputerLine
          className="inactive w-5 h-5"
          onClick={() => setTheme("system")}
        />
        <GiMoonBats
          className="inactive w-5 h-5"
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }
};

export default ThemeButton;
