import useStore from "../../store/currentBanner";
import * as S from "./styled";

const Banner = () => {
  const { banner, setBanner } = useStore();

  const banners = {
    presentation: {
      text: "Venha conhecer minha jornada:",
      strong: "Eu sou Vinícius Damasceno e este é o meu mundo!",
      img: "../../assets/contextPresentation.png",
    },
    aboutMe: {
      text: "Explorando a interseção da criatividade e da tecnologia",
      strong: "para criar experiências digitais cativantes.",
      img: "../../assets/contextAboutMe.png",
    },
    future: {
      text: "Explorando a interseção da criatividade e da tecnologia",
      strong: "para criar experiências digitais cativantes.",
      img: "../../assets/contextFuture.png",
    },
  };

  const handleBannerChange = () => {
    switch (banner) {
      case "presentation":
        return (
          <S.Banner>
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
          </S.Banner>
        );
      case "aboutMe":
        return (
          <S.Banner >
            <S.TextsBanner>
              <S.TextBanner>{banners.aboutMe.text}</S.TextBanner>
              <br />
              <S.TextBanner>
                <S.StrongText >{banners.aboutMe.strong}</S.StrongText>
              </S.TextBanner>
            </S.TextsBanner>
            <S.ImageBanner
              src={banners.aboutMe.img}
              alt="imagem pessoa tecnológica"
            />
          </S.Banner>
        );
      case "future":
        return (
          <S.Banner>
            <S.TextsBanner>
              <S.TextBanner>{banners.future.text}</S.TextBanner>
              <br />
              <S.TextBanner>
                <S.StrongText>{banners.future.strong}</S.StrongText>
              </S.TextBanner>{" "}
            </S.TextsBanner>
            <S.ImageBanner
              src={banners.future.img}
              alt="imagem pessoa tecnológica"
            />
          </S.Banner>
        );
      default:
        return null;
    }
  };

  return <S.Banner>{handleBannerChange()}</S.Banner>;
};

export default Banner;
