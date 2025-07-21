"use client";

import {
  ChevronDown,
  LayoutDashboard,
  LayoutGrid,
  LogOut,
  Settings,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import logo from "@/public/ero.io (1).png";
import { useUser, SignOutButton, OrganizationSwitcher } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import { NewButton } from "./NewButton";
import { List } from "./list";
import { useOrganization } from "@clerk/nextjs";
import Link from "next/link";

export interface TEAM {
  createdBy: string;
  teamName: string;
  _id: string;
}

function SideNavTopSection({ setActiveTeamInfo }: any) {
  const { user, isSignedIn } = useUser();
  const { organization } = useOrganization();
  const menu = [
    { id: 1, name: "Create Team", path: "/teams/create", icon: Users },
    { id: 2, name: "Settings", path: "", icon: Settings },
  ];

  
  const convex = useConvex();
  const [activeTeam, setActiveTeam] = useState<TEAM | null>(null);
  const [teamList, setTeamList] = useState<TEAM[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");

  // useEffect(() => {
  //   const fetchTeams = async () => {
  //     if (!user?.primaryEmailAddress?.emailAddress) return;
  //     const result = await convex.query(api.teams.getTeam, {
  //       email: user.primaryEmailAddress.emailAddress,
  //     });
  //     setTeamList(result);
  //     if (result.length > 0) setActiveTeam(result[0]);
  //     setIsLoading(false);
  //   };

  //   fetchTeams();
  // }, [user]);

  // useEffect(() => {
  //   if (activeTeam) setActiveTeamInfo(activeTeam);
  // }, [activeTeam]);

  // if (!isSignedIn || !user) return null;

  // const displayName =
  //   user.firstName || user.username || user.fullName || "User";

  // const onMenuClick = (item: any) => {
  //   if (item.path) router.push(item.path);
  // };

  return (
    <div className="relative h-full text-gray-900 space-y-4">
      {/* Logo */}
      <div className="flex items-center gap-3 ">
        <Image
          src={logo}
          width={60}
          height={40}
          alt="logo"
          className="animate-bounce"
        />
        <h1 className="text-3xl font-bold tracking-tight">Ero.io</h1>
      </div>

      {/* Organization */}
      {organization && (
        <div className="relative w-full h-14 rounded-lg overflow-hidden ">
          <Image
            src={organization.imageUrl}
            alt={organization.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center px-3">
            <span className="text-white text-sm font-medium truncate">
              {organization.name}
            </span>
          </div>
        </div>
      )}

      {/* Team Switcher */}
      {/* <Popover> */}
      {/* <PopoverTrigger asChild>
          <div className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer ">
            <h2 className="flex items-center font-semibold text-base">
              {activeTeam?.teamName || "Select a team"}
              <ChevronDown className="ml-1 h-4 w-4" />
            </h2>
          </div>
        </PopoverTrigger> */}

      <div className="relative z-50 overflow-visible">
        <OrganizationSwitcher
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              },
              organizationSwitcherTrigger: {
                padding: "10px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
          hidePersonal
        />
      </div>

      {/* <div className="space-y-1 w-full">
          <Button>
            <Link href="/">
            <LayoutDashboard className="h-4 w-4 "/>
            Team boards
            </Link>
          </Button>
        </div> */}

      {/* <PopoverContent className="ml-16 w-[280px] rounded-xl shadow-xl border">
          <div className="overflow-x-auto">
            <div className="flex gap-4">
              {isLoading ? (
                <div className="text-center w-full py-6 text-sm text-muted-foreground">
                  Loading...
                </div>
              ) : (
                <List />
              )}
            </div>
          </div>

          <Separator className="my-3 bg-slate-300" /> */}

      {/* Menu */}
      {/* <div className="space-y-1">
            {menu.map((item) => (
              <div
                key={item.id}
                onClick={() => onMenuClick(item)}
                className="flex items-center gap-2 p-2 text-sm font-medium hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </div>
            ))}

          </div>

          <Separator className="my-3 bg-slate-200" />

          {/* User Info */}

      {/* <div className="flex items-center gap-3 mt-2">
            <Image
              src={user.imageUrl}
              alt="user"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">{displayName}</p>
              <p className="text-xs text-gray-500">
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </PopoverContent> */}
      {/* </Popover> */}

      {/* All Files Button */}
      <Link href="/dashboard">
        <Button
          variant={favorites ? "ghost" : "secondary"}
          // asChild
          size="lg"
          className="w-full justify-start mt-2 font-normal rounded-lg px-2 border"
        >
          <LayoutGrid className="h-5 w-5" />
          Team boards
        </Button>
      </Link>
      <Link
        href={{
          pathname: "/dashboard",
          query: { favorites: true },
        }}
      >
        <Button
          variant={favorites ? "secondary" : "ghost"}
          // asChild
          size="lg"
          className="w-full justify-start mt-2 font-normal rounded-lg px-2 border"
        >
          <Star className="h-5 w-5" />
          Favorite boards
        </Button>
      </Link>

      <Separator className="my-4 bg-slate-300" />

      {/* Floating Plus Button */}
      {/* <div className="absolute bottom-4 right-4 z-50">
        <NewButton />
      </div> */}
    </div>
  );
}

export default SideNavTopSection;
