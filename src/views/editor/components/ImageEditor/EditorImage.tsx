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
  Textarea,
  Switch,
  Box,
} from '@chakra-ui/react';
import {
  DropResult,
  DraggableProvided,
  DraggableStateSnapshot,
  DraggableRubric,
} from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useMemo, useState } from 'react';

import { ImageLayoutEnum, ImageLayoutStyle } from './ImageLayoutStyle';
import { addIcon, deleteIcon } from 'assets/svgs';
import { useFormik } from 'formik';
import { EditorHeader } from 'constants/EditorBlocks';
import { EditorItemDraggableClone } from '../LinkEditor';
import { BlockType } from 'views/editor/types';
import { DragNDropContainer } from 'components/DragNDrop';
import { EditorItemDraggable } from '../EditorItemsContainer';
import { ImageUpload } from 'components';
import { IImage, IImageBlock } from 'store/slices/types';

interface IEditorImageProps {
  onChange: (data: IImageBlock) => void;
}

export const EditorImage = ({ onChange }: IEditorImageProps) => {
  const [images, setImages] = useState<IImage[]>([
    {
      id: uuidv4(),
      caption: '',
      buffer: '',
      alt: '',
      position: 0,
      link: '',
    },
  ]);
  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      description: '',
      layout: ImageLayoutEnum.Single,
    },
    onSubmit: (values) => {
      console.info(values);
    },
  });
  const renderClone = (
    provided: DraggableProvided,
    _snapshot: DraggableStateSnapshot,
    rubric: DraggableRubric
  ) => {
    const title = images[rubric.source.index].caption;
    const linkId = images[rubric.source.index].id;
    return (
      <EditorItemDraggableClone
        title={!!title ? title : EditorHeader[BlockType.Image]}
        id={linkId}
        index={rubric.source.index}
        key={linkId}
        provided={provided}
        secondaryAction={<Image src={deleteIcon} />}
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor={`title-${linkId}`}>Title</FormLabel>
            <Input
              id={`title-${linkId}`}
              type="text"
              data-refkey={linkId}
              // onChange={onChangeTitle}
              // value={getValues(linkId)?.title}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={`link-${linkId}`}>Link</FormLabel>
            <Input
              id={`link-${linkId}`}
              type="text"
              data-refkey={linkId}
              // onChange={onChangeLink}
              // value={getValues(linkId)?.link}
            />
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
    const newItems = Array.from(images);
    const [removed] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, removed);
    setImages(newItems);
  };

  const imageData = useMemo(
    () => ({
      position: 0,
      layout: values.layout,
      header: values.title,
      images: images,
    }),
    [values, images]
  );

  const onChangeImage = (imageId: string, value: string) => {
    setImages((prev) =>
      prev.map((image) => {
        if (image.id === imageId) {
          return {
            ...image,
            buffer: value,
          };
        } else {
          return image;
        }
      })
    );
  };
  const onChangeCaptionAndAlt = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const imageId = event.target.dataset.refkey;
    const { value, name } = event.target;

    setImages((prev) =>
      prev.map((image) => {
        if (image.id === imageId) {
          return {
            ...image,
            [name]: value,
          };
        } else {
          return image;
        }
      })
    );
  };

  const onDelete = (id: string) => {
    const newImages = images.filter((image) => image.id !== id);
    setImages(newImages);
  };

  const addImage = () => {
    const newImage: IImage = {
      id: uuidv4(),
      caption: '',
      alt: '',
      buffer: '',
      link: '',
      position: 0,
    };
    setImages((prev) => [...prev, newImage]);
  };

  useEffect(() => {
    if (imageData) {
      onChange(imageData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageData]);
  return (
    <Flex
      pb="9"
      h="full"
      flexDir="column"
      flex={1}
      justifyContent="space-between"
    >
      <Stack spacing={4}>
        <ImageLayoutStyle
          value={values.layout}
          onChange={(val) => setFieldValue('layout', val)}
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
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`Description`}>
                    Description (optional)
                  </FormLabel>
                  <Textarea
                    id={`Description`}
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                  />
                </FormControl>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box minH="200px">
          <DragNDropContainer onDragEnd={onDragEnd} renderClone={renderClone}>
            {images?.map((image, index) => (
              <EditorItemDraggable
                title={
                  !!image.caption
                    ? image.caption
                    : EditorHeader[BlockType.Image]
                }
                id={image.id}
                index={index}
                key={image.id}
                secondaryAction={
                  <Image onClick={() => onDelete(image.id)} src={deleteIcon} />
                }
              >
                <Stack spacing={4}>
                  <ImageUpload
                    onChange={(val) => onChangeImage(image.id, val)}
                    value={image.buffer}
                  />

                  <FormControl>
                    <FormLabel htmlFor={`Title`}>Caption (optional)</FormLabel>
                    <Input
                      onChange={onChangeCaptionAndAlt}
                      name="caption"
                      data-refkey={image.id}
                      value={image.caption}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor={`Description`}>
                      Alt text (optional)
                    </FormLabel>
                    <Textarea
                      name="alt"
                      onChange={onChangeCaptionAndAlt}
                      data-refkey={image.id}
                      value={image.alt}
                    />
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
          Add Image
        </Text>
      </Button>
    </Flex>
  );
};
