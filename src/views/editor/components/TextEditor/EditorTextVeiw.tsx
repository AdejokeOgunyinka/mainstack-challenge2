import React from 'react';
import { TextEditorData } from 'store/slices/types';
import MarkdownView from 'react-showdown';

interface IEditorTextVeiwProps {
  data: TextEditorData;
}

export const EditorTextVeiw = ({ data }: IEditorTextVeiwProps) => {
  const markdown = data?.value ?? '';
  return (
    <MarkdownView markdown={markdown} options={{ tables: true, emoji: true }} />
  );
};
