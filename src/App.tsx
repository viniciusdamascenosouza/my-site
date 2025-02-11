import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import * as S from "./styles";
import Stacks from "./components/Stacks/Stacks";
import Curriculum from "./components/Curriculum/Curriculum";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <S.App>
      <Header />
      <Banner />
      <Stacks />
      <Contact />
      <Curriculum />
    </S.App>
  );
}

export default App;
