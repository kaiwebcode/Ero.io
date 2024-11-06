"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { toast } from "react-hot-toast";


function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const createTeam = useMutation(api.teams.createTeam);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();
  
  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((resp) => {
      if (resp) {
        router.push("/dashboard");
        toast("Team created successfully!!!");
      }
    });
  };

  return (
    <div className="p-6 sm:p-10 max-w-lg mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Ero.io</h1>
      <div className="flex flex-col items-center mt-20 sm:mt-28 gap-4">
        <h2 className="font-bold text-3xl sm:text-[40px] text-center sm:py-3">
          What should we call your team?
        </h2>
        <h2 className="text-gray-500 text-center text-sm sm:text-base">
          You can always change this later from settings.
        </h2>
        <div className="mt-6 sm:mt-7 w-full sm:w-[70%]">
          <label className="text-gray-500 block mb-2">Team Name</label>
          <Input
            placeholder="Enter team Name..."
            className="w-full mt-2 p-2 border rounded-md"
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <Button
          className="bg-black mt-6 sm:mt-9 w-full sm:w-[50%] hover:bg-gray-800 p-2 rounded text-white"
          disabled={!(teamName && teamName?.length > 0)}
          onClick={() => createNewTeam()}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}

export default CreateTeam;
