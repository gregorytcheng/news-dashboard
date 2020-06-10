import { createContext } from "react";

const IndexContext = createContext({
  indexOrder: [],
  setIndexOrder: () => {},
  indexData: undefined,
});

export default IndexContext;
