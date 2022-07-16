import React, { useState } from 'react';
import { Icon } from '@chakra-ui/icons';
import { RiSearch2Line } from 'react-icons/ri';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text
} from '@chakra-ui/react';
import { EditorBlocks } from '../../../constants';
import { BlockItem } from './BlockItem';
import { useDebounce } from 'hooks';

export const BlockElements = () => {
  const [queryString, setQueryString] = useState('');
  const debouncedValue = useDebounce(queryString, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setQueryString(value);
  }
  const getFilteredList = (query:string) => {
    const filteredList = EditorBlocks.filter(({blocks}) => {
        const titles: string[] = blocks.map(block => block.title.toLowerCase());
        return titles.some(title => title.includes(query.toLowerCase()))
    }).map(item => ({
      ...item,
      blocks: item.blocks.filter(block => block.title.toLowerCase().includes(query.toLowerCase()))
    }))

    return filteredList
  }

  return (
    <Stack spacing={8} mt={4}>
      <InputGroup
        display="flex"
        alignItems="center"
        bg="#E5E8F0"
        borderRadius="full"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={RiSearch2Line} color="#91989E" />}
          mt="1.5"
        />
        <Input
          py="25px"
          borderRadius="full"
          placeholder="Search for block elements..."
          _placeholder={{
            color: '#91989E',
            fontWeight: 'light',
          }}
          onChange={handleChange}
        />
      </InputGroup>
      <Stack spacing={4}>
        {getFilteredList(debouncedValue).map(({ blocks, header }) => (
          <Box key={header}>
            <Text color='textPrimary.100' mb='3.5' fontWeight='light'>{header}</Text>
            <Stack spacing={4}>
              {blocks.map((block) => (
                <BlockItem key={block.description} data={block} />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
