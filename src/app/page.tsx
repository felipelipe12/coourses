"use client"

import { Header } from "./_components/global/Header";
import { Sidebar } from "./_components/global/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex w-full flex-col">
        <Header />
        <div className="h-72 bg-blue-500">Dashboard</div>
      </main>
    </div>
  );
} 
