import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className=" h-screen flex items-center justify-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-gray-950">{children}</div>;
}

export default layout;
