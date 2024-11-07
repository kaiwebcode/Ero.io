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
import { ClipLoader } from "react-spinners"; // Import the spinner

export interface FILE {
  archive: boolean;
  createdBy: string;
  document: string;
  fileName: string;
  teamId: string;
  whiteboard: string;
  _id: string;
  _creationTime: number;
}

function FileList() {
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const [fileList, setFileList] = useState<FILE[] | null>(null);
  const [loading, setLoading] = useState(true); // Loading state
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (fileList_) {
      setFileList(fileList_);
      setLoading(false); // Stop loading when data is fetched
    }
  }, [fileList_]);

  const handleFileAction = (fileId: string, action: "archive" | "delete") => {
    console.log(`Action ${action} on file ${fileId}`);
  };

  return (
    <div className="mt-10">
      {loading ? ( // Display loading animation if loading is true
        <div className="flex justify-center items-center h-64">
          {/* <ClipLoader size={50} color={"#4A90E2"} loading={loading} /> */}
          <div className="custom-loader"></div>
        </div>
      ) : fileList && fileList.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs leading-4 font-medium">
              <tr>
                <th className="px-6 py-3 text-left">File Name</th>
                <th className="px-6 py-3 text-left">Created At</th>
                <th className="px-6 py-3 text-left">Last Edited</th>
                <th className="px-6 py-3 text-left">Author</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {fileList.map((file: FILE, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => router.push(`/workspace/${file._id}`)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {file.fileName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {moment(file._creationTime).format("DD MMM YYYY")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {moment(file._creationTime).format("DD MMM YYYY")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user && (
                      <div className="flex items-center">
                        <Image
                          src={user?.picture}
                          alt="User avatar"
                          width={30}
                          height={30}
                          className="rounded-full mr-2"
                        />
                        {user?.email.split("@")[0]}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-gray-400 hover:text-gray-500 transition-colors duration-200">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => handleFileAction(file._id, "archive")}
                        >
                          <Archive className="h-4 w-4 mr-2" /> Archive
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleFileAction(file._id, "delete")}
                        >
                          <Trash className="h-4 w-4 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">
            No files yet. Create a new file to get started.
          </p>
        </div>
      )}
    </div>
  );
}

export default FileList;
