import React, { useState } from 'react';
import {
  Button as ChakraBtn,
  Box,
  Heading,
  Stack,
  Text,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactComponent as Add } from '../../assets/svgs/add.svg';
import SocialMediaIcons from '../SocialMediaIcons';
import { IHeader } from '../Header/types';
import { KnowYouT } from '../../views/onboarding/pages/KnowYou';
import DrawerModal from '../Modal';
import AppName from '../AppName';
import { Link } from 'react-router-dom';
import Colors from '../../constants/Colors';

const SocialMedia: React.FC<IHeader & KnowYouT> = ({ onUpdate }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  const handleRemove = (value: string) => {
    setSelected(selected.filter((el) => el !== value));
  };

  return (
    <Box pos={'relative'}>
      <Text
        fontSize={'14px'}
        pos={'absolute'}
        top={{ base: '-10vmin', md: '-7vmin' }}
        right={{ base: '0px', md: '-30vmin' }}
        as={'span'}
      >
        <Link to={'/welcome'}>Skip for now</Link>
      </Text>
      <Heading marginBottom={'8px'}>Social media links</Heading>
      <Text lineHeight={'22px'} fontSize={'14px'}>
        Add 5 of your social media links to showcase your work, recognition,
        personality and more!
      </Text>
      <Stack marginTop={'36px'}>
        <Box
          width={'100%'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          maxWidth={{ base: ' 335px', md: '504px' }}
        >
          <Box height={{ base: '' }}>
            {selected.map((el) => (
              <AppName
                selected={selected}
                handleRemove={handleRemove}
                name={el}
              />
            ))}
          </Box>
        </Box>
        <ChakraBtn
          _hover={{ border: '1px solid #E5E8F0' }}
          ref={btnRef}
          onClick={onOpen}
          fontWeight={'700'}
          borderRadius={'100px'}
          background={'#ffffff'}
          border={'1px solid #E5E8F0'}
          leftIcon={<Add />}
          minW={{ base: '335px', md: '504px' }}
          h={{ base: '40px', md: '48px' }}
        >
          <Text fontSize={'15px'}> Add links</Text>
        </ChakraBtn>
      </Stack>
      <HStack marginTop={'36px'} justifyContent={'space-between'}>
        {/*<Button*/}
        {/*  handleClick={() => onUpdate && onUpdate(-1)}*/}
        {/*  bg={'#E5E8F0'}*/}
        {/*  fontSize={'15px'}*/}
        {/*  minW={{ base: '159px', md: '246px' }}*/}
        {/*  width={'100%'}*/}
        {/*  h={{ base: '40px', md: '48px' }}*/}
        {/*  text={'Back'}*/}
        {/*/>*/}

        <ChakraBtn
          _hover={{ border: '1px solid #E5E8F0' }}
          onClick={() => onUpdate && onUpdate(-1)}
          fontWeight={'700'}
          borderRadius={'100px'}
          background={'#ffffff'}
          border={'1px solid #E5E8F0'}
          minW={{ base: '159px', md: '246px' }}
          h={{ base: '40px', md: '48px' }}
          bg={'#E5E8F0'}
        >
          <Text fontWeight={'lighter'} fontSize={'15px'}>
            {' '}
            Back
          </Text>
        </ChakraBtn>

        <Link to={'/welcome'}>
          {/*<Button*/}
          {/*  bg={'#91989E'}*/}
          {/*  fontSize={'15px'}*/}
          {/*  minW={{ base: '159px', md: '246px' }}*/}
          {/*  width={'100%'}*/}
          {/*  h={{ base: '40px', md: '48px' }}*/}
          {/*  text={'Continue'}*/}
          {/*/>*/}

          <ChakraBtn
            _hover={{ border: '1px solid #E5E8F0' }}
            fontWeight={'700'}
            background={Colors.gray300}
            borderRadius={'100px'}
            border={'1px solid #E5E8F0'}
            minW={{ base: '159px', md: '246px' }}
            h={{ base: '40px', md: '48px' }}
            color={Colors.white}
          >
            <Text fontWeight={'lighter'} fontSize={'15px'}>
              {' '}
              Continue
            </Text>
          </ChakraBtn>
        </Link>
      </HStack>

      <DrawerModal
        isOpen={isOpen}
        onClose={onClose}
        placement={'right'}
        headingText={'Select Social Media Icons'}
      >
        <SocialMediaIcons
          values={selected}
          updateSelection={setSelected}
          onConfirm={onClose}
        />
      </DrawerModal>
    </Box>
  );
};

export default SocialMedia;
