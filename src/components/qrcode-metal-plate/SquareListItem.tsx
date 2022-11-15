import { ReactNode } from "react";

export default function SquareListItem({ title, items }: { title: string; items: ReactNode[] }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-2.5">
      <span className="h-1.5 w-1.5 place-self-center bg-white"></span>
      <div className="text-2xl font-bold sm:text-xl">{title}</div>
      <ol className="col-start-2 list-inside list-decimal text-lg text-light-gray sm:text-base">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
