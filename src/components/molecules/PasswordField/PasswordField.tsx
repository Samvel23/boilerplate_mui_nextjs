"use client";

import { useState } from "react";

import InputAdornment from "@mui/material/InputAdornment";
import type { TextFieldProps } from "@mui/material/TextField";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { AppIconButton, AppTextField } from "@/components";

interface IPasswordFieldProps extends Omit<TextFieldProps, "type"> {}

export function PasswordField(props: IPasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <AppTextField
      {...props}
      type={visible ? "text" : "password"}
      slotProps={{
        ...props.slotProps,
        input: {
          ...props.slotProps?.input,
          endAdornment: (
            <InputAdornment position="end">
              <AppIconButton
                edge="end"
                onClick={() => setVisible((value) => !value)}
                aria-label={visible ? "Hide password" : "Show password"}
              >
                {visible ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </AppIconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
