import { useState, useEffect } from "react";

const useGetDeviceType = () => {
  const [windowWidhth, setWindowWidthSize] = useState(window.innerWidth);
  const [deviceType, setDevice] = useState("PC");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidthSize(window.innerWidth);
      console.log(`window.innerWidth: ${window.innerWidth}`);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidhth > 745) {
      setDevice("PC");
    } else if (windowWidhth <= 744 && windowWidhth > 376) {
      setDevice("Tablet");
    } else if (windowWidhth <= 375) {
      setDevice("Mobile");
    }
    console.log(deviceType);
  }, [windowWidhth]);

  return deviceType;
};

export default useGetDeviceType;
