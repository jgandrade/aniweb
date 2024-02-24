import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/util/Providers";
import ThemeProvider from "@/util/ThemeProvider";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniweb | Watch Anime and Read Manga",
  description: "Watch Anime and Read Manga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
