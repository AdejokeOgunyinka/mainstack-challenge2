import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, { useCallback, useMemo, useState } from 'react';
import {
  addBlockLinkElement,
  addBlockTextElement,
  addImageBlockElement,
  addMailingListElement,
  addPhoneNumberElement,
  addMediaBlockElement,
  addBlockTweetElement,
  addPdfBlockElement,
} from 'store/slices';
import {
  IImageBlock,
  IMailingList,
  IPhoneNumber,
  IMediaBlock,
  LinkData,
  IPdfBlock,
} from 'store/slices/types';
import { BlockType } from '../types';
import { EditorAudio } from './AudioEditor';
import { EditorImage } from './ImageEditor';
import { EditorLink } from './LinkEditor';
import { EditorMailList } from './MailListEditor';
import { EditorPdf } from './PdfEditor';
import { EditorPhoneList } from './PhoneList';
import { EditorText } from './TextEditor';
import { EditorTweet } from './TweetEditor';
import { EditorVideo } from './VideoEditor';

interface IBlockElement {
  [BlockType.Text]: string;
  [BlockType.Link]: LinkData[];
  [BlockType.Audio]: IMediaBlock;
  [BlockType.Tweet]: LinkData[];
  [BlockType.Image]: IImageBlock;
  [BlockType.MailingList]: IMailingList;
  [BlockType.PhoneNumberList]: IPhoneNumber;
  [BlockType.Video]: IMediaBlock;
  [BlockType.Pdf]: IPdfBlock;
}

const defaulState = {} as IBlockElement;

interface IEditorContentProps {
  onClose: () => void;
}

export const EditorContent = ({ onClose }: IEditorContentProps) => {
  const { currentEditorBlockElement } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const [state, setState] = useState<IBlockElement>(defaulState);

  const handleChange = useCallback(
    (val: any) => {
      setState((prev) => ({
        ...prev,
        [currentEditorBlockElement!]: val,
      }));
    },
    [currentEditorBlockElement]
  );

  const editor: Record<string, React.ReactNode> = useMemo(
    () => ({
      [BlockType.Text]: <EditorText onChange={handleChange} />,
      [BlockType.Link]: <EditorLink onChange={handleChange} />,
      [BlockType.PhoneNumberList]: <EditorPhoneList onChange={handleChange} />,
      [BlockType.MailingList]: <EditorMailList onChange={handleChange} />,
      [BlockType.Image]: <EditorImage onChange={handleChange} />,
      [BlockType.Video]: <EditorVideo onChange={handleChange} />,
      [BlockType.Audio]: <EditorAudio onChange={handleChange} />,
      [BlockType.Tweet]: <EditorTweet onChange={handleChange}/>,
      [BlockType.Pdf]: <EditorPdf onChange={handleChange}/>,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentEditorBlockElement]
  );

  const blockAction: Record<string, any> = {
    [BlockType.Text]: () => dispatch(addBlockTextElement(state.Text)),
    [BlockType.Link]: () => dispatch(addBlockLinkElement(state.Link)),
    [BlockType.Audio]: () => dispatch(addBlockTextElement(state.Text)),
    [BlockType.Image]: () => dispatch(addImageBlockElement(state.Image)),
    [BlockType.MailingList]: () =>
      dispatch(addMailingListElement(state.MailingList)),
    [BlockType.PhoneNumberList]: () =>
      dispatch(addPhoneNumberElement(state.PhoneNumberList)),
    [BlockType.Video]: () => dispatch(addMediaBlockElement({data:state.Video, blockType: BlockType.Video})),
    [BlockType.Audio]: () => dispatch(addMediaBlockElement({data:state.Audio, blockType: BlockType.Audio})),
    [BlockType.Tweet]: () => dispatch(addBlockTweetElement(state.Tweet)),
    [BlockType.Pdf]: () => dispatch(addPdfBlockElement(state.Pdf)),
  };

  const handleSave = () => {
    blockAction[currentEditorBlockElement!]();
    onClose();
  };

  return (
    <Flex h="full" direction="column" justifyContent="space-between">
      <Box flex={1}>
        <Spacer h={4} />
        {currentEditorBlockElement && editor[currentEditorBlockElement]}
      </Box>

      <Button
        variant="secondary"
        w="full"
        borderRadius="full"
        onClick={handleSave}
      >
        Save
      </Button>
    </Flex>
  );
};
