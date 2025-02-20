import "@/styles/globals.css";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import type React from "react";
import "@/styles/globals.css";
import { Sidebar } from "@/app/_components/Sidebar";
import { DashboardHeader } from "@/app/_components/dashboard/Header";

export const metadata: Metadata = {
  title: "Lapo Test",
  description: "Manage cards with ease",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden font-satoshi">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <TRPCReactProvider>
            <div className="flex h-full flex-1 flex-col overflow-hidden">
              <DashboardHeader />

              <main className="flex-1 overflow-y-auto bg-blue-50 px-[20px] py-[8px] pb-[20px]">
                {children}
              </main>
            </div>
          </TRPCReactProvider>
        </div>
      </body>
    </html>
  );
}
