import { Button } from "@/components/ui/button";
import { Archive, Flag, Github } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Constant from "@/app/_constant/Constant";
import PricingDialog from "./PricingDialog";

function SideNavBottomSection({ onFileCreate, totalFiles }: any) {
  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      icon: Flag,
      path: "",
    },
    {
      id: 2,
      name: "Github",
      icon: Github,
      path: "",
    },
    {
      id: 3,
      name: "Archive",
      icon: Archive,
      path: "",
    },
  ];
  
  const [fileInput, setFileInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);


  const handleCreateClick = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulated delay
      await onFileCreate(fileInput);
    } finally {
      setLoading(false);
      setShowDialog(false); // Close dialog after loading is complete
    }
  };
  return (
    <div>
      {menuList.map((menu, index) => (
        <h2
          key={index}
          className="flex gap-2 p-1 px-2 text-[14px] 
        hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <menu.icon className="h-5 w-5" />
          {menu.name}
        </h2>
      ))}

      {/* Add New File Button */}
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button
            className="w-full bg-black hover:bg-gray-700 justify-start mt-3"
          >
            New File
          </Button>
        </DialogTrigger>
        {totalFiles < Constant.MAX_FREE_FILE ? (
          <DialogContent className="p-6 sm:p-8 max-w-md mx-auto bg-white rounded-md shadow-md">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl font-semibold text-center">
                Create New File
              </DialogTitle>
              <DialogDescription className="mt-2 text-center">
                <Input
                  placeholder="Enter File Name"
                  className="mt-3 w-full p-2 border rounded-md"
                  onChange={(e) => setFileInput(e.target.value)}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex justify-center mt-4">
              <DialogClose asChild>
                <Button
                  type="button"
                  className="bg-black hover:bg-gray-700 px-4 py-2 rounded text-white"
                  disabled={!(fileInput && fileInput.length > 3) || loading}
                  onClick={handleCreateClick}
                >
                  {loading ? "Loading..." : "Create"}
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        ) : (
          <PricingDialog />
        )}
      </Dialog>

      {/* Progress Bar */}
      <div className="h-4 w-full bg-gray-200 rounded-full mt-5">
        <div
          className={`h-4 bg-black rounded-full`}
          style={{ width: `${(totalFiles / 10) * 100}%` }}
        ></div>
      </div>

      <h2 className="text-[12px] mt-3">
        <strong>{totalFiles}</strong> out of{" "}
        <strong> {Constant.MAX_FREE_FILE}</strong> files used
      </h2>
      <h2 className="text-[12px] mt-1">
        Upgrade your plan for unlimited access.
      </h2>
    </div>
  );
}

export default SideNavBottomSection;
