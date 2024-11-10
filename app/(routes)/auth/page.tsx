import { LoginButton } from "@/app/_components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

function AuthPage() {
  return (
    <div className="flex h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-gray-950 w-full flex-col items-center justify-center bg-sky-500">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-2xl")}>
          🔐Auth
        </h1>
        <p className="text-white">A authentiction of Ero.io by Kai</p>
        <div>
          <LoginButton>
            <Button size={"lg"}>Sign In</Button>
          </LoginButton>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
