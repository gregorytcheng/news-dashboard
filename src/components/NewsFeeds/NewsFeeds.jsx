import React, { useState, useContext } from "react";
import NewsFeedContext from "../../contexts/NewsFeedContext";
import { Grid } from "semantic-ui-react";
import NewsFeed from "./NewsFeed";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder, getItemStyle, getListStyle } from "../../utils/DragUtils";

const NewsFeeds = () => {
  const { newsFeedOrder, setNewsFeedOrder } = useContext(NewsFeedContext);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newNewsFeedOrder = reorder(
      newsFeedOrder,
      result.source.index,
      result.destination.index
    );
    setNewsFeedOrder(newNewsFeedOrder);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid columns={3} divided stackable>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {newsFeedOrder.map((item, index) => (
                <Grid.Column key={item.source}>
                  <Draggable draggableId={item.source} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <NewsFeed title={item.name} source={item.source} />
                      </div>
                    )}
                  </Draggable>
                </Grid.Column>
              ))}
              {provided.placeholder}

              {/* <Grid.Column>
                  <NewsFeed title="CNBC" source="cnbc" />
                </Grid.Column>
                <Grid.Column>
                  <NewsFeed title="Aljazeera" source="aljazeera" />
                </Grid.Column>
                <Grid.Column>
                  <NewsFeed title="NPR" source="npr" />
                </Grid.Column> */}
            </div>
          )}
        </Droppable>
      </Grid>
    </DragDropContext>
  );
};

export default NewsFeeds;
