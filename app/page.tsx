"use client";
import { Footer } from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

export default function Home() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log("--", user);
  }, [user]);

  return (
    <div className="flex flex-col">
      <div className="w-full sticky top-0 z-50">
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
