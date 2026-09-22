import { ReactNode } from "react";
import { Box } from "@mui/material";

import { AppCard, ThemeToggle, PageContainer } from "@/components";

interface IAuthTemplateProps {
  children: ReactNode;
}

export function AuthTemplate({ children }: IAuthTemplateProps) {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        py: {
          xs: 3,
          sm: 4,
          md: 6,
        },
      }}
    >
      <PageContainer>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: {
                xs: -48,
                sm: -56,
              },
              right: 0,
            }}
          >
            <ThemeToggle />
          </Box>

          <AppCard
            sx={{
              width: "100%",
              maxWidth: 440,
              p: {
                xs: 2.5,
                sm: 3,
                md: 4,
              },
              boxSizing: "border-box",
            }}
          >
            {children}
          </AppCard>
        </Box>
      </PageContainer>
    </Box>
  );
}
