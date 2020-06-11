import { createContext } from "react";

const NewsFeedContext = createContext({
  newsFeedOrder: [],
  setNewsFeedOrder: () => {},
  addToNewsFeedOrder: () => {},
  removeFromNewsFeedOrder: () => {},
  allNewsFeeds: [],
});

export default NewsFeedContext;
