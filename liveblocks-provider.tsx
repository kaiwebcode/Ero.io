// liveblocks-provider.tsx
import { createRoomContext } from "@liveblocks/react";
import { LiveblocksProvider } from "@liveblocks/react/suspense"; // ✅ manually import
import { client } from "./liveblocks.config";

export const {
  RoomProvider,
  useRoom,
  useOthers,
  useMyPresence,
  useMutation,
  useSelf,
  useStorage,
  useUpdateMyPresence,
  useBroadcastEvent,
  useEventListener,
} = createRoomContext(client);

export { LiveblocksProvider }; // ✅ export manually
