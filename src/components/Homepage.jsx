import React from "react";
import IndexTable from "./IndexTable/IndexTable";
import CustomizeIndexOrder from "./CustomizeIndexOrder/CustomizeIndexOrder";
import NewsFeeds from "./NewsFeeds/NewsFeeds";

const Homepage = () => {
  return (
    <>
      <IndexTable style={{ paddingTop: "2em" }} />
      <NewsFeeds />
      <CustomizeIndexOrder />
    </>
  );
};

export default Homepage;
