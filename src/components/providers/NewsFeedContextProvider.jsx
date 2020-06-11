import React, { useState, useEffect } from "react";
import NewsFeedContext from "../../contexts/NewsFeedContext";
import {
  NewsFeedsOrderDefault,
  NEWS_FEED_ORDER_LOCAL_STORAGE_KEY,
} from "../../constants/NewsFeedConstants";
import { getSources } from "../../services/NewsFeedService";

const NewsFeedContextProvider = ({ children }) => {
  const [newsFeedOrder, setNewsFeedOrder] = useState([]);
  const [allNewsFeeds, setAllNewsFeeds] = useState([]);

  useEffect(() => {
    setNewsFeedOrder(
      JSON.parse(localStorage.getItem(NEWS_FEED_ORDER_LOCAL_STORAGE_KEY)) ??
        NewsFeedsOrderDefault
    );
    getSources().then((data) => {
      setAllNewsFeeds(data.results);
    });
  }, []);

  const setNewsFeedOrderAndPersist = (newsFeedOrder) => {
    localStorage.setItem(
      NEWS_FEED_ORDER_LOCAL_STORAGE_KEY,
      JSON.stringify(newsFeedOrder)
    );
    setNewsFeedOrder(newsFeedOrder);
  };

  const addToNewsFeedOrder = (newNewsFeed) => {
    const newNewsFeedOrder = Array.from(newsFeedOrder);
    newNewsFeedOrder.push(newNewsFeed);
    setNewsFeedOrderAndPersist(newNewsFeedOrder);
  };

  const removeFromNewsFeedOrder = (newsFeedToRemove) => {
    const newNewsFeedOrder = newsFeedOrder.filter(
      (newsFeed) => newsFeed.source !== newsFeedToRemove.source
    );
    setNewsFeedOrderAndPersist(newNewsFeedOrder);
  };

  return (
    <NewsFeedContext.Provider
      value={{
        newsFeedOrder,
        setNewsFeedOrder: setNewsFeedOrderAndPersist,
        addToNewsFeedOrder,
        removeFromNewsFeedOrder,
        allNewsFeeds,
      }}
    >
      {children}
    </NewsFeedContext.Provider>
  );
};

export default NewsFeedContextProvider;
