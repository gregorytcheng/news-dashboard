// Helps us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// Changes
export const getItemStyle = (isDragging, draggableStyle) => ({
  // Separates the draggable items from one another
  padding: "1em",

  // Change background color if dragging
  background: isDragging ? "lightgreen" : "white",

  // Other styles
  ...draggableStyle,
});

export const getListStyle = (isDraggingOver) => ({
  display: "flex",
  overflow: "auto",
});
