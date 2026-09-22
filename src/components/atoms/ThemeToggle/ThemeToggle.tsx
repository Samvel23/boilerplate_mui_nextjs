"use client";

import { AppIconButton, useThemeMode } from "@/components";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import Tooltip from "@mui/material/Tooltip";

export function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();

  const isDark = mode === "dark";

  return (
    <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <AppIconButton
        onClick={toggleMode}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </AppIconButton>
    </Tooltip>
  );
}
