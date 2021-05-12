import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './card';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  width: 300px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f6fa;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ nums, index }) => {
  const [state, setState] = useState(nums);

  const reorder = (arr, rIndex, pIndex) => {
    const movedItem = arr.find((_, idx) => idx === rIndex);
    arr = arr.filter((_, idx) => idx !== rIndex);
    arr.splice(pIndex, 0, movedItem);
    return arr;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const {
      destination: { index: to },
    } = result;
    const {
      source: { index: from },
    } = result;

    if (from === to) return;

    const changed = reorder([...state], from, to);

    setState(changed);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='todo' index={index}>
        {(provided) => (
          <section ref={provided.innerRef} {...provided.DroppableProps}>
            <Container>
              {state.length &&
                state.map((num, idx) => (
                  <Draggable key={num} draggableId={String(num)} index={idx}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        key={idx}
                      >
                        <Card num={num}></Card>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </Container>
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
};
