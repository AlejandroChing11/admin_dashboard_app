'use client';

import { SideBar } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

      <div className="flex">

        <SideBar />

        <div className="p-2 w-full text-slate-900">
          {children}
        </div>

      </div>
    </div>
  );
}