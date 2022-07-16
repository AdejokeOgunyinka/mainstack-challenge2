import React from 'react';
import { MarkdownEditor } from 'components/MarkdownEditor/MarkdownEditor';

interface IEditorTextProps {
  onChange: (val:string) => void
}

export const EditorText = ({onChange}:IEditorTextProps) => {
  return (
    <MarkdownEditor onChange={(val) => onChange(val)} />
  );
};
