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

import { addIcon, deleteIcon } from 'assets/svgs';
import { useFormik } from 'formik';
import { EditorHeader } from 'constants/EditorBlocks';
import { EditorItemDraggableClone } from '../LinkEditor';
import { BlockType } from 'views/editor/types';
import { DragNDropContainer } from 'components/DragNDrop';
import { EditorItemDraggable } from '../EditorItemsContainer';
import { IPdf, IPdfBlock } from 'store/slices/types';
import { PdfUploader } from './PdfUploader';

interface IEditorPdfProps {
  onChange: (data: IPdfBlock) => void;
}

export const EditorPdf = ({ onChange }: IEditorPdfProps) => {
  const [pdfs, setPdfs] = useState<IPdf[]>([
    {
      id: uuidv4(),
      pdfTitle: '',
      pdfBuffer: '',
      pdfname: '',
      position: 0,
    },
  ]);

  const { values, handleChange } = useFormik({
    initialValues: {
      header: '',
      description: '',
    },
    onSubmit: (values) => {
      console.info(values);
    },
  });

  const addPdf = () => {
    const newImage: IPdf = {
      id: uuidv4(),
      pdfTitle: '',
      pdfBuffer: '',
      pdfname: '',
      position: 0,
    };
    setPdfs((prev) => [...prev, newImage]);
  };

  const onDelete = (id: string) => {
    const newPdfs = pdfs.filter((pdf) => pdf.id !== id);
    setPdfs(newPdfs);
  };

  const renderClone = (
    provided: DraggableProvided,
    _snapshot: DraggableStateSnapshot,
    rubric: DraggableRubric
  ) => {
    const title = pdfs[rubric.source.index].pdfTitle;
    const linkId = pdfs[rubric.source.index].id;
    return (
      <EditorItemDraggableClone
        title={!!title ? title : EditorHeader[BlockType.Pdf]}
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
        
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={`link-${linkId}`}>Link</FormLabel>
            <Input
              id={`link-${linkId}`}
              type="text"
              data-refkey={linkId}
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
    const newItems = Array.from(pdfs);
    const [removed] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, removed);
    setPdfs(newItems);
  };

  const onChangePdfTitle = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const id = event.target.dataset.refkey;
    const { value, name } = event.target;

    setPdfs((prev) =>
      prev.map((pdf) => {
        if (pdf.id === id) {
          return {
            ...pdf,
            [name]: value,
          };
        } else {
          return pdf;
        }
      })
    );
  };

  const onChangePdf = (id: string, value: string) => {
    setPdfs((prev) =>
      prev.map((pdf) => {
        if (pdf.id === id) {
          return {
            ...pdf,
            pdfBuffer: value,
          };
        } else {
          return pdf;
        }
      })
    );
  };


  const pdfData = useMemo(
    () => ({
      position: 0,
      header: values.header,
      pdfs: pdfs,
    }),
    [values, pdfs]
  );

  useEffect(() => {
    if (pdfData) {
      onChange(pdfData);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdfData]);

  return (
    <Flex
      pb="9"
      h="full"
      flexDir="column"
      flex={1}
      justifyContent="space-between"
    >
      <Stack spacing={4}>
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
          {pdfs?.map((pdf, index) => (
            <EditorItemDraggable
              title={
                !!pdf.pdfTitle
                  ? pdf.pdfTitle
                  : EditorHeader[BlockType.Pdf]
              }
              id={pdf.id}
              index={index}
              key={pdf.id}
              secondaryAction={
                <Image onClick={() => onDelete(pdf?.id)} src={deleteIcon} />
              }
            >
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor={`pdfTitle`}>Title</FormLabel>
                  <Input
                    onChange={onChangePdfTitle}
                    name="pdfTitle"
                    data-refkey={pdf?.id}
                    value={pdf.pdfTitle}
                  />
                </FormControl>

                <PdfUploader
                onChange={(val) => onChangePdf(pdf.id, val)}
                value={pdf.pdfBuffer}
                />

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
        onClick={addPdf}
      >
        <Text fontWeight="light" flex={1}>
          Add more
        </Text>
      </Button>
    </Flex>
  );
};
