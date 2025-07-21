"use client";

import { Hint } from "@/app/(routes)/dashboard/_components/hint";
import { Actions } from "@/components/actions";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
  boardId: string;
}

const TabSeparator = () => {
  return <span className="text-neutral-400 pr-1.5">|</span>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white rounded-lg px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to Boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-1">
          <Link href="/dashboard">
            <Image
              src="/ero.io (1).png"
              alt="Board logo"
              height={40}
              width={40}
            />
            <span className={cn("font-semibold text-xl pr-1 text-black")}>
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit rename" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-base font-normal pl-1"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10} >
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10} >
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-lg w-[300px]" />
  );
};
