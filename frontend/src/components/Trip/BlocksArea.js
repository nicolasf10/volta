import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Block from './Blocks/Block.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';

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
    const [hidden, setHidden] = useState([]);
    var defaultList = props.trip.blocks.map((x) => x);

    const [itemList, setItemList] = useState(defaultList);

    useEffect(() => {
        setTrip(props.trip);
        defaultList = props.trip.blocks.map((x) => x);
        setItemList(defaultList);
        
    }, [props.trip])
  
    // Function to update list on drop
    async function handleDrop (droppedItem) {
      // Ignore drop outside droppable container
      if (!droppedItem.destination) return;

      const tripRefGet = doc(db, "trips", props.id);
      const docSnap = await getDoc(tripRefGet);
      const currentTrip = docSnap.data();
      var updatedList = [...currentTrip.blocks];
      // Remove dragged item
      const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
      // Add dropped item
      updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
      // Update State
      setItemList(updatedList);
      console.log(updatedList);

      // updating the order on firebase
      console.log('handleDrop')
      console.log(updatedList.length)
      const tripRef = doc(db, "trips", props.id);
      await updateDoc(tripRef, { blocks: updatedList }).catch((error) => console.log(error.message));
      
      props.updateTrip({
        ...props.trip,
        blocks: updatedList
      })
    };

    const addToHidden = useCallback((newHidden) => {
      setHidden(oldHidden => [...oldHidden, newHidden]);
      const newItems = trip.blocks.filter(i => i.created !== newHidden);

      let defaultListDelete =newItems.map((x) => x);
      setItemList(defaultListDelete);
      setTrip(oldTrip => ({
        ...oldTrip,
        blocks: newItems
      }))

    })
  
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
                    <>
                    { !hidden.includes(item.created) ? 
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
                          <Block addToHidden={addToHidden} id={props.id} item={itemList[index]} trip={trip} />
                        </ItemContainer>
                      )}
                    </Draggable>
                      :
                      <></>
                    }
                    </>
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
