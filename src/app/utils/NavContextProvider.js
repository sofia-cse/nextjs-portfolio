"use client"
import React, { createContext, useState, useContext } from "react";
import { PropTypes } from "prop-types";

// 1. Create the context
const NavContext = createContext();

// 2. Create the provider component
export const NavContextProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("Hello from context!");

 

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
};

NavContextProvider.propTypes = {
  children: PropTypes.any,
  activeNav: PropTypes.any,
};

export const useNavContext = () => {
  return useContext(NavContext);
};
