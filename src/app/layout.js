import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import Loading from "./loading";
import Chat from "@/components/Chat";
import Head from "next/head";

export const metadata = {
  title: "Revive Physiotherapy | Ghana",
  description: "Yes We Revive!!! | We Care About Your Health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <body className="relative w-full h-full overflow-x-hidden bg-gray-100">
        <Loading>
          <Navbar />
          {children}
          <Chat />
          <Footer />
        </Loading>
      </body>
    </html>
  );
}
