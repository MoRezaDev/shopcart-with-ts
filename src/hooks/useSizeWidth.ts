import { useState, useEffect } from "react";

const useSizeWidth = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [size]);

  return size;
};

export default useSizeWidth;
