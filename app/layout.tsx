import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Nav from "../components/navbar/Nav";
import QueryWrapper from "./QueryWrapper";
import { ThemeProvider } from "./theme-provider"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "TalkGrid",
  description: "A PostBoard for Users to post and comment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased width-full`}>
        <QueryWrapper>
          <ThemeProvider attribute="class" enableColorScheme defaultTheme="system" enableSystem>
            <Nav />
            <div className="px-6 md:px-6 pt-12 pb-24 md:pt-12 md:pb-44 max-w-[700px] mx-auto">
              {children}
            </div>
          </ThemeProvider>
        </QueryWrapper>
      </body>
    </html>
  );
}
