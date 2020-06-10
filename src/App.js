import React from "react";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import { Container } from "semantic-ui-react";
import IndexContextProvider from "./components/providers/IndexContextProvider";

function App() {
  return (
    <IndexContextProvider>
      <Nav />
      <Container>
        <Homepage />
      </Container>
    </IndexContextProvider>
  );
}

export default App;
