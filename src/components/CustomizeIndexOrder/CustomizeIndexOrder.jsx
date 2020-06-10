import React, { useState, useContext } from "react";
import {
  Button,
  Portal,
  Segment,
  Header,
  Grid,
  Card,
  List,
} from "semantic-ui-react";
import IndexContext from "../../contexts/IndexContext";
import IndexTableEntry from "../IndexTable/IndexTableEntry";
import IndexTable from "../IndexTable/IndexTable";

const CustomizeIndexOrder = () => {
  const { indexOrder, setIndexOrder, indexData } = useContext(IndexContext);

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  console.log(indexData);

  return (
    <div>
      <Button onClick={openPopup}>Customize Indices</Button>
      <Portal onClose={closePopup} open={popupOpen}>
        <Segment
          style={{
            left: "40%",
            position: "fixed",
            top: "10%",
            zIndex: 1000,
          }}
        >
          <Header>Customize indices</Header>
          <p>
            Add or remove popular indices here. You can also rearrange the
            indices on the dashboard.
          </p>
          {indexData && (
            <div style={{ overflow: "scroll", height: "500px" }}>
              {Object.keys(indexData).map((indexName) => {
                const index = indexData[indexName];
                return <IndexTableEntry key={index.index_name} index={index} />;
              })}
            </div>
          )}

          <Button
            content="Close"
            onClick={closePopup}
            style={{ marginTop: "1em" }}
          />
        </Segment>
      </Portal>
    </div>
  );
};

export default CustomizeIndexOrder;
