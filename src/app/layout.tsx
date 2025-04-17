import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./components/auth/auth";
import { AuthProviders } from "./components/context/AuthProrider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Image Explore | a leading satellite imagery provider in the world with the most complete images collection.",
  description:
    "We provide high-quality satellite imagery data to empower businesses, researchers, and decision-makers with cutting-edge geospatial insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="./favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProviders>{children}</AuthProviders>
      </body>
    </html>
  );
}
