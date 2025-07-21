// app/(routes)/dashboard/page.tsx

export const dynamic = "force-dynamic"; 

import { Suspense } from "react";
import Header from "./_components/Header";
import { DashboardClient } from "./_components/DashboardClient";

export default function DashboardPage() {
  return (
    <div className="flex flex-col p-2">
      <div className="flex-grow mt-4">
        <Header />
        <Suspense fallback={<div>Loading dashboard...</div>}>
          <DashboardClient />
        </Suspense>
      </div>
    </div>
  );
}
