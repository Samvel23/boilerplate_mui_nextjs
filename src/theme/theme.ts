import { createTheme } from "@mui/material/styles";

import { darkColors, lightColors } from "./colors";
import { typography } from "./typography";

export const createAppTheme = (mode: "light" | "dark") => {
  const colors = mode === "light" ? lightColors : darkColors;

  return createTheme({
    palette: {
      mode,

      primary: colors.primary,
      background: colors.background,
      text: colors.text,
    },

    typography,

    components: {
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          size: "medium",
          fullWidth: true,
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.primary.main,
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
            },
          },
        },
      },

      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },

        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
          },
        },
      },

      MuiCard: {
        defaultProps: {
          variant: "outlined",
        },

        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });
};
