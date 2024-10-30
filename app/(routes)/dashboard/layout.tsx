"use client";

import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SideNav from "./_components/SideNav";
import { FileListContext } from "@/app/_context/FileListContext";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
  const [fileList_, setFileList_] = useState();
  const router = useRouter();

  useEffect(() => {
    user && checkTeam();
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });

    if (!result?.length) {
      router.push("teams/create");
    }
  };

  return (
    <div className="flex min-h-screen">
      <FileListContext.Provider value={{ fileList_, setFileList_ }}>
        {/* Sidebar */}
        <div className="md:h-screen md:fixed bg-gray-100 z-10">
          <SideNav />

        {/* Main content */}
        </div>
        <div className="flex-1 md:ml-64 p-4 overflow-auto">
          {children}
        </div>
      </FileListContext.Provider>
    </div>
  );
}

export default DashboardLayout;
