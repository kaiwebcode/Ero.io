"use client";

import React, { useEffect, useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/_components/FileList";
import { Id } from "@/convex/_generated/dataModel"; // Adjust the path if necessary
import Canvas from "../_components/Canvas";

function Workspace({ params }: { params: { fileId: string } }) {
  const [triggerSave, setTriggerSave] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE | any>(null);

  const { fileId } = params;

  useEffect(() => {
    if (fileId) {
      console.log("FILEID", fileId);
      getFileData(fileId as Id<"files">);
    }
  }, [fileId]);

  const getFileData = async (fileId: Id<"files">) => {
    const result = await convex.query(api.files.getFileById, {
      _id: fileId,
    });
    setFileData(result);
  };

  return (
    <div className="flex flex-col h-screen">
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Responsive Workspace Layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Document */}
        <div className="flex flex-col h-full">
          <Editor
            onSaveTrigger={triggerSave}
            fileId={fileId}
            fileData={fileData}
          />
        </div>

        {/* Whiteboard/Canvas */}
        <div className="flex flex-col h-full border-l border-gray-300">
          <Canvas
            onSaveTrigger={triggerSave}
            fileId={fileId}
            fileData={fileData}
          />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
