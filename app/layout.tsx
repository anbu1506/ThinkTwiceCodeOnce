import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./home/provider";
import getSession from "./lib/getSession";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Think Twice Code Once",
  description: "A place to share your code",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return (
    <html lang="en">
      <head></head>
      <body
        className={inter.className + " antialiased font-normal bg-neutral-950 "}
        style={{
          backgroundImage: "url('bg1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
