import cx from "classix";
import Image from "next/image";

export default function RedCircle({
  image,
  label,
  subLabel,
  bold,
}: {
  image: any;
  label: string;
  subLabel?: string;
  bold?: boolean;
}) {
  return (
    <div className="grid justify-items-center gap-2.5">
      <Image src={image} alt="app" />
      <h2 className={cx("text-xl text-white", bold && "font-bold")}>{label}</h2>
      {subLabel ? <h3 className="-mt-2 text-[15px] text-tin">{subLabel}</h3> : null}
    </div>
  );
}
