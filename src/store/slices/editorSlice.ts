import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { BlockType } from 'views/editor/types';
import { BlockElement, IImageBlock, IMailingList, IPhoneNumber, IMediaBlock, LinkData, IPdfBlock } from './types';

interface IEditorSliceState {
  currentEditorBlockElement: BlockType | null;
  blockElements: BlockElement[];
}

const initialState: IEditorSliceState = {
  currentEditorBlockElement: null,
  blockElements: [],
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCurrentEditorBlockElement: (
      state,
      action: PayloadAction<BlockType | null>
    ) => {
      state.currentEditorBlockElement = action.payload;
    },
    addBlockTextElement: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const data = {
        id: uuidv4(),
        value: payload,
        blockType: BlockType.Text,
      };
      state.blockElements.push(data);
    },
    addBlockLinkElement: (state, action: PayloadAction<LinkData[]>) => {
      const { payload } = action;
      const data = {
        id: uuidv4(),
        value: payload,
        blockType: BlockType.Link,
      };
      state.blockElements.push(data);
    },
    addBlockTweetElement: (state, action: PayloadAction<LinkData[]>) => {
      const { payload } = action;
      const data = {
        id: uuidv4(),
        value: payload,
        blockType: BlockType.Tweet,
      };
      state.blockElements.push(data);
    },
    addPhoneNumberElement: (state, action: PayloadAction<IPhoneNumber>) => {
      const { payload } = action;
      const data = {
        id: uuidv4(),
        value: payload,
        blockType: BlockType.PhoneNumberList,
      };
      state.blockElements.push(data);
    },
    addMailingListElement: (state, action: PayloadAction<IMailingList>) => {
      const { payload } = action;
      const data = {
        id: uuidv4(),
        value: payload,
        blockType: BlockType.MailingList,
      };
      state.blockElements.push(data);
    },
    addImageBlockElement: (state, action: PayloadAction<IImageBlock>) => {
      const { payload } = action;
      const data = {
        id: uuidv4(),
        value: payload,
        blockType: BlockType.Image,
      };
      state.blockElements.push(data);
    },
    addPdfBlockElement: (state, action: PayloadAction<IPdfBlock>) => {
      const { payload } = action;
      const data = {
        id: uuidv4(),
        value: payload,
        blockType: BlockType.Pdf,
      };
      state.blockElements.push(data);
    },
    addMediaBlockElement: (state, action: PayloadAction<{data:IMediaBlock, blockType:BlockType }>) => {
      const { payload } = action;
      const data = {
        id: uuidv4(),
        value: payload.data,
        blockType: payload.blockType,
      };
      state.blockElements.push(data);
    },
    setBlockElements: (state, action: PayloadAction<BlockElement[]>) => {
      state.blockElements = action.payload;
    },
    deleteBlock:(state, action: PayloadAction<string>) => {
      state.blockElements = state.blockElements.filter((block) => block.id !== action.payload);
    },
    duplicateBlock:(state, action: PayloadAction<string>) => {
      let index = state.blockElements.findIndex((block) => block.id === action.payload);
      let block = state.blockElements[index]
      block = {
        ...block,
        id: uuidv4(),
      } as BlockElement
      state.blockElements.splice(index, 0, block)
    },
  },
});

export const {
  setCurrentEditorBlockElement,
  addBlockTextElement,
  setBlockElements,
  addBlockLinkElement,
  addPhoneNumberElement,
  addMailingListElement,
  addImageBlockElement,
  deleteBlock,
  duplicateBlock,
  addMediaBlockElement,
  addBlockTweetElement,
  addPdfBlockElement
} = editorSlice.actions;

export const editorReducer = editorSlice.reducer;
