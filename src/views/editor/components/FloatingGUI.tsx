import React from 'react';
import { Flex,  Button, Icon, chakra} from '@chakra-ui/react';
import { RiPaletteLine } from 'react-icons/ri';
import { IoIosAddCircleOutline } from 'react-icons/io';

interface IFloatingGUIProps {
  onClickAddElement: () => void;
  onClickCustomize: () => void;
}

export const FloatingGUI = ({
  onClickAddElement,
  onClickCustomize,
}: IFloatingGUIProps) => {
  return (
    <Flex
      justifyContent={{ base: 'flex-end', lg: 'center' }}
      align={'center'}
      w={['max-content',null,null, 'full']}
      maxW={{ base: 'full', lg: '450px', xl: '657px' }}
      minH={6}
      pos={'fixed'}
      // ml={{ lg: -4 }}
      right={{ base: 4, lg: 'unset' }}
      bottom={{ base: 24, lg: 12 }}
      zIndex={'modal'}
    >
      <Flex
        flexDir={'row'}
        justify={{ base: 'flex-end', lg: 'center' }}
        p={{ base: 0, lg: 2 }}
        w={{ base: 'full' }}
        h={'full'}
        maxW={{ lg: '450px', xl: '360px' }}
        gap={[2,null,null, 0]}
      >
        <Flex
          flex={[0,null, null, 1]}
          borderRadius={['full', null,null, 0]}
          borderRightWidth={1}
          justifyContent="center"
          alignItems="center"
          h={{ base: '48px' }}
          borderLeftRadius="full !important"
          borderRightColor='#1F2A35'
          bg='primaryBlack'
          color='white'

        >
          <Button
              // leftIcon={<Icon as={RiPaletteLine} border='1px solid red' />}
              w={{ base: '48px', lg: '180px' }}
              borderColor="blackGray"
              bg="primaryBlack"
              color="white"
              borderRight={{ base: 0, lg: '0.5px solid #1F2A35' }}
              fontSize="md"
              fontWeight="light"
              onClick={onClickCustomize}
              display='flex'
              alignItems='center'
            >
              <Icon as={RiPaletteLine} mr={[0,null, null, 2]}  />
              <chakra.span display={['none',null,null,'inline']}>
              Customize
              </chakra.span>
              
            </Button>
        </Flex>
        <Flex
          flex={[0,null, null, 1]}
          borderRadius={['full',null,null,  0]}
          borderRightRadius="full !important"
          borderLeftWidth={1}
          borderLeftColor='#1F2A35'
          justifyContent="center"
          alignItems="center"
          h={{ base: '48px' }}
          bg='primaryBlack'
          color='white'
        >
           <Button
              // leftIcon={<Icon as={IoIosAddCircleOutline} />}
              w={{ base: '48px', lg: '180px' }}
              // h={{ base: '48px' }}
              borderColor="blackGray"
              bg="primaryBlack"
              color="white"
              fontSize="md"
              fontWeight="light"
              onClick={onClickAddElement}
              display='flex'
              alignItems='center'
            >
             <Icon as={IoIosAddCircleOutline}  mr={[0,null, null, 2]} />
              <chakra.span display={['none',null,null,'inline']}>
              Add element
              </chakra.span>
            </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
