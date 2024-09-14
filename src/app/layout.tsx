import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "react-hot-toast"



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <ConvexClientProvider>
            {children}
            <Toaster />
            </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
