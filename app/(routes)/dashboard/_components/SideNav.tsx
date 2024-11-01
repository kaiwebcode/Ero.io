import { Archive, ChevronDown, Flag, Github, MenuIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import SideNavTopSection, { TEAM } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottomSection from "./SideNavBottomSection";
import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FileListContext } from "@/app/_context/FileListContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function SideNav() {
  const { user }: any = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const [activeTeam, setActiveTeam] = useState<TEAM | any>();
  const convex = useConvex();
  const [totalFiles, setTotalFiles] = useState<Number>();
  const { fileList_, setFileList_ } = useContext(FileListContext);

  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);

  const onFileCreate = (fileName: string) => {
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archive: false,
      document: "",
      whiteboard: "",
    }).then(
      (resp) => {
        if (resp) {
          getFiles();
          toast("File created successfully!");
        }
      },
      (e) => {
        toast("Error while creating file");
      }
    );
  };

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });
    setFileList_(result);
    setTotalFiles(result?.length);
  };

  return (
    <div className=" flex flex-col border-r h-screen">
      {/* Mobile Sidebar - visible on small screens */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="m-4" variant="outline" size="icon">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-4">
            <div className="flex-1">
            <SideNavTopSection
              user={user}
              setActiveTeamInfo={(activeTeam: TEAM) =>
                setActiveTeam(activeTeam)
              }
              />
              </div>
              <div className="mt-60">
            <SideNavBottomSection
              totalFiles={totalFiles}
              onFileCreate={onFileCreate}
              />
              </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar - visible on medium and larger screens */}
      <div className="hidden md:flex h-full w-64 fixed p-6 border-r border-gray-200 flex-col ">
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
        <div className="mt-80">
        <SideNavBottomSection
          totalFiles={totalFiles}
          onFileCreate={onFileCreate}
          />
          </div>
      </div>
    </div>
  );
}

export default SideNav;
