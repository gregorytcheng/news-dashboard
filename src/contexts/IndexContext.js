import { createContext } from "react";

const IndexContext = createContext({
  indexOrder: [],
  setIndexOrder: () => {},
  addToIndexOrder: () => {},
  removeFromIndexOrder: () => {},
  indexData: undefined,
});

export default IndexContext;
