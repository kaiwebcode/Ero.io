"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Hint } from "./hint";

export const NewButton = () => {
  return (
    <Dialog>
      <Hint
        label="Create a Organization"
        side="left"
        align="start"
        sideOffset={6}
      >
        <DialogTrigger asChild>
          <Button className="bg-zinc-700 rounded-lg flex items-center justify-center hover:opacity-60 transition aspect-square">
            <Plus className="text-white h-10 w-10" />
          </Button>
        </DialogTrigger>
      </Hint>
      
      <DialogContent className="bg-transparent p-0 border-none max-w-[430px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
