import React from "react";

function BackgroundTriangles() {
  return (
    <div className="absolute inset-0 -z-10 bg-black [clip-path:polygon(0_0,35%_0,100%_360px,100%_100%,calc(100%-400px)_100%,0_calc(100%-400px))]" />
  );
}

export default BackgroundTriangles;
