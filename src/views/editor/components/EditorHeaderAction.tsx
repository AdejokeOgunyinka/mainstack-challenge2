import { Button } from '@chakra-ui/react';
import { EditorHeader } from '../../../constants';
import { useAppDispatch, useAppSelector } from 'hooks';
import React from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { setCurrentEditorBlockElement } from 'store/slices';

export const EditorHeaderAction = () => {
  const { currentEditorBlockElement } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();
  const handleGoBack = () => {
    dispatch(setCurrentEditorBlockElement(null));
  };
  return (
    <Button onClick={handleGoBack} leftIcon={<ArrowBackIcon color="#131316" />}>
      Add {currentEditorBlockElement && EditorHeader[currentEditorBlockElement]}
    </Button>
  );
};
