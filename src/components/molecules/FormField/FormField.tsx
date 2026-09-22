"use client";

import { ReactNode } from "react";

import { Box, Typography } from "@mui/material";

interface IFormFieldProps {
  error?: string;
  children: ReactNode;
}

export function FormField({ error, children }: IFormFieldProps) {
  return (
    <Box sx={{ width: "100%" }}>
      {children}

      {error && (
        <Typography
          variant="caption"
          color="error"
          sx={{
            mt: 0.5,
            display: "block",
          }}
        >
          {error}
        </Typography>
      )}
    </Box>
  );
}
