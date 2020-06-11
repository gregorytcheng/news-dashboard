import React from "react";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import { Container } from "semantic-ui-react";
import IndexContextProvider from "./components/providers/IndexContextProvider";
import NewsFeedContextProvider from "./components/providers/NewsFeedContextProvider";

function App() {
  return (
    <IndexContextProvider>
      <NewsFeedContextProvider>
        <Nav />
        <Container>
          <Homepage />
        </Container>
      </NewsFeedContextProvider>
    </IndexContextProvider>
  );
}

export default App;
