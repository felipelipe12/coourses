"use client";

import { Header } from "@/app/_components/global/Header";
import { Sidebar } from "@/app/_components/global/Sidebar";

export default function Profile() {
  return (
    <div className="flex">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex w-full flex-col">
        <Header />
        <div className="h-72 bg-blue-500">oi</div>
      </main>
    </div>
  );
}
