import { createContext } from "react";

const IndexContext = createContext({
  indexOrder: [],
  setIndexOrder: () => {},
  indexData: undefined,
  setIndexData: () => {},
});

export default IndexContext;
