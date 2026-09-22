"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type ThemeMode = "light" | "dark";

interface IThemeModeContext {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeModeContext = createContext<IThemeModeContext | undefined>(
  undefined,
);

interface IThemeModeProviderProps {
  children: ReactNode;
}

export const ThemeModeProvider = ({ children }: IThemeModeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      mode,
      toggleMode,
    }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used inside ThemeModeProvider");
  }

  return context;
}
