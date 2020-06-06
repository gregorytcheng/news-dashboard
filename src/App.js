import React from "react";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <>
      <Nav />
      <Container>
        <Homepage />
      </Container>
    </>
  );
}

export default App;
