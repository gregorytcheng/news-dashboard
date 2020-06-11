import { createContext } from "react";

const NewsFeedContext = createContext({
  newsFeedOrder: [],
  setNewsFeedOrder: () => {},
});

export default NewsFeedContext;
