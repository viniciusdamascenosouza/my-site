import { useEffect } from "react";
import useStore from "./store/currentBanner";

const BackgroundSetter = () => {
  const { banners, banner } = useStore();

  useEffect(() => {
    document.body.style.backgroundColor =
      banners[banner as keyof typeof banners].bgColor;
  }, [banners, banner]);

  return null;
};

export default BackgroundSetter;
