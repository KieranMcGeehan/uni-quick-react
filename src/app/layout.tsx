import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RUG Sample application",
  description: "A sample application for the RUG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
