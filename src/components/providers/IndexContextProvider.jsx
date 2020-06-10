import React, { useState, useEffect } from "react";
import IndexContext from "../../contexts/IndexContext";
import { getIndexData } from "../../services/NewsFeedService";

const IndexContextProvider = ({ children }) => {
  const [indexData, setIndexData] = useState(undefined);
  const [indexOrder, setIndexOrder] = useState([
    {
      symbol: "GSPC",
      country: "us",
    },
    {
      symbol: "DJI",
      country: "us",
    },
    {
      symbol: "FTSE",
      country: "uk",
    },
    {
      symbol: "STOXX50E",
      country: "eu",
    },
    {
      symbol: "99001.SZ",
      country: "cn",
    },
    {
      symbol: "HSI",
      country: "hk",
    },
    {
      symbol: "N225",
      country: "jp",
    },
  ]);

  useEffect(() => {
    getIndexData()
      .then((data) => {
        setIndexData(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <IndexContext.Provider
      value={{ indexOrder, setIndexOrder, indexData, setIndexData }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export default IndexContextProvider;
