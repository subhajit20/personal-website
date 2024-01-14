import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import ContextProvider from "@/context/ContextProvider";
import { Theme } from "@radix-ui/themes";

const inter = Poppins({ weight: "400", preload: false });

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
