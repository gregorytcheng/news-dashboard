import React, { useContext } from "react";
import { Grid, Icon } from "semantic-ui-react";
import IndexTableEntry from "./IndexTableEntry";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder, getItemStyle, getListStyle } from "./../../utils/DragUtils";
import IndexContext from "../../contexts/IndexContext";

const IndexTable = () => {
  const { indexOrder, setIndexOrder, indexData } = useContext(IndexContext);

  const onDragEnd = (result) => {
    // If the result is dropped outside of the list, do nothing
    if (!result.destination) {
      return;
    }

    const newIndices = reorder(
      indexOrder,
      result.source.index,
      result.destination.index
    );

    setIndexOrder(newIndices);
  };

  return (
    <>
      {indexData !== undefined ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Grid
            divided
            stackable
            columns={indexOrder.length}
            style={{ paddingTop: "3em", paddingBottom: "3em" }}
          >
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {indexOrder.map((item, index) => (
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
                              index={indexData[item.symbol]}
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
