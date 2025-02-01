import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import * as S from "./styles";
import Stacks from "./components/Stacks/Stacks";

function App() {
  return (
    <S.App>
      <Header />
      <Banner />
      <Stacks />
    </S.App>
  );
}

export default App;
