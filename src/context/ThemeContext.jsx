// ThemeContext.js
import { createContext, useContext, useState, useEffect } from "react";
import React from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme
      ? savedTheme === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Your theme definitions
  const lightTheme = {
    "--primary": "#ff5733",
    "--primary-hover": "#e04e2e",
    "--secondary": "#007bff",
    "--secondary-hover": "#0056b3",
    "--bg-shade": "#f4f4f4",
    "--heading-color": "#333",
    "--black": "#000",
    "--white": "#fff",
    "--dark-navy": "#1a2a44",
    "--grey": "#5e6e88",
    "--card": "#fff",
  };

  const darkTheme = {
    "--primary": "#ff5733",
    "--primary-hover": "#e04e2e",
    "--secondary": "#1a73e8",
    "--secondary-hover": "#1662c4",
    "--bg-shade": "#121212",
    "--heading-color": "#f0f0f0",
    "--black": "#d9d9d9",
    "--white": "#fff",
    "--dark-navy": "#b5c8e6",
    "--grey": "#acb2bb",
    "--card": "#3e3e3e",
  };

  useEffect(() => {
    const root = document.documentElement;
    const theme = isDarkMode ? darkTheme : lightTheme;
    Object.entries(theme).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
