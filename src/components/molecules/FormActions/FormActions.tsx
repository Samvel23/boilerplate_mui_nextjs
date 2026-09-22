"use client";

import { ReactNode } from "react";

import { Box } from "@mui/material";

interface IFormActionsProps {
  children: ReactNode;
}

export function FormActions({ children }: IFormActionsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        gap: 1,
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
