// "use client"

import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info.";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

export const Loading = () => {
  return (
    <main
      className="flex h-screen w-full relative bg-neutral-100 touch-none
        items-center justify-center mx-auto"
    >
      <Loader className="h-10 w-10 text-muted-foreground animate-spin text-center" />
      <p className="pl-1 text-2xl">
        Connecting
        </p>
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
