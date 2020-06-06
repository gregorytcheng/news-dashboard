import React, { useEffect, useState } from "react";
import { getIndices } from "../services/NewsFeedService";
import { Grid, Icon } from "semantic-ui-react";
import IndexTableEntry from "./IndexTableEntry";

const IndexTable = () => {
  const [indices, setIndices] = useState(undefined);

  useEffect(() => {
    getIndices()
      .then((data) => {
        setIndices(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {indices !== undefined ? (
        <Grid divided stackable columns={7}>
          <Grid.Column>
            <IndexTableEntry index={indices["GSPC"]} countryCode="us" />
          </Grid.Column>
          <Grid.Column>
            <IndexTableEntry index={indices["DJI"]} countryCode="us" />
          </Grid.Column>
          <Grid.Column>
            <IndexTableEntry index={indices["FTSE"]} countryCode="uk" />
          </Grid.Column>
          <Grid.Column>
            <IndexTableEntry index={indices["STOXX50E"]} countryCode="eu" />
          </Grid.Column>
          <Grid.Column>
            <IndexTableEntry index={indices["99001.SZ"]} countryCode="cn" />
          </Grid.Column>
          <Grid.Column>
            <IndexTableEntry index={indices["HSI"]} countryCode="hk" />
          </Grid.Column>
          <Grid.Column>
            <IndexTableEntry index={indices["N225"]} countryCode="jp" />
          </Grid.Column>
        </Grid>
      ) : (
        <Icon loading name="spinner" size="large" />
      )}
    </>
  );
};

export default IndexTable;
