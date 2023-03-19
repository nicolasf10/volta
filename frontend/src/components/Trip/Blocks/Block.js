import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
// import ItemTypes from './ItemTypes';

const ItemTypes = {
    BLOCK: 'block'
};
  

const Block = ({ id, content, index, moveBlock }) => {
  
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.BLOCK,
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move',
            }}
            >
            ♘
        </div>
    );
};

export default Block;
