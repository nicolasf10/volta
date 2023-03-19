import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Block from './Blocks/Block.js';

const ListContainer = styled.div`
    display: flex;
    font-size: 18px;
    background-color: #eee;
    flex-direction: column;
`

const ItemContainer = styled.div`
    background-color: #fff;
    border: 1px solid black;
    padding: 25px 70px;
    margin: 15px 50px;
`

function BlocksArea(props) {
    const [trip, setTrip] = useState(props.trip);

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    const defaultList = ["A", "B", "C", "D", "E"];
    // React state to track order of items
    const [itemList, setItemList] = useState(defaultList);
  
    // Function to update list on drop
    const handleDrop = (droppedItem) => {
      // Ignore drop outside droppable container
      if (!droppedItem.destination) return;
      var updatedList = [...itemList];
      // Remove dragged item
      const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
      // Add dropped item
      updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
      // Update State
      setItemList(updatedList);
    };
  
    return (
      <div className="App">
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="list-container">
            {(provided) => (
              <ListContainer
                className="list-container"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {itemList.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <ItemContainer
                        className="item-container"
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        {item}
                      </ItemContainer>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ListContainer>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
};

export default BlocksArea;
