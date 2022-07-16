import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Text,
  Image,
  Box,
  IconButton,
  Icon,
  HStack,
} from '@chakra-ui/react';
import {
  DragDropContext,
  Droppable,
  DropResult,
  DroppableProvided,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import { BsEye } from 'react-icons/bs';
import {
  BlockElement,
  IImageBlockData,
  IMailingListData,
  IPhoneNumberData,
  IMediaBlockData,
  LinkEditorData,
  TextEditorData,
  IPdfBlockData,
} from 'store/slices/types';
import { contentCopyIcon, dragIndicator, editIcon } from 'assets/svgs';
import { BlockType } from '../types';
import { EditorTextVeiw } from './TextEditor';
import { EditorHeader } from '../../../constants';
import { useAppDispatch, useAppSelector } from 'hooks';
import { deleteBlock, duplicateBlock, setBlockElements } from 'store/slices';
import { EditorLinkView } from './LinkEditor';
import { EditorPhoneListView } from './PhoneList';
import { EditorMailListView } from './MailListEditor';
import { EditorImageView } from './ImageEditor';
import { DeleteIcon } from 'components/Icons';
import { useDispatch } from 'react-redux';
import { EditorVideoView } from './VideoEditor';
import { EditorAudioView } from './AudioEditor';
import { EditorTweetView } from './TweetEditor';
import { EditorPdfView } from './PdfEditor';

export interface IEditorItem {
  title: string;
  children: React.ReactNode;
  id: string;
  index: number;
  secondaryAction?: React.ReactNode;
  isShowEditActions?: boolean;
}

export const EditorItemDraggable = ({
  title,
  children,
  id,
  index,
  secondaryAction,
  isShowEditActions,
}: IEditorItem) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteBlock(id));
  };

  const onDuplicate = () => {
    dispatch(duplicateBlock(id));
  };
  return (
    <Draggable draggableId={id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <Accordion
          allowMultiple
          bg="white"
          ref={provided?.innerRef}
          // {...snapshot}
          {...provided?.draggableProps}
          {...provided?.dragHandleProps}
          marginBottom="4"
        >
          <AccordionItem
            className="accordion"
            borderRadius="lg"
            borderWidth={1}
          >
            <Flex alignItems="center">
              <Box pl="2">
                <Image
                  ref={provided?.innerRef}
                  pointerEvents="none"
                  src={dragIndicator}
                />
              </Box>
              <AccordionButton h="64px">
                <Flex flex="1" textAlign="left">
                  <Text noOfLines={1}>{title}</Text>
                </Flex>
                {secondaryAction && secondaryAction}
                <AccordionIcon />
              </AccordionButton>
            </Flex>
            <AccordionPanel
              pb={4}
              data-rbd-drag-handle-context-id={
                provided.dragHandleProps?.['data-rbd-drag-handle-context-id']
              }
              data-rbd-drag-handle-draggable-id="gibberish"
            >
              {children}
              {isShowEditActions && (
                <HStack justifyContent="center" w="full" mt="10" spacing={2}>
                  <IconButton
                    aria-label="view"
                    icon={<Image h="20px" w="20px" src={editIcon} />}
                    borderWidth={1}
                    borderRadius="full"
                    h="40px"
                    w="40px"
                    isDisabled
                  />
                  <IconButton
                    aria-label="view"
                    icon={
                      <Icon h="16px" color="primaryBlack" w="16px" as={BsEye} />
                    }
                    borderWidth={1}
                    borderRadius="full"
                    h="40px"
                    w="40px"
                    isDisabled
                  />
                  <IconButton
                    aria-label="copy"
                    icon={<Image h="20px" w="20px" src={contentCopyIcon} />}
                    borderWidth={1}
                    borderRadius="full"
                    h="40px"
                    w="40px"
                    onClick={onDuplicate}
                  />
                  <IconButton
                    aria-label="delete"
                    icon={<DeleteIcon />}
                    borderWidth={1}
                    borderRadius="full"
                    h="40px"
                    w="40px"
                    onClick={onDelete}
                  />
                </HStack>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </Draggable>
  );
};

export const EditorItemsViewer = () => {
  const {
    editor: { blockElements },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const onDragEnd = (dropResult: DropResult) => {
    const { destination, source } = dropResult;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const newItems = Array.from(blockElements);
    const [removed] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, removed);
    dispatch(setBlockElements(newItems));
  };

  const renderBlockItem = (block: BlockElement, index: number) => {
    switch (block.blockType) {
      case BlockType.Text:
        return (
          <EditorItemDraggable
            title={EditorHeader[block.blockType]}
            id={block.id}
            index={index}
            key={block.id}
            isShowEditActions
          >
            <EditorTextVeiw data={block as TextEditorData} />
          </EditorItemDraggable>
        );
      case BlockType.Link:
        return (
          <EditorItemDraggable
            title={EditorHeader[block.blockType]}
            id={block.id}
            index={index}
            key={block.id}
            isShowEditActions
          >
            <EditorLinkView data={block as LinkEditorData} />
          </EditorItemDraggable>
        );
      case BlockType.PhoneNumberList:
        return (
          <EditorItemDraggable
            title={EditorHeader[block.blockType]}
            id={block.id}
            index={index}
            key={block.id}
            isShowEditActions
          >
            <EditorPhoneListView data={block as IPhoneNumberData} />
          </EditorItemDraggable>
        );
      case BlockType.MailingList:
        return (
          <EditorItemDraggable
            title={EditorHeader[block.blockType]}
            id={block.id}
            index={index}
            key={block.id}
            isShowEditActions
          >
            <EditorMailListView data={block as IMailingListData} />
          </EditorItemDraggable>
        );
      case BlockType.Image:
        return (
          <EditorItemDraggable
            title={EditorHeader[block.blockType]}
            id={block.id}
            index={index}
            key={block.id}
            isShowEditActions
          >
            <EditorImageView data={block as IImageBlockData} />
          </EditorItemDraggable>
        );
      case BlockType.Video:
        return (
          <EditorItemDraggable
            title={EditorHeader[block.blockType]}
            id={block.id}
            index={index}
            key={block.id}
            isShowEditActions
          >
            <EditorVideoView data={block as IMediaBlockData} />
          </EditorItemDraggable>
        );
      case BlockType.Audio:
        return (
          <EditorItemDraggable
            title={EditorHeader[block.blockType]}
            id={block.id}
            index={index}
            key={block.id}
            isShowEditActions
          >
            <EditorAudioView data={block as IMediaBlockData} />
          </EditorItemDraggable>
        );
        case BlockType.Tweet:
        return (
          <EditorItemDraggable
            title={EditorHeader[block.blockType]}
            id={block.id}
            index={index}
            key={block.id}
            isShowEditActions
          >
            <EditorTweetView data={block as LinkEditorData} />
          </EditorItemDraggable>
        );
        case BlockType.Pdf:
        return (
          <EditorItemDraggable
            title={EditorHeader[block.blockType]}
            id={block.id}
            index={index}
            key={block.id}
            isShowEditActions
          >
            <EditorPdfView data={block as IPdfBlockData} />
          </EditorItemDraggable>
        );
      default:
        break;
    }
  };
  return (
    <Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided: DroppableProvided) => (
            <Box {...provided.droppableProps} ref={provided.innerRef}>
              {blockElements.map((editor, index) => {
                return renderBlockItem(editor, index);
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};
