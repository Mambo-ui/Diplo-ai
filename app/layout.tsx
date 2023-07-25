import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Body from "@/components/Body";
import ListItem from "@/components/ListItem";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiploAI",
  description: "Assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto flex py-5 justify-around ">
        <div className=" shrink-0 py-0 flex-col main">
          <div className="px-6 header justify-center">
            <Header />
          </div>
          <div className=" flex py-4 p-6 justify-center font-thin body">
            <Body />
          </div>
          <div className=" flex-row justify-center p-5 ">
            <ListItem />
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300" />
            <ListItem />
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-300" />
            <ListItem />
          </div>
          <div className="shrink bottom-0 p-3 space-x-2 font-medium ">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
