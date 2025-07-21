"use client";

import { Button } from "@/components/ui/button";
import { Plus, Search, Send } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  OrganizationProfile,
  useOrganization,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React from "react";
import { SearchInput } from "./search-inputs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function Header() {
  const {organization} = useOrganization();
  const { isLoaded } = useUser(); // loading state from Clerk

  return (
    <div className="flex justify-end w-full gap-2 items-center">
      {/* Search Bar */}
      <SearchInput />
      {/* <div className="gap-2 items-center border rounded-md p-1 lg:flex md:flex hidden">
      <Search className="h-4 w-4" />
      <input
        type="text"
        placeholder="Search"
        className="outline-none flex-grow bg-transparent rounded-md"
      />
    </div> */}

      {/* User Profile Button or Skeleton */}
      {!isLoaded ? (
        <Skeleton className="h-8 w-8 rounded-full" />
      ) : (
        <UserButton afterSignOutUrl="/" />
      )}

      {/* Invite Button */}
      {organization && (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-1 flex text-sm h-8 hover:bg-gray-700 bg-black">
              <Plus className="h-4 w-4 mr-1" />
              Invite
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none lg:max-w-[880px] pl-6">
            <OrganizationProfile routing="hash" />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default Header;
