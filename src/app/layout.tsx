import { Metadata } from "next";

import StyledComponentsRegistry from "../lib/registry";

export const metadata: Metadata = {
  title: "KH's Portfolio",
  description: "My React/Next.js projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
