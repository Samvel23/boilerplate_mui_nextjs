import { ReactNode } from "react";

import { AppContainer } from "@/components";

interface IPageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: IPageContainerProps) {
  return (
    <AppContainer
      maxWidth="lg"
      sx={{
        width: "100%",
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        boxSizing: "border-box",
      }}
    >
      {children}
    </AppContainer>
  );
}
