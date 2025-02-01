
import useStore from "../../store/currentBanner";
import * as S from "./styled";

const LargerTexts = () => {
  const { banners, banner, setBanner } = useStore();

  const handleBannerChangeLargeText = () => {
    switch (banner) {
      case "presentation":
        return (
          <S.LargerTexts>
            <p>{banners.presentation.largeText}</p>
          </S.LargerTexts>
        );
      case "aboutMe":
        return (
          <S.LargerTexts>
            <p>{banners.aboutMe.largeText}</p>
          </S.LargerTexts>
        );
      case "future":
        return (
          <S.LargerTexts>
            <p>{banners.future.largeText}</p>
          </S.LargerTexts>
        );
      default:
        return null;
    }
  };

  return (
    handleBannerChangeLargeText()
  );
};

export default LargerTexts;
