import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  themeMode: " ",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
