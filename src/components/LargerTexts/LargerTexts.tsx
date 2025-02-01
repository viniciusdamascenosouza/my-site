// interface LargerTexts {
//   largerText: string;
// }
import * as S from "./styled";


const LargerTexts = (largerText: string) => {
  return (
    <S.LargerTexts>
      <p>{largerText}</p>
    </S.LargerTexts>
  );
};

export default LargerTexts;
