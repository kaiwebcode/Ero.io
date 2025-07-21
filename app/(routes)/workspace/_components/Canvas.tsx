import React, { useEffect, useState } from "react";
import {
  Excalidraw,
  Footer,
  MainMenu,
  WelcomeScreen,
} from "@excalidraw/excalidraw";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
// import { FILE } from "../../dashboard/_components/FileList";

function Canvas({
  onSaveTrigger,
  fileId,
  // fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  // fileData: FILE;
}) {
  // const [whiteBoardData, setWhiteBoardData] = useState<any>(
  //   fileData?.whiteboard ? JSON.parse(fileData.whiteboard) : []
  // );

  // const updateWhiteboard = useMutation(api.files.updateWhiteboard);

  // useEffect(() => {
  //   if (onSaveTrigger) {
  //     saveWhiteboard();
  //   }
  // }, [onSaveTrigger]);

  // const saveWhiteboard = () => {
  //   updateWhiteboard({
  //     _id: fileId,
  //     whiteboard: JSON.stringify(whiteBoardData), // Convert to string here
  //   }).then((resp) => console.log("Whiteboard data saved:", resp));
  // };

  return (
    <div className="min-h-screen p-3 md:w-full " style={{ height: "500px" }}>
      {/* {fileData && ( */}
        <Excalidraw
          // theme="dark"
          // onChange={(excalidrawElements) =>
          //   setWhiteBoardData(excalidrawElements)
          // }
          // initialData={{
          //   elements: fileData?.whiteboard && JSON.parse(fileData?.whiteboard),
          // }}
          // UIOptions={{
          //   canvasActions: {
          //     saveToActiveFile: false,
          //   },
          // }}
        >
        

          <WelcomeScreen>
            <WelcomeScreen.Hints.ToolbarHint>
              <p> ToolBar Hints </p>
            </WelcomeScreen.Hints.ToolbarHint>
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.HelpHint />

            <WelcomeScreen.Center>
              <WelcomeScreen.Center.Logo>Ero.IO</WelcomeScreen.Center.Logo>
              <WelcomeScreen.Center.Heading>
                Welcome Screen Ero.io
              </WelcomeScreen.Center.Heading>
              <WelcomeScreen.Center.Menu>
               
                 <WelcomeScreen.Center.MenuItemHelp />
              </WelcomeScreen.Center.Menu> 
             </WelcomeScreen.Center>
          </WelcomeScreen>

          <Footer />
    
        </Excalidraw>
      {/* )} */}
    </div>
  );
}

export default Canvas;
