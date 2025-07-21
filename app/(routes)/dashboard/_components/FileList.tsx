"use client";

import { FileListContext } from "@/app/_context/FileListContext";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Archive, MoreHorizontal, Trash } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { NewButton } from "./NewButton";
import { EmptyOrg } from "./EmptyOrg";
import { useOrganization } from "@clerk/nextjs";
import { BoardList } from "./BoardList";

// export interface FILE {
//   archive: boolean;
//   createdBy: string;
//   document: string;
//   fileName: string;
//   teamId: string;
//   whiteboard: string;
//   _id: string;
//   _creationTime: number;
// }

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string
  }
}

function FileList({
  searchParams
}: DashboardPageProps) {
  // const { fileList_, setFileList_ } = useContext(FileListContext);
  // const [fileList, setFileList] = useState<FILE[] | null>(null);
    const { organization } = useOrganization()
  const [loading, setLoading] = useState(true);
  // const { user }: any = useKindeBrowserClient();
  // const router = useRouter();

  // useEffect(() => {
  //   setLoading(true);
  //   if (fileList_) {
  //     setFileList(fileList_);
  //     setLoading(false);
  //   }
  // }, [fileList_]);

  // const handleFileAction = (fileId: string, action: "archive" | "delete") => {
  //   console.log(`Action ${action} on file ${fileId}`);
  // };

  return (
    <div className="mt-10 relative">
      {/* {JSON.stringify(searchParams)} */}
      {!organization ? (

        <EmptyOrg />
      ) : (
        <BoardList
        orgId={organization.id}
        query={searchParams}
        />
      )}
    
      <div className="fixed bottom-10 lg:right-8 z-50 right-4">
        <NewButton />
      </div>
    </div>
  );
}

export default FileList;
