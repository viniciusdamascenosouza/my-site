import * as S from "./styled";

interface ImgProjectProps {
  file: string;
}

const ImgProject: React.FC<ImgProjectProps> = ({ file }) => {
  return <S.ImgDefault src={file} alt="project" className="d-block w-100" />;
};

export default ImgProject;
