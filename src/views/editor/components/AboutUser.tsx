import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Avatar,
  Button,
  Badge,
  Stack,
  Text,
  HStack,
  IconButton,
  Icon,
  Spacer,
} from '@chakra-ui/react';
import { editorBannerImg } from 'assets/svgs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { VscTwitter } from 'react-icons/vsc';

export const AboutUser = () => {
  return (
    <Box
      mt="80px"
      position="relative"
      borderWidth={1}
      borderRadius="xl"
      minH="500px"
    >
      <Box
        h="200px"
        bg="grey"
        borderTopLeftRadius="xl"
        borderTopRadius="xl"
        overflow="hidden"
      >
        <Image minW="full" src={editorBannerImg} />
      </Box>
      <Flex
        position="absolute"
        bg="transparent"
        w="full"
        top="100px"
        left={0}
        right={0}
        h="300px"
        justifyContent="center"
      >
        <Box bg="white" minH="200px" borderRadius="xl" w="90%" p="20px">
          <Flex>
            <Avatar
              mr="5"
              size="xl"
              name="Christian Nwamba"
              src="https://bit.ly/code-beast"
            />

            <Spacer h="10px" />
            <Stack spacing={4}>
              <Heading fontSize="24px">Blessing Daniels</Heading>
              <Text fontSize="sm">
                Personal Trainer 💪 Dancer 💃 Meditator. I love all animals 🐶
                and donate a percentage of my income to marine life 🐠
              </Text>
              <HStack spacing={2}>
                <IconButton
                  h="36px"
                  w="36px"
                  aria-label="facebook"
                  bg="primaryBlack"
                  borderRadius="full"
                  icon={<Icon h="14px" color="white" as={FaInstagram} />}
                />
                <IconButton
                  h="36px"
                  w="36px"
                  aria-label="facebook"
                  bg="primaryBlack"
                  borderRadius="full"
                  icon={<Icon h="14px" color="white" as={VscTwitter} />}
                />
                <IconButton
                  h="36px"
                  w="36px"
                  aria-label="facebook"
                  bg="primaryBlack"
                  borderRadius="full"
                  icon={<Icon h="14px" color="white" as={FaFacebookF} />}
                />
                <IconButton
                  h="36px"
                  w="36px"
                  aria-label="facebook"
                  bg="primaryBlack"
                  borderRadius="full"
                  icon={<Icon h="14px" color="white" as={GrLinkedinOption} />}
                />
              </HStack>
              <Spacer h="10px" />

              <HStack spacing={4}>
                <Badge p="2">Branding</Badge>
                <Badge p="2">Entertainment</Badge>
                <Badge p="2">Design</Badge>
              </HStack>
            </Stack>
          </Flex>
              <Flex mt="12" justifyContent="center">
                <Button fontSize="sm" p="3" px="5" borderRadius="full" variant="outline">Edit Profile</Button>
              </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
