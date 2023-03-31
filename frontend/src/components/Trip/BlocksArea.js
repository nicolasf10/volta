import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Block from './Blocks/Block.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faTrash } from '@fortawesome/free-solid-svg-icons';

const ListContainer = styled.div`
    display: flex;
    font-size: 18px;
    /* background-color: #eee; */
    flex-direction: column;
    margin-top: 20px;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
  background: #F4F4F4;
  -webkit-box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.27); 
  box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.27);
  border-radius: 10px;

  &:hover {
    .handle {
      opacity: 1;
    }
  }

  &::selection {
    opacity: 1;
  }
`

const Handle = styled.div`
  color: #B0B0B0;
  margin: 10px;
  opacity: 0;
  transition: 0.1s opacity ease-in;
`


function BlocksArea(props) {
    const [trip, setTrip] = useState(props.trip);

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        
    }, [props.trip])

    // React state to track order of items
    console.log(props.trip)
    const defaultList = props.trip.blocks.map((x) => x);

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
      console.log(updatedList)
    };
  
    return (
      <div className="App">
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="list-container">
            {(provided) => {
              return (
                <ListContainer
                  className="list-container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {itemList.map((item, index) => (
                    <Draggable key={`drag-${index.toString()}`} draggableId={`drag-${index.toString()}`} index={index}>
                      {(provided) => (
                        <ItemContainer
                          className="item-container"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <Handle className='handle'>
                            <FontAwesomeIcon icon={faGripVertical}/>
                          </Handle>
                          <Block item={itemList[index]} trip={trip} />
                        </ItemContainer>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ListContainer>
              )
            }}
          </Droppable>
        </DragDropContext>
      </div>
    );
};

export default BlocksArea;
