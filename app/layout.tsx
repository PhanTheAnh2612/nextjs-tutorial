import React from "react";
import { ClerkProvider, SignInButton, SignedOut } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
