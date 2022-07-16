import {
  Text,
  Button,
  Flex,
  Image,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Box,
  FormHelperText,
} from '@chakra-ui/react';
import {
  DropResult,
  DraggableProvided,
  DraggableStateSnapshot,
  DraggableRubric,
} from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useMemo, useState } from 'react';

import { AudioPlatformSelect } from './AudioPlatformSelect';
import { addIcon, deleteIcon } from 'assets/svgs';
import { useFormik } from 'formik';
import { EditorHeader } from 'constants/EditorBlocks';
import { EditorItemDraggableClone } from '../LinkEditor';
import { BlockType } from 'views/editor/types';
import { DragNDropContainer } from 'components/DragNDrop';
import { EditorItemDraggable } from '../EditorItemsContainer';
import { ILink, IMediaBlock, MediaPlatform } from 'store/slices/types';

interface IEditorImageProps {
  onChange: (data: IMediaBlock) => void;
}

export const EditorAudio = ({ onChange }: IEditorImageProps) => {
  const [links, setLinks] = useState<ILink[]>([
    {
      id: uuidv4(),
      position: 0,
      link: '',
    },
  ]);
  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: {
      header: '',
      position: 0, // TODO ; set position base on array index, for api integration
      platform: MediaPlatform.Spotify,
      type: 'audio',
    } as IMediaBlock,
    onSubmit: (values) => {
      console.info(values);
    },
  });
  const renderClone = (
    provided: DraggableProvided,
    _snapshot: DraggableStateSnapshot,
    rubric: DraggableRubric
  ) => {
    const linkId = links[rubric.source.index].id;
    return (
      <EditorItemDraggableClone
        title={EditorHeader[BlockType.Video]}
        id={linkId}
        index={rubric.source.index}
        key={linkId}
        provided={provided}
        secondaryAction={<Image src={deleteIcon} />}
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor={`title-${linkId}`}>Title</FormLabel>
            <Input id={`title-${linkId}`} type="text" data-refkey={linkId} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={`link-${linkId}`}>Link</FormLabel>
            <Input id={`link-${linkId}`} type="text" data-refkey={linkId} />
          </FormControl>
        </Stack>
      </EditorItemDraggableClone>
    );
  };

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
    setLinks(newItems);
  };

  const onChangeLink = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const linkId = event.target.dataset.refkey;
    const { value, name } = event.target;

    setLinks((prev) =>
      prev.map((link) => {
        if (link.id === linkId) {
          return {
            ...link,
            [name]: value,
          };
        } else {
          return link;
        }
      })
    );
  };

  const onDelete = (id: string) => {
    const newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
  };

  const addImage = () => {
    const newLink: ILink = {
      id: uuidv4(),
      link: '',
      position: 0,
    };
    setLinks((prev) => [...prev, newLink]);
  };

  const imageBlockData = useMemo(
    () => ({
      ...values,
      links,
    }),
    [values, links]
  );

  useEffect(() => {
    if (imageBlockData) {
      onChange(imageBlockData);
      console.log('imageBlockData', imageBlockData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageBlockData]);

  return (
    <Flex
      pb="9"
      h="full"
      flexDir="column"
      flex={1}
      justifyContent="space-between"
    >
      <Stack spacing={4}>
        <AudioPlatformSelect
          value={values.platform}
          onChange={(val) => setFieldValue('platform', val)}
        />
        <Accordion allowMultiple bg="white" marginBottom="4">
          <AccordionItem
            className="accordion"
            borderRadius="lg"
            borderWidth={1}
            bg="white"
          >
            <AccordionButton h="64px">
              <Flex flex="1" textAlign="left">
                <Text>Heading</Text>
              </Flex>
              <Switch size="sm" variant="primary" />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor={`Title`}>Title</FormLabel>
                  <Input
                    id={`Title`}
                    type="text"
                    name="header"
                    onChange={handleChange}
                    value={values.header}
                  />
                </FormControl>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box minH="200px">
          <DragNDropContainer onDragEnd={onDragEnd} renderClone={renderClone}>
            {links?.map((link, index) => (
              <EditorItemDraggable
                title={EditorHeader[BlockType.Audio]}
                id={link.id}
                index={index}
                key={link.id}
                secondaryAction={
                  <Image onClick={() => onDelete(link.id)} src={deleteIcon} />
                }
              >
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel htmlFor={`Link`}>Link </FormLabel>
                    <Input
                      onChange={onChangeLink}
                      name="link"
                      data-refkey={link.id}
                      value={link.link}
                    />
                    <FormHelperText  fontSize='12px'>
                        Paste playlist URL from either Spotify, Soundcloud, Apple music, Tidal and YouTube Music.
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </EditorItemDraggable>
            ))}
          </DragNDropContainer>
        </Box>
      </Stack>
      <Button
        variant="outline"
        w="full"
        p="3"
        borderRadius="full"
        leftIcon={<Image src={addIcon} />}
        onClick={addImage}
      >
        <Text fontWeight="light" flex={1}>
          Add More
        </Text>
      </Button>
    </Flex>
  );
};
