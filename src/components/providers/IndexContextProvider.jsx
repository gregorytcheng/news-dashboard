import React, { useState, useEffect } from "react";
import IndexContext from "../../contexts/IndexContext";
import { getIndexData } from "../../services/NewsFeedService";
import {
  IndexOrderDefault,
  INDEX_ORDER_LOCAL_STORAGE_KEY,
} from "../../constants/IndexConstants";

const IndexContextProvider = ({ children }) => {
  const [indexData, setIndexData] = useState(undefined);
  const [indexOrder, setIndexOrder] = useState(undefined);

  useEffect(() => {
    getIndexData()
      .then((data) => {
        setIndexData(data.results);
      })
      .catch((error) => console.log(error));
    setIndexOrder(
      JSON.parse(localStorage.getItem(INDEX_ORDER_LOCAL_STORAGE_KEY)) ??
        IndexOrderDefault
    );
  }, []);

  // Wrapper method to save the new index order to the browser's local storage
  // We're using JSON.stringify and JSON.parse because the localstorage API
  // must accept a string.
  const setIndexOrderAndPersist = (indexOrder) => {
    localStorage.setItem(
      INDEX_ORDER_LOCAL_STORAGE_KEY,
      JSON.stringify(indexOrder)
    );
    setIndexOrder(indexOrder);
  };

  const addToIndexOrder = (newIndex) => {
    const newIndexOrder = Array.from(indexOrder);
    newIndexOrder.push(newIndex);
    setIndexOrderAndPersist(newIndexOrder);
  };

  const removeFromIndexOrder = (indexToRemove) => {
    const newIndexOrder = indexOrder.filter(
      (index) => indexToRemove.symbol !== index.symbol
    );
    setIndexOrderAndPersist(newIndexOrder);
  };

  return (
    <IndexContext.Provider
      value={{
        indexOrder,
        setIndexOrder: setIndexOrderAndPersist,
        addToIndexOrder,
        removeFromIndexOrder,
        indexData,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export default IndexContextProvider;
