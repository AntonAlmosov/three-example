import { useControls } from "leva";
import React from "react";

const Container = () => {
  const { bg } = useControls({ bg: "#ffffff" });
  return <div className="container" style={{ backgroundColor: bg }}></div>;
};

export default Container;
