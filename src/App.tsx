import Collection from "./Components/Collection.tsx";
import Header from "./Components/Header.tsx";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Collection />
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 90%;
`;
