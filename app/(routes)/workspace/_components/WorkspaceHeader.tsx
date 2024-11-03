import { FileListContext } from "@/app/_context/FileListContext";
import { Button } from "@/components/ui/button";
import { Link, Save } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
// import { FILE } from "../../dashboard/_components/FileList";

export interface FILE {
  archive: boolean;
  createdBt: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteboard: string;
  _id: string;
  _creationTime: number;
}

function WorkspaceHeader({ onSave }: any) {
  const fileListContext = useContext(FileListContext);
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const [fileList, setFileList] = useState<any>();

  useEffect(() => {
    fileList_ && setFileList(fileList_);
    console.log(fileList_);
  }, [fileList_]);

  return (
    <div className="p-3 border-b border-gray-300 flex justify-between items-center">
      <div className="flex gap-10 items-center">
        {/* <Image src={"/logo-1.png"} alt="logo" height={40} width={40} /> */}
        {/* <h1 className="font-bold text-2xl">Ero.io</h1> */}
        {fileList &&
          fileList.map((file: FILE, index: number) => (
            <h2
              key={index}
              className="font-semibold text-md sm:text-xs md:text-xl lg:text-2xl"
            >
              File Name:{file.fileName}
            </h2>
          ))}
      </div>
      <div className="flex items-center gap-4">
        <Button
          className="h-8 text-[12px]
        gap-2 bg-black hover:bg-gray-700"
          onClick={() => onSave()}
        >
          <Save className="h-4 w-4" /> Save{" "}
        </Button>
        {/* <Button
          className="h-8 text-[12px]
        gap-2 bg-blue-600 hover:bg-blue-700"
        >
          Share <Link className="h-4 w-4" />{" "}
        </Button> */}
      </div>
    </div>
  );
}

export default WorkspaceHeader;
