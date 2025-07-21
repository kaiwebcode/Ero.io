"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react/suspense";
import { RoomProvider, LiveblocksProvider } from "@/liveblocks-provider"; // ✅ Use your wrapped version
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { Layer } from "@/types/canvas";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export function Room({ children, roomId, fallback }: RoomProps) {
  return (
    <LiveblocksProvider publicApiKey="pk_dev_dfqgh3nTBJqBSm_7M34YW_THrvSFfubAAVSbcxL6i_58rBTs9vd71P7lfM3PHT6N">
      {" "}
      {/* ✅ No need to pass authEndpoint again */}
      <RoomProvider
        id={roomId}
        initialPresence={{
          cursor: null,
          selection: [],
          pencilDraft: null,
          penColor: null,
        }}
        initialStorage={{
          layers: new LiveMap<string, LiveObject<Layer>>(),
          layerIds: new LiveList([]),
        }}
      >
        <ClientSideSuspense fallback={fallback}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
