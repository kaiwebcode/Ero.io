"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative min-w-[80px] h-[80px] rounded-xl overflow-hidden border-2 group cursor-pointer transition-all",
        isActive ? "border-blue-500" : "border-transparent hover:border-gray-300"
      )}
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

      {/* Text */}
      <div className="absolute bottom-1 left-1 right-1 z-20 px-1 text-center text-[10px] sm:text-xs font-medium text-white truncate">
        {name}
      </div>
    </div>
  );
};
