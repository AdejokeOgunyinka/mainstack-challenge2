import { Box } from '@chakra-ui/react';
import React from 'react';
import {
  DragDropContext,
  Droppable,
  DropResult,
  DroppableProvided,
  DraggableChildrenFn,
} from 'react-beautiful-dnd';

interface IDragNDropContainerProps {
  onDragEnd: (dropResult: DropResult) => void;
  children: React.ReactNode;
  renderClone?: DraggableChildrenFn | undefined
}

export const DragNDropContainer = ({
  onDragEnd,
  children,
  renderClone
}: IDragNDropContainerProps) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="droppable"
        // renderClone={(provided, _snapshot, rubric) => (
        //   <Box
        //     bg="red"
        //     height="30px"
        //     ref={provided?.innerRef}
        //     // {...snapshot}
        //     {...provided?.draggableProps}
        //     {...provided?.dragHandleProps}
        //   >
        //     clone
        //   </Box>
        // )}
        renderClone={renderClone}
      >
        {(provided: DroppableProvided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};
