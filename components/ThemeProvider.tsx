"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Fix the type import
type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0]

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

