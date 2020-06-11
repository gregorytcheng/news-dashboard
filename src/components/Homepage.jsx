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
      <div style={{ paddingTop: "1em" }}>
        <CustomizeIndexOrder />
        <CustomizeNewsFeedOrder />
      </div>
    </>
  );
};

export default Homepage;
