import React, { useEffect, useState } from 'react';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
// import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import './markdown.css';
import { Box } from '@chakra-ui/react';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

interface IMarkdownEditor {
  defaultValue?: string;
  onChange: (val: string) => void;
}

export const MarkdownEditor = ({ defaultValue, onChange }: IMarkdownEditor) => {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : '');
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  useEffect(() => {
    onChange(value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);


  return (
    <Box  className="container">
       <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        childProps={{
          writeButton: {
            tabIndex: -1,
          },
        }}
      />
    </Box>
  );
};
