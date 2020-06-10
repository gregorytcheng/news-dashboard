import React, { useState, useContext } from "react";
import { Button, Portal, Segment, Header } from "semantic-ui-react";
import IndexContext from "../../contexts/IndexContext";
import IndexTableEntry from "../IndexTable/IndexTableEntry";

const CustomizeIndexOrder = () => {
  const {
    indexOrder,
    indexData,
    addToIndexOrder,
    removeFromIndexOrder,
  } = useContext(IndexContext);

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

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
              {Object.keys(indexData).map((symbol) => {
                const indexExistsInOrder = indexOrder.find(
                  (index) => index.symbol === symbol
                );
                const index = indexData[symbol];
                return (
                  <div
                    key={index.index_name}
                    style={{
                      backgroundColor: indexExistsInOrder
                        ? "lightgreen"
                        : "darksalmon",
                      padding: "1em 0 1em 0",
                    }}
                    onClick={
                      indexExistsInOrder
                        ? () => removeFromIndexOrder({ symbol: symbol })
                        : () => addToIndexOrder({ symbol: symbol })
                    }
                  >
                    <IndexTableEntry index={index} />
                  </div>
                );
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
