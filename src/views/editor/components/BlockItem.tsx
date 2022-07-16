import React, { useState } from 'react';
import { Grid, Text, Stack, Icon, Flex, Image, HStack } from '@chakra-ui/react';
import { IBlockElement } from '../types';
import { IconType } from 'react-icons';
import { useAppDispatch } from 'hooks';
import { setCurrentEditorBlockElement } from 'store/slices';
import { ArrowForwardIcon } from '@chakra-ui/icons';
interface IBlockItemProps {
  data: IBlockElement;
}

export const BlockItem = ({ data }: IBlockItemProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setCurrentEditorBlockElement(data.blockType));
  };
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Grid
      templateColumns="20% 80%"
      borderColor="#E5E8F0"
      borderWidth={1}
      borderRadius="lg"
      height="80px"
      cursor="pointer"
      onClick={handleClick}
      _hover={{
        boxShadow: 'md',
      }}
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
    >
      <Flex justifyContent="center" alignItems="center">
        {typeof data.icon === 'string' ? (
          <Image src={data.icon} />
        ) : (
          <Icon as={data.icon as IconType} color="#4D5760" />
        )}
      </Flex>
      <HStack justifyContent="space-between" pr="4">
        <Stack justifyContent="center">
          <Text>{data.title}</Text>
          <Text fontSize="sm" color="#4D5760" fontWeight="light">
            {data.description}
          </Text>
        </Stack>
       {isFocus && <ArrowForwardIcon />}
      </HStack>
    </Grid>
  );
};
