// app/(routes)/dashboard/_components/DashboardClient.tsx
"use client";

import { useSearchParams } from "next/navigation";
import FileList from "./FileList";

export function DashboardClient() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || undefined;
  const favorites = searchParams.get("favorites") || undefined;

  return (
    <FileList searchParams={{ search, favorites }} />
  );
}
