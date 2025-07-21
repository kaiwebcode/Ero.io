"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const EmptyBoard = () => {
  const router = useRouter()
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitle",
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id }`)
      })
      .catch(() => toast.error("Failed to create board")); 
  };
  return (
    <div className="h-full flex flex-col items-center justify-center lg:mt-[200px] mt-[100px]">
      <Image src="/empty-board.png" alt="Empty" height={300} width={300} />
      <h2 className="text-3xl font-semibold mt-2">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-3">
        Start by Creating a board for your Organization
      </p>
      <div className="mt-4">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create board
        </Button>
      </div>
    </div>
  );
};
