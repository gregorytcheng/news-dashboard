import React from "react";
import { Grid } from "semantic-ui-react";
import NewsFeed from "./NewsFeed";
import IndexTable from "./IndexTable/IndexTable";

const Homepage = () => {
  return (
    <>
      <IndexTable style={{ paddingTop: "2em" }} />
      <Grid columns={3} divided stackable>
        <Grid.Row>
          <Grid.Column>
            <NewsFeed title="CNBC" source="cnbc" />
          </Grid.Column>
          <Grid.Column>
            <NewsFeed title="Aljazeera" source="aljazeera" />
          </Grid.Column>
          <Grid.Column>
            <NewsFeed title="NPR" source="npr" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Homepage;
