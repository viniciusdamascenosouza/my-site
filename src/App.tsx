import * as S from "./styles";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Stacks from "./components/Stacks/Stacks";
import Curriculum from "./components/Curriculum/Curriculum";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollButton from "./components/ScrollButton/ScrollButton";


function App() {
  return (
    <S.App>
      <Header />
      <S.Main>
        <Banner />
        <Stacks />
        <Projects />
        <Contact />
        <Curriculum />
        <ScrollButton />
      </S.Main>
    </S.App>
  );
}

export default App;
