import React from "react";
import { List, Flag } from "semantic-ui-react";

const IndexTableEntry = ({ index, countryCode }) => (
  <List>
    <List.Item>
      {index.index_name} <Flag name={countryCode} />
    </List.Item>
    <List.Item> {index.last_price}</List.Item>
    <List.Item
      style={{
        color: index.percent_change[0] === "+" ? "green" : "red",
      }}
    >
      {index.percent_change} ({index.point_change})
    </List.Item>
  </List>
);

export default IndexTableEntry;
