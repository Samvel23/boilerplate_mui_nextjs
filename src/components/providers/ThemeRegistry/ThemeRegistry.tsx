"use client";

import { useMemo } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { createAppTheme } from "@/theme/theme";
import { useThemeMode } from "../ThemeMode";

interface IThemeRegistryProps {
  children: React.ReactNode;
}

export const ThemeRegistry = ({ children }: IThemeRegistryProps) => {
  const { mode } = useThemeMode();

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
