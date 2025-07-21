"use client";

import {
  useRoom,
  useStorageRoot,
} from "@liveblocks/react";
import { CanvasInner } from "./CanvasInner";
import { Loading } from "./loading";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const room = useRoom();
  const storage = useStorageRoot();

  const isReady = room?.getStatus() === "connected" && storage !== null;

  if (!isReady) {
    return <Loading />;
  }

  return <CanvasInner boardId={boardId} />;
};
