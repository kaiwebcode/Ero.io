"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation, useQuery } from "convex/react";
import React, { useEffect } from "react";

import FileList from "./_components/FileList";
import AdBanner from "@/app/_components/AdBanner";
import Header from "./_components/Header";

function Dashboard() {
  const convex = useConvex();
  const { user }: any = useKindeBrowserClient();
  
  const createUser = useMutation(api.user.createUser);
  
  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, { email: user?.email });
    if (!result?.length) {
      createUser({
        name: user.given_name,
        email: user.email,
        image: user.picture,
      }).then((resp) => {
        console.log(resp);
      });
    }
  };

  return (
    
    <div className="flex flex-col p-2">
      <div className="flex-grow mt-4 ">
      <Header />
        <FileList />
      {/* <AdBanner
        data-ad-slot="4796371341"
        data-ad-format="auto"
        data-full-width-responsive="true"
        /> */}
        </div>
    </div>
  );
}

export default Dashboard;
