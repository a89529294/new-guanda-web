import React from "react";

function UnderscoredText({ children }: { children: string }) {
  return (
    <h2 className="before-red-circle after-red-circle relative justify-self-start border-b border-light-red pb-2 text-2xl">
      {children}
    </h2>
  );
}

export default UnderscoredText;
