"use client";

import { AuthTemplate } from "@/components";
import { LoginForm } from "@/components";

import { useThemeMode } from "@/components";
import { Button } from "@mui/material";

export default function Home() {
  const { mode, toggleMode } = useThemeMode();
  return (
    <>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
      <Button onClick={toggleMode}>
        {mode === "light" ? "Dark mode" : "Light mode"}
      </Button>
    </>
  );
}
