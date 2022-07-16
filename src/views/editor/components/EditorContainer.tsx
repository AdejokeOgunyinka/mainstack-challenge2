import React, { useCallback } from 'react';
import { useAppSelector } from 'hooks';
import { BlockElements } from './BlockElements';
import { EditorContent } from './EditorContent';


interface IEditorContainerProps {
  onClose: () => void
}

export const EditorContainer = ({onClose}:IEditorContainerProps) => {
  const { currentEditorBlockElement } = useAppSelector((state) => state.editor);

  const renderBody = useCallback(() => {
    return currentEditorBlockElement ? <EditorContent onClose={onClose} /> : <BlockElements />;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentEditorBlockElement]);

  return <>{renderBody()}</>;
};
