import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  DropResult,
  DraggableProvided,
  DraggableStateSnapshot,
  DraggableRubric,
} from 'react-beautiful-dnd';
import {
  Box,
  Button,
  Image,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
} from '@chakra-ui/react';
import { addIcon, dragIndicator } from 'assets/svgs';
import { LinkData } from 'store/slices/types';
import { EditorItemDraggable, IEditorItem } from '../EditorItemsContainer';
import { BlockType } from 'views/editor/types';
import { EditorHeader } from 'constants/EditorBlocks';
import { DragNDropContainer } from 'components/DragNDrop';
import {deleteIcon} from 'assets/svgs';

interface IEditorItemDraggableCloneProps extends IEditorItem {
  provided: DraggableProvided;
}

export const EditorItemDraggableClone = ({
  title,
  children,
  id,
  index,
  provided,
  secondaryAction
}: IEditorItemDraggableCloneProps) => {
  return (
    <Accordion
      allowMultiple
      bg="white"
      ref={provided?.innerRef}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
      marginBottom="4"
    >
      <AccordionItem className="accordion" borderRadius="lg" borderWidth={1} bg='white'>
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
              <Text>{title}</Text>
            </Flex>
            {secondaryAction && secondaryAction}
            <AccordionIcon />
          </AccordionButton>
        </Flex>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

interface IEditorLinkProps {
  onChange: (links: LinkData[]) => void
}

export const EditorLink = ({ onChange }:IEditorLinkProps) => {
  const [links, setLinks] = useState<LinkData[]>([
    {
      id: uuidv4(),
      title: '',
      link: '',
    },
  ]);
  const onDragEnd = (dropResult: DropResult) => {
    const { destination, source } = dropResult;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    console.log(dropResult);
    const newItems = Array.from(links);
    const [removed] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, removed);
    setLinks(newItems)
  };

  const addLink = () => {
    const newLink = {
      id: uuidv4(),
      title: '',
      link: '',
    };
    setLinks((prev) => [...prev, newLink]);
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const linkId = event.target.dataset.refkey;
    const { value } = event.target;

    setLinks((prev) =>
      prev.map((link) => {
        if (link.id === linkId) {
          return {
            ...link,
            title: value,
          };
        } else {
          return link;
        }
      })
    );
  };
  const onChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    const linkId = event.target.dataset.refkey;
    const { value } = event.target;

    setLinks((prev) =>
      prev.map((link) => {
        if (link.id === linkId) {
          return {
            ...link,
            link: value,
          };
        } else {
          return link;
        }
      })
    );
    console.log(linkId);
  };
  const renderClone = (
    provided: DraggableProvided,
    _snapshot: DraggableStateSnapshot,
    rubric: DraggableRubric
  ) => {
    const title = links[rubric.source.index].title
    const linkId = links[rubric.source.index].id;
    return (
      <EditorItemDraggableClone
        title={
          !!title
            ? title
            : EditorHeader[BlockType.Link]
        }
        id={linkId}
        index={rubric.source.index}
        key={linkId}
        provided={provided}
        secondaryAction={<Image src={deleteIcon}/>}

      >
        <Stack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor={`title-${linkId}`}>Title</FormLabel>
                  <Input
                    id={`title-${linkId}`}
                    type="text"
                    data-refkey={linkId}
                    onChange={onChangeTitle}
                    value={getValues(linkId)?.title}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`link-${linkId}`}>Link</FormLabel>
                  <Input
                    id={`link-${linkId}`}
                    type="text"
                    data-refkey={linkId}
                    onChange={onChangeLink}
                    value={getValues(linkId)?.link}
                  />
                </FormControl>
              </Stack>
      </EditorItemDraggableClone>
    );
  };
  const getValues = (id:string): LinkData | undefined => {
    return links.find(link => link.id === id);
  }

  useEffect(() => {
    onChange(links)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[links])

  const onDelete = (id: string) => {
    const newLinks = links.filter(link => link.id !== id);
    setLinks(newLinks);
  }
  return (
    <Flex
      pb="9"
      h="full"
      flexDir="column"
      flex={1}
      justifyContent="space-between"
    >
      <Box minH="200px">
        <DragNDropContainer onDragEnd={onDragEnd} renderClone={renderClone}>
          {links?.map((link, index) => (
            <EditorItemDraggable
              title={!!link.title ? link.title : EditorHeader[BlockType.Link]}
              id={link.id}
              index={index}
              key={link.id}
              secondaryAction={<Image onClick={() => onDelete(link.id)} src={deleteIcon}/>}
            >
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor={`title-${link.id}`}>Title</FormLabel>
                  <Input
                    id={`title-${link.id}`}
                    type="text"
                    data-refkey={link.id}
                    onChange={onChangeTitle}
                    value={getValues(link.id)?.title}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`link-${link.id}`}>Link</FormLabel>
                  <Input
                    id={`link-${link.id}`}
                    type="text"
                    data-refkey={link.id}
                    onChange={onChangeLink}
                    value={getValues(link.id)?.link}
                  />
                </FormControl>
              </Stack>
            </EditorItemDraggable>
          ))}
        </DragNDropContainer>
      </Box>
      <Button
        variant="outline"
        w="full"
        p="3"
        borderRadius="full"
        display="flex"
        onClick={addLink}
        leftIcon={ <Image src={addIcon} />}
      >
        <Text flex={1}>Add links</Text>
      </Button>
    </Flex>
  );
};
