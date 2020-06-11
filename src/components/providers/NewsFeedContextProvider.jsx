import React, { useState, useEffect } from "react";
import NewsFeedContext from "../../contexts/NewsFeedContext";
import {
  NewsFeedsOrderDefault,
  NEWS_FEED_ORDER_LOCAL_STORAGE_KEY,
} from "../../constants/NewsFeedConstants";

const NewsFeedContextProvider = ({ children }) => {
  const [newsFeedOrder, setNewsFeedOrder] = useState([]);

  useEffect(() => {
    setNewsFeedOrder(
      JSON.parse(localStorage.getItem(NEWS_FEED_ORDER_LOCAL_STORAGE_KEY)) ??
        NewsFeedsOrderDefault
    );
  }, []);

  const setNewsFeedOrderAndPersist = (newsFeedOrder) => {
    localStorage.setItem(
      NEWS_FEED_ORDER_LOCAL_STORAGE_KEY,
      JSON.stringify(newsFeedOrder)
    );
    setNewsFeedOrder(newsFeedOrder);
  };

  return (
    <NewsFeedContext.Provider
      value={{ newsFeedOrder, setNewsFeedOrder: setNewsFeedOrderAndPersist }}
    >
      {children}
    </NewsFeedContext.Provider>
  );
};

export default NewsFeedContextProvider;
