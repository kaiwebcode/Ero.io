"use client";

import React, { useEffect, useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/_components/FileList";
import { use } from "react";
import { Id } from "@/convex/_generated/dataModel"; // Adjust the path if necessary
import Canvas from "../_components/Canvas";

function Workspace({ params }: { params: { fileId: string } }) {
  const [triggerSave, setTriggerSave] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE | any>(null);

  // Use the params directly instead of using `use`
  const { fileId } = params; // Destructure the fileId directly from params

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
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Document */}
        <div>
          <Editor
            onSaveTrigger={triggerSave}
            fileId={fileId} // Use the destructured fileId
            fileData={fileData}
          />
        </div>

        {/* Whiteboard/canvas */}
        <div className="h-screen border-l ">
          <Canvas
            onSaveTrigger={triggerSave}
            fileId={fileId} // Use the destructured fileId
            fileData={fileData}
          />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
