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

  const [AddedProduct, setAddedProduct] = useState(0);

  const AddToCart = () => {
    setAddedProduct(count);
  };

  //delete add snackers
  const DeleteAddedProduct = () => {
    setCount(0);
    setAddedProduct(0);
  };
  return (
    <Wrapper>
      <Container>
        <Header
          AddedProduct={AddedProduct}
          DeleteAddedProduct={DeleteAddedProduct}
        />
        <Collection
          increment={increment}
          decrement={decrement}
          count={count}
          AddToCart={AddToCart}
        />
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
