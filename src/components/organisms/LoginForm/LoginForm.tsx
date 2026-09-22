"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";

import {
  AppButton,
  AppTextField,
  FormActions,
  FormField,
  PasswordField,
} from "@/components";

import { validateEmail, validatePassword } from "@/utils/validation";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (emailValidation || passwordValidation) {
      return;
    }

    setIsLoading(true);

    try {
      console.log("Submitting...", {
        email,
        password,
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5">Login</Typography>

      <FormField error={emailError}>
        <AppTextField
          label="Email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);

            if (emailError) {
              setEmailError("");
            }
          }}
        />
      </FormField>

      <FormField error={passwordError}>
        <PasswordField
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormField>

      <FormActions>
        <AppButton
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{
            flex: {
              xs: "none",
              md: 1,
            },
          }}
        >
          {isLoading ? "Logging in..." : "Login"}
        </AppButton>

        <AppButton
          type="button"
          variant="text"
          disabled={isLoading}
          sx={{
            flex: {
              xs: "none",
              md: 1,
            },
          }}
        >
          Forgot password?
        </AppButton>
      </FormActions>
    </Box>
  );
};
