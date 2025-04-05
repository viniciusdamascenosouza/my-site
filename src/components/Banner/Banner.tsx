import useStore from "../../store/currentBanner";
import LargerTexts from "../LargerTexts/LargerTexts";
import * as S from "./styled";

const Banner = () => {
  const { banners, banner } = useStore();

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
                {/* <S.ArrowContainer>
                  <svg
                    width="200"
                    height="150"
                    viewBox="0 0 60 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="grad-vertical"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stop-color="#00FFF0" />
                        <stop offset="100%" stop-color="#008CFF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M30 0 V170 M30 170 L10 150 M30 170 L50 150"
                      stroke="url(#grad-vertical)"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </S.ArrowContainer> */}
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
                {/* <S.ArrowContainer>
                  <svg
                    width="200"
                    height="150"
                    viewBox="0 0 60 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="grad-vertical"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stop-color="#00FFF0" />
                        <stop offset="100%" stop-color="#008CFF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M30 0 V170 M30 170 L10 150 M30 170 L50 150"
                      stroke="url(#grad-vertical)"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </S.ArrowContainer> */}
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
                {/* <S.ArrowContainer>
                  <svg
                    width="200"
                    height="150"
                    viewBox="0 0 60 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="grad-vertical"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stop-color="#00FFF0" />
                        <stop offset="100%" stop-color="#008CFF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M30 0 V170 M30 170 L10 150 M30 170 L50 150"
                      stroke="url(#grad-vertical)"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </S.ArrowContainer> */}
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
