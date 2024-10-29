import React, { useEffect, useState } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/_components/FileList";

function Canvas({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE;
}) {
  const [whiteBoardData, setWhiteBoardData] = useState<any>(
    fileData?.whiteboard ? JSON.parse(fileData.whiteboard) : []
  );

  const updateWhiteboard = useMutation(api.files.updateWhiteboard);

  useEffect(() => {
    if (onSaveTrigger) {
      saveWhiteboard();
    }
  }, [onSaveTrigger]);

  const saveWhiteboard = () => {
    updateWhiteboard({
      _id: fileId,
      whiteboard: JSON.stringify(whiteBoardData), // Convert to string here
    }).then((resp) => console.log("Whiteboard data saved:", resp));
  };

  return (
    <div className="h-screen">
      {fileData && (
        <Excalidraw
          theme="dark"
          onChange={(excalidrawElements) =>
            setWhiteBoardData(excalidrawElements)
          }
          initialData={{
            elements: fileData?.whiteboard && JSON.parse(fileData?.whiteboard),
          }}
          UIOptions={{
            canvasActions: {
              saveToActiveFile: false,
            },
          }}
        >
          <WelcomeScreen>
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.Logo />
              <WelcomeScreen.Center.Heading>
                Welcome Screen Heading!
              </WelcomeScreen.Center.Heading>
            </WelcomeScreen.Center>
          </WelcomeScreen>
        </Excalidraw>
      )}
    </div>
  );
}

export default Canvas;
