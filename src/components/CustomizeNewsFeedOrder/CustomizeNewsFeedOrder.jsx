import React, { useState, useContext } from "react";
import { Button } from "semantic-ui-react";
import NewsFeedContext from "../../contexts/NewsFeedContext";

const CustomizeNewsFeedOrder = () => {
  const { newsFeedOrder, setNewsFeedOrder } = useContext(NewsFeedContext);

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  return (
    <>
      <Button>Customize news feeds</Button>
    </>
  );
};

export default CustomizeNewsFeedOrder;
