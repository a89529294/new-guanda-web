import React from "react";
import Image, { StaticImageData } from "next/image";

import Card from "./Card";
import cx from "classix";

function ImageWithCard({
  img,
  title,
  desc,
  path,
  imgPos,
}: {
  img: StaticImageData;
  title: string;
  desc: string;
  path: string;
  imgPos: "left" | "right";
}) {
  return (
    <div className="flex items-start sm:h-screen-minus-nav sm:flex-col sm:gap-10">
      <Image
        src={img}
        alt=""
        className={cx(
          "w-3/5 max-w-none shrink-0 sm:order-none sm:-mx-8 sm:w-screen ",
          imgPos === "right" && "order-1"
        )}
      />
      <Card
        title={title}
        sub={desc}
        path={path}
        size="fluid"
        className={cx("mt-24 sm:m-0", imgPos === "left" ? "ml-16 mr-20" : "ml-20 mr-16")}
      />
    </div>
  );
}

export default ImageWithCard;
