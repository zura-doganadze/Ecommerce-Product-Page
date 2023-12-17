import Collection from "./Components/Collection.tsx";
import Header from "./Components/Header.tsx";
import styled from "styled-components";

import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Wrapper>
      <Container>
        <Header count={count} />
        <Collection increment={increment} decrement={decrement} count={count} />
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
