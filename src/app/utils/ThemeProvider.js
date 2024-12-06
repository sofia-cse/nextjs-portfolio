"use client";
import React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {PropTypes} from 'prop-types';

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default function ThemeProvider({children, ...props}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}