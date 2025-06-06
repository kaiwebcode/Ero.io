import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Search, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {
  const { user }: any = useKindeBrowserClient();

  return (
    <div className="flex justify-end w-full gap-2 items-center">
      <div className=" gap-2 items-center border rounded-md p-1 lg:flex md:flex hidden">
        <Search className="h-4 w-4 " />
        <input
          type="text"
          placeholder="Search"
          className="outline-none flex-grow bg-transparent rounded-md"
        />
      </div>
      <div>
        {user?.picture ? (
          <Image
            src={user.picture}
            alt="user"
            width={30}
            height={30}
            className="rounded-full"
          />
        ) : (
          <div className="w-[30px] h-[30px] rounded-full bg-gray-300" />
        )}
      </div>
      <Button className="gap-2 flex text-sm h-8 hover:bg-gray-700 bg-black">
        <Send className="h-4 w-4" /> Invite
      </Button>
    </div>
  );
}

export default Header;
