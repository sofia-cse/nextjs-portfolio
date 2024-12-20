"use client";
import React, { createContext, useState, useContext } from "react";

interface ActiveNavContextType {
  activeNav: string | null;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

// 1. Create the context
const NavContext = createContext<ActiveNavContextType | undefined>(undefined);

// 2. Create the provider component
const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeNav, setActiveNav] = useState<string>("null");

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
};
const useNavContext = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
};

export { NavContextProvider, useNavContext };
