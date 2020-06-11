import React, { useState, useContext } from "react";
import { Button, Portal } from "semantic-ui-react";
import NewsFeedContext from "../../contexts/NewsFeedContext";
import { Segment, Header } from "semantic-ui-react";

const CustomizeNewsFeedOrder = () => {
  const {
    newsFeedOrder,
    setNewsFeedOrder,
    addToNewsFeedOrder,
    removeFromNewsFeedOrder,
    allNewsFeeds,
  } = useContext(NewsFeedContext);

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <>
      <Button onClick={openPopup}>Customize news feeds</Button>
      <Portal onClose={closePopup} open={popupOpen}>
        <Segment
          style={{
            left: "40%",
            position: "fixed",
            top: "10%",
            zIndex: 1000,
          }}
        >
          <Header>Customize news sources</Header>
          <p>
            Add or remove news sources here. You can also rearrange the news
            feeds on the dashboard.
          </p>
          {allNewsFeeds && (
            <div style={{ overflow: "scroll", height: "500px" }}>
              {allNewsFeeds.map((newsFeed) => {
                const newsFeedExistsInOrder = newsFeedOrder.find(
                  (newsFeedInOrder) => newsFeedInOrder.name === newsFeed.name
                );
                return (
                  <div
                    key={newsFeed.source}
                    style={{
                      backgroundColor: newsFeedExistsInOrder
                        ? "lightgrey"
                        : "white",
                      padding: "1em 0 1em 0",
                    }}
                    onClick={
                      newsFeedExistsInOrder
                        ? () => removeFromNewsFeedOrder(newsFeed)
                        : () => addToNewsFeedOrder(newsFeed)
                    }
                  >
                    {newsFeed.name}
                  </div>
                );
              })}
            </div>
          )}
        </Segment>
      </Portal>
    </>
  );
};

export default CustomizeNewsFeedOrder;
