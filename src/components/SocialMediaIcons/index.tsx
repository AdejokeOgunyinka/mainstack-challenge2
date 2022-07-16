import React from 'react';
import {
  Box,
  Text,
  Stack,
  Checkbox,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { ReactComponent as Search } from '../../assets/svgs/search.svg';
import { Input } from '@chakra-ui/react';
import { ReactComponent as Whatsapp } from '../../assets/svgs/whatsapp.svg';
import { ReactComponent as Instagram } from '../../assets/svgs/instagram.svg';
import { ReactComponent as Youtube } from '../../assets/svgs/youtube.svg';
import { ReactComponent as Tiktok } from '../../assets/svgs/tiktok.svg';
import { ReactComponent as LinkedIn } from '../../assets/svgs/linkedIn.svg';
import { ReactComponent as Facebook } from '../../assets/svgs/facebook.svg';
import { ReactComponent as Discord } from '../../assets/svgs/discord.svg';
import { Button } from '../index';
import { Icon } from '@chakra-ui/icons';

const SocialApp = [
  {
    id: 1,
    icon: <Whatsapp />,
    appName: 'Whatsapp',
  },
  {
    id: 2,
    icon: <Instagram />,
    appName: 'Instagram',
  },
  {
    id: 3,
    icon: <Youtube />,
    appName: 'Youtube',
  },
  {
    id: 4,
    icon: <Tiktok />,
    appName: 'Tiktok',
  },
  {
    id: 5,
    icon: <LinkedIn />,
    appName: 'LinkedIn',
    checked: false,
  },
  {
    id: 5,
    icon: <Facebook />,
    appName: 'Facebook',
  },
  {
    id: 5,
    icon: <Discord />,
    appName: 'Discord',
  },
];

export type MediaIconsT = {
  updateSelection: (data: string[]) => void;
  onConfirm: () => void;
  values: string[];
};

const SocialMediaIcons: React.FC<MediaIconsT> = ({
  onConfirm,
  values: selected,
  updateSelection,
}) => {
  const handleChange = (value: typeof SocialApp[0]) => () => {
    if (selected.includes(value.appName)) {
      if (updateSelection)
        updateSelection(selected.filter((el) => el !== value.appName));
    } else {
      if (updateSelection) updateSelection([...selected, value.appName]);
    }
  };

  return (
    <Box>
      <Text lineHeight={'22px'} color={'#4D5760'} fontSize={'14px'}>
        Add 5 of your top social medias like twitter, facebook, instagram or
        linkedin.
      </Text>
      <Stack
        pos={'relative'}
        borderRadius={'100px'}
        background={'#E5E8F0'}
        my={5}
      >
        <InputGroup
          display="flex"
          alignItems="center"
          bg="#E5E8F0"
          borderRadius="full"
        >
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={Search} color="#91989E" />}
            mt="1.5"
          />
          <Input
            py="25px"
            borderRadius="full"
            placeholder="Search social media names..."
            _placeholder={{
              color: '#91989E',
              fontWeight: 'light',
            }}
          />
        </InputGroup>
        {/*<Input*/}
        {/*  width={'100%'}*/}
        {/*  sx={{*/}
        {/*    '&::-webkit-input-placeholder': {*/}
        {/*      marginLeft: '8px',*/}
        {/*    },*/}

        {/*    '&::placeholder': {*/}
        {/*      marginLeft: '8px',*/}
        {/*    },*/}
        {/*  }}*/}
        {/*  borderRadius={'100px'}*/}
        {/*  placeholder={'search social media names'}*/}
        {/*/>*/}
        {/*<Search*/}
        {/*  style={{*/}
        {/*    position: 'absolute',*/}
        {/*    left: '17px',*/}
        {/*    top: '18px',*/}
        {/*    marginRight: '9px',*/}
        {/*    transform: 'translate(-50%, -50%)',*/}
        {/*  }}*/}
        {/*/>*/}
      </Stack>
      <>
        {SocialApp.map((el) => (
          <Box
            marginBottom={'24px'}
            display={'flex'}
            justifyContent={'space-between'}
          >
            <Text
              display={'flex'}
              justifyContent={'space-between'}
              fontSize={'16px'}
            >
              {' '}
              {el.icon}{' '}
              <Text marginLeft={'16.6px'} fontSize={'16px'} as={'span'}>
                {el.appName}
              </Text>
            </Text>
            <Stack spacing={5} direction="row">
              <Checkbox
                borderRadius={'50%'}
                value={el.appName}
                isChecked={selected.includes(el.appName)}
                onChange={handleChange(el)}
                key={el.appName}
                colorScheme="red"
                sx={{
                  // background: 'gray',
                  borderRadius: '50%',
                }}
              ></Checkbox>
            </Stack>
          </Box>
        ))}
      </>
      <Button
        color={''}
        width={'100%'}
        bg={'#131316'}
        type={'button'}
        text={'Confirm'}
        handleClick={onConfirm}
      />
    </Box>
  );
};

export default SocialMediaIcons;
