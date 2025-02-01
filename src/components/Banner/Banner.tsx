import useStore from "../../store/currentBanner";
import LargerTexts from "../LargerTexts/LargerTexts";
import * as S from "./styled";

const Banner = () => {
  const { banners, banner, setBanner } = useStore();

  const handleBannerChange = () => {
    switch (banner) {
      case "presentation":
        return (
          <S.Banner>
            <S.FirstSection>
              <S.TextsBanner>
                <S.TextBanner>{banners.presentation.text}</S.TextBanner>
                <br />
                <S.TextBanner>
                  <S.StrongText>{banners.presentation.strong}</S.StrongText>
                </S.TextBanner>
              </S.TextsBanner>
              <S.ImageBanner
                src={banners.presentation.img}
                alt="imagem pessoa tecnológica"
              />
            </S.FirstSection>
            <LargerTexts />
          </S.Banner>
        );
      case "aboutMe":
        return (
          <S.Banner>
            <S.FirstSection>
              <S.TextsBanner>
                <S.TextBanner>{banners.aboutMe.text}</S.TextBanner>
                <br />
                <S.TextBanner>
                  <S.StrongText>{banners.aboutMe.strong}</S.StrongText>
                </S.TextBanner>
              </S.TextsBanner>
              <S.ImageBanner
                src={banners.aboutMe.img}
                alt="imagem pessoa tecnológica"
              />
            </S.FirstSection>
            <LargerTexts />
          </S.Banner>
        );
      case "future":
        return (
          <S.Banner>
            <S.FirstSection>
              <S.TextsBanner>
                <S.TextBanner>{banners.future.text}</S.TextBanner>
                <br />
                <S.TextBanner>
                  <S.StrongText>{banners.future.strong}</S.StrongText>
                </S.TextBanner>
              </S.TextsBanner>
              <S.ImageBanner
                src={banners.future.img}
                alt="imagem pessoa tecnológica"
              />
            </S.FirstSection>
            <LargerTexts />
          </S.Banner>
        );
      default:
        return null;
    }
  };

  return <S.Banner>{handleBannerChange()}</S.Banner>;
};

export default Banner;
