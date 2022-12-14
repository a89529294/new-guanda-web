import React from "react";
import Image, { StaticImageData } from "next/image";
import cx from "classix";

import Card from "src/components/Card";

function ImageWithCard({
  img,
  title,
  desc,
  path,
  imgPos,
  className,
}: {
  img: StaticImageData;
  title: string;
  desc: string;
  path: string;
  imgPos: "left" | "right";
  className?: string;
}) {
  return (
    <div className={cx("flex items-start sm:h-screen-minus-nav sm:flex-col sm:gap-10", className)}>
      <Image
        src={img}
        alt=""
        className={cx(
          "w-3/5 max-w-none shrink-0 sm:order-none sm:w-screen ",
          imgPos === "right" && "order-1"
        )}
      />
      <Card
        title={title}
        sub={desc}
        path={path}
        size="fluid"
        className={cx("mt-24 sm:m-0 sm:px-8", imgPos === "left" ? "ml-16 mr-20" : "ml-20 mr-16")}
      />
    </div>
  );
}

export default ImageWithCard;
