"use client";

import { ReactNode } from "react";

import { AppContainer, ThemeToggle } from "@/components";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";

interface IAppHeaderProps {
  title?: string;
  children?: ReactNode;
}

export function AppHeader({ title, children }: IAppHeaderProps) {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <AppContainer>
        <Toolbar
          disableGutters
          sx={{
            minHeight: {
              xs: 56,
              sm: 64,
            },
            gap: 2,
          }}
        >
          {title && (
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {title}
            </Typography>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
              flex: 1,
              minWidth: 0,
            }}
          >
            {children}

            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppContainer>
    </AppBar>
  );
}
