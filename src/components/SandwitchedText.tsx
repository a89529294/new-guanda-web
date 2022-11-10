import React from "react";

function SandwitchedText({ children }: { children: string }) {
  return (
    <div className="mx-auto mb-3 w-fit">
      <div className="before-red-circle after-red-circle relative" />
      <h2 className="border-t border-b border-light-red pb-1 pt-0.5 text-2xl font-bold leading-tight text-white">
        {children}
      </h2>
      <div className="before-red-circle after-red-circle relative -translate-y-[1px]" />
    </div>
  );
}

export default SandwitchedText;
