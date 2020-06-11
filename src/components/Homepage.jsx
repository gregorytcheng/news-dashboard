import React from "react";
import IndexTable from "./IndexTable/IndexTable";
import CustomizeIndexOrder from "./CustomizeIndexOrder/CustomizeIndexOrder";
import NewsFeeds from "./NewsFeeds/NewsFeeds";
import CustomizeNewsFeedOrder from "./CustomizeNewsFeedOrder/CustomizeNewsFeedOrder";

const Homepage = () => {
  return (
    <>
      <IndexTable style={{ paddingTop: "2em" }} />
      <NewsFeeds />
      <CustomizeIndexOrder />
      <CustomizeNewsFeedOrder />
    </>
  );
};

export default Homepage;
