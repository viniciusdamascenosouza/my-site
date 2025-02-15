import * as S from "./styles";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Stacks from "./components/Stacks/Stacks";
import Curriculum from "./components/Curriculum/Curriculum";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <S.App>
      <Header />
      <S.Main>
        <Banner />
        <Stacks />
        <Contact />
        <Curriculum />
      </S.Main>
    </S.App>
  );
}

export default App;
