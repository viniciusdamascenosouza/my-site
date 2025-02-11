import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import * as S from "./styles";
import Stacks from "./components/Stacks/Stacks";
import Curriculum from "./components/Curriculum/Curriculum";

function App() {
  return (
    <S.App>
      <Header />
      <Banner />
      <Stacks />
      <Curriculum />
    </S.App>
  );
}

export default App;
