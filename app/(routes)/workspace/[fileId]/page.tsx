// "use client";

// import React, { useEffect, useState } from "react";
// import WorkspaceHeader from "../_components/WorkspaceHeader";
// import Editor from "../_components/Editor";
// import { useConvex } from "convex/react";
// import { api } from "@/convex/_generated/api";
// // import { FILE } from "../../dashboard/_components/FileList";
// import { Id } from "@/convex/_generated/dataModel"; // Adjust the path if necessary
// import Canvas from "../_components/Canvas";
// import { FileListContext } from "@/app/_context/FileListContext";

// function Workspace({ params }: { params: { fileId: string } }) {
//   const [triggerSave, setTriggerSave] = useState(false);
//   const convex = useConvex();
//   // const [fileData, setFileData] = useState<FILE | null>(null);

//   // // Define file list state for context
//   // const [fileList_, setFileList_] = useState<FILE[]>([]);

//   // const { fileId } = params;

//   // useEffect(() => {
//   //   if (fileId) {
//   //     console.log("FILEID", fileId);
//   //     getFileData(fileId as Id<"files">);
//   //   }
//   // }, [fileId]);

//   // const getFileData = async (fileId: Id<"files">) => {
//   //   const result = await convex.query(api.files.getFileById, {
//   //     _id: fileId,
//   //   });
//   //   setFileData(result);
//   //   setFileList_((prevList) => [...prevList, result]); // Add result to file list if needed
//   // };

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Provide file list and setter to context */}
//       <FileListContext.Provider 
//       // value={{ fileList_, setFileList_ }}
//       >
//         <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />
//       </FileListContext.Provider>

//       {/* Responsive Workspace Layout */}
//       <div className="min-h-screen flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
//         {/* Whiteboard/Canvas */}
//         <div className="flex flex-col h-full border-r border-gray-300 ">
//           {fileData && (
//             <Canvas
//               onSaveTrigger={triggerSave}
//               fileId={fileId}
//               fileData={fileData}
//             />
//           )}
//         </div>

//          {/* Document */}
//          <div className="flex flex-col h-full">
//           {fileData && ( // Check if fileData is not null
//             <Editor
//               onSaveTrigger={triggerSave}
//               fileId={fileId}
//               fileData={fileData}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Workspace;
import React from 'react'

function page() {
  return (
    <div>
      File
    </div>
  )
}

export default page

