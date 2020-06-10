import React, { useEffect, useState } from "react";
import { getIndices } from "../../services/NewsFeedService";
import { Grid, Icon } from "semantic-ui-react";
import IndexTableEntry from "./IndexTableEntry";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder, getItemStyle, getListStyle } from "./../../utils/DragUtils";

const IndexTable = () => {
  const onDragEnd = (result) => {
    // If the result is dropped outside of the list, do nothing
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
  };

  const [indices, setIndices] = useState(undefined);
  const [items, setItems] = useState([
    {
      symbol: "GSPC",
      country: "us",
    },
    {
      symbol: "DJI",
      country: "us",
    },
    {
      symbol: "FTSE",
      country: "uk",
    },
    {
      symbol: "STOXX50E",
      country: "eu",
    },
    {
      symbol: "99001.SZ",
      country: "cn",
    },
    {
      symbol: "HSI",
      country: "hk",
    },
    {
      symbol: "N225",
      country: "jp",
    },
  ]);

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
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid
            divided
            stackable
            columns={items.length}
            style={{ paddingTop: "3em", paddingBottom: "3em" }}
          >
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {items.map((item, index) => (
                    <Grid.Column key={item.symbol}>
                      <Draggable draggableId={item.symbol} index={index}>
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
                            <IndexTableEntry
                              index={indices[item.symbol]}
                              countryCode={item.country}
                            />
                          </div>
                        )}
                      </Draggable>
                    </Grid.Column>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
        </DragDropContext>
      ) : (
        <Icon loading name="spinner" size="large" />
      )}
    </>
  );
};

export default IndexTable;
