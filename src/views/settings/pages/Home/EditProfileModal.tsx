import React, { useState } from 'react';
import {
  Box,
  Flex,
  chakra,
  Image,
  Stack,
  Text,
  Button as ButtonCmp,
  Input as InputCmp,
  FormControl,
  FormLabel,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  Accordion,
} from '@chakra-ui/react';
import { camera, editProfileBg, profilePic } from 'assets/images';
import { Colors, EditorHeader } from '../../../../constants';
import { deleteIcon2 } from 'assets/images';
import { deleteIcon } from 'assets/svgs';
import { Input } from 'components';
import TextareaComponent from 'components/Textarea';
import { v4 as uuidv4 } from 'uuid';
import { LinkData } from 'store/slices/types';
import {
  DropResult,
  DraggableProvided,
  DraggableStateSnapshot,
  DraggableRubric,
} from 'react-beautiful-dnd';
import { addIcon, dragIndicator } from 'assets/svgs';
import { DragNDropContainer } from 'components/DragNDrop';
import { EditorItemDraggable } from 'views/editor/components/EditorItemsContainer';
import { BlockType } from 'views/editor/types';

interface IEditorItem {
  title: string;
  children: React.ReactNode;
  id: string;
  index: number;
  secondaryAction?: React.ReactNode;
}

// interface IEditorLinkProps {
//   onChange: (links: LinkData[]) => void;
// }

interface IEditorItemDraggableCloneProps extends IEditorItem {
  provided: DraggableProvided;
}

export const EditorItemDraggableClone = ({
  title,
  children,
  id,
  index,
  provided,
  secondaryAction,
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
      <AccordionItem
        className="accordion"
        borderRadius="lg"
        borderWidth={1}
        bg="white"
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

const EditProfileModal = () => {
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
    setLinks(newItems);
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
  console.log('links', links);
  const renderClone = (
    provided: DraggableProvided,
    _snapshot: DraggableStateSnapshot,
    rubric: DraggableRubric
  ) => {
    const title = links[rubric.source.index].title;
    const linkId = links[rubric.source.index].id;
    return (
      <EditorItemDraggableClone
        title={!!title ? title : EditorHeader[BlockType.Link]}
        id={linkId}
        index={rubric.source.index}
        key={linkId}
        provided={provided}
        secondaryAction={<Image src={deleteIcon} />}
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor={`title-${linkId}`}>Title</FormLabel>
            <InputCmp
              id={`title-${linkId}`}
              type="text"
              data-refkey={linkId}
              onChange={onChangeTitle}
              value={getValues(linkId)?.title}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={`link-${linkId}`}>Link</FormLabel>
            <InputCmp
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
  const getValues = (id: string): LinkData | undefined => {
    return links.find((link) => link.id === id);
  };

  //   useEffect(() => {
  //     onChange(links);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [links]);

  const onDelete = (id: string) => {
    const newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
  };

  const IconCmp: React.FC<{
    src: string;
    alt: string;
  }> = ({ src, alt }) => {
    return (
      <>
        <Box
          height="30px"
          width={'30px'}
          borderRadius="50%"
          bgColor={Colors.black}
          opacity={'0.5'}
          display="flex"
          alignItems={'center'}
          justifyContent="center"
        >
          <chakra.img src={src} alt={alt} />
        </Box>
      </>
    );
  };

  const PillCmp: React.FC<{ text: string; bg: string; color: string }> = ({
    text,
    color,
    bg,
  }) => {
    return (
      <Flex justifyContent={'flex-end'} mb="1.5rem">
        <Text
          width="fit-content"
          px="8px"
          py="3px"
          borderRadius={'8px'}
          bgColor={bg}
          color={color}
        >
          {text}
        </Text>
      </Flex>
    );
  };
  return (
    <>
      <Box
        position={'relative'}
        py={'4rem'}
        display="flex"
        justifyContent={'center'}
        alignItems="center"
        backgroundImage={editProfileBg}
      >
        <Flex gap="10px">
          <IconCmp src={camera} alt="Upload" />
          <IconCmp src={deleteIcon2} alt="Delete" />
        </Flex>
        <Box
          position={'absolute'}
          height="120px"
          width="120px"
          border="4px solid #fff"
          backgroundImage={profilePic}
          backgroundSize={'contain'}
          borderRadius="50%"
          bottom="-60px"
          left="15px"
          display={'flex'}
          alignItems="center"
          justifyContent={'center'}
        >
          <IconCmp src={camera} alt="Upload" />
        </Box>
      </Box>
      <Box mt="2rem">
        <PillCmp text="Free" color="#007AFF" bg="#F0F6FC" />
        <Flex
          flexDirection={{
            lg: 'row',
            md: 'row',
            sm: 'column',
            base: 'column',
          }}
        >
          <Box
            mb={'1rem'}
            width="100%"
            mr={{
              lg: '0.5rem',
              md: '0.5rem',
              sm: '0',
              base: '0',
            }}
          >
            <Input
              handleChange={() => {
                console.log('typed');
              }}
              label="First Name"
              id="firstName"
              type="text"
            />
          </Box>
          <Box
            mb={'1rem'}
            width="100%"
            ml={{
              lg: '0.5rem',
              md: '0.5rem',
              sm: '0',
              base: '0',
            }}
          >
            <Input
              handleChange={() => {
                console.log('typed');
              }}
              label="Last Name"
              id="lastName"
              type="text"
            />
          </Box>
        </Flex>
        <Box
          mb={'1rem'}
          width="100%"
          mr={{
            lg: '0.5rem',
            md: '0.5rem',
            sm: '0',
            base: '0',
          }}
        >
          <Input
            handleChange={() => {
              console.log('typed');
            }}
            label="Email"
            id="email"
            type="text"
          />
        </Box>
        <Box
          mb={'1rem'}
          width="100%"
          mr={{
            lg: '0.5rem',
            md: '0.5rem',
            sm: '0',
            base: '0',
          }}
        >
          <TextareaComponent
            label="Bio"
            id="bio"
            size="lg"
            isRequired={true}
            count={250}
            value={'test'}
            handleChange={(e) => console.log('typed')}
          />
        </Box>
      </Box>
      {/* add link section */}
      <Flex flexDir="column" flex={1} justifyContent="space-between">
        <Box minH="200px">
          <DragNDropContainer onDragEnd={onDragEnd} renderClone={renderClone}>
            {links?.map((link, index) => (
              <EditorItemDraggable
                title={!!link.title ? link.title : EditorHeader[BlockType.Link]}
                id={link.id}
                index={index}
                key={link.id}
                secondaryAction={
                  <Image onClick={() => onDelete(link.id)} src={deleteIcon} />
                }
              >
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel htmlFor={`title-${link.id}`}>Title</FormLabel>
                    <InputCmp
                      id={`title-${link.id}`}
                      type="text"
                      data-refkey={link.id}
                      onChange={onChangeTitle}
                      value={getValues(link.id)?.title}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor={`link-${link.id}`}>Link</FormLabel>
                    <InputCmp
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
        <ButtonCmp
          variant="outline"
          w="full"
          p="3"
          borderRadius="full"
          display="flex"
          onClick={addLink}
        >
          <Image src={addIcon} />
          <Text flex={1}>Add links</Text>
        </ButtonCmp>
      </Flex>
    </>
  );
};

export default EditProfileModal;
