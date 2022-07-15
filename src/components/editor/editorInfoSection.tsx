import React, { useContext } from "react";
import {
  Flex,
  Box,
  VStack,
  Image,
  Avatar,
  Text,
  Heading,
} from "@chakra-ui/react";
import HotAirBalloon from "../../assets/Hot_air_balloon.png";
import AvatarImage from "../../assets/avatar.png";
import SocialMedia from "./socialMedia";
import EditorButton from "./button";
import { LinkDrawerContext } from "../../contexts/linkDrawer";
import LinkExternalButton from "./linkExternalButton";

const EditorInfoSection = () => {
  const { linkObjectArray } = useContext(LinkDrawerContext);

  return (
    <Flex
      width="100%"
      pt="48px"
      px="60px"
      direction="column"
      position="sticky"
      right="0"
      top="0"
      height="100vh"
      maxWidth="550px !important"
    >
      <Box
        bg="#131316"
        py="10px"
        px="10px"
        width="100%"
        height="85%"
        borderRadius="24px"
      >
        <VStack textAlign="center" overflowY="scroll" height="100%">
          <Flex
            direction="column"
            alignItems="center"
            position="relative"
            width="100%"
          >
            <Image
              alt="hot air balloon"
              src={HotAirBalloon}
              height="119px"
              borderRadius="20px 20px 0px 0px"
              width="100%"
            />
            <Avatar
              boxSize="74px"
              src={AvatarImage}
              position="absolute"
              top="85px"
            />
          </Flex>
          <Heading color="#E5E8F0" mt="55px !important" fontSize="24px">
            {" "}
            Blessing Daniels
          </Heading>
          <Text color="#E5E8F0" fontSize="14px" px="20px" mt="12px !important">
            Personal Trainer 💪 Dancer 💃 Meditator. I love all animals 🐶 and
            donate a percentage of my income to marine life 🐠
          </Text>
          <Box mt="21px !important">
            <SocialMedia />
          </Box>
          <VStack width="100%" spacing="16px" px="20px">
            {linkObjectArray &&
              linkObjectArray?.length > 0 &&
              linkObjectArray?.map(
                (
                  linkObject: { link: string; title: string },
                  index: number
                ) => (
                  <LinkExternalButton
                    text={linkObject.title}
                    link={linkObject.link}
                    key={index}
                  />
                )
              )}
          </VStack>
        </VStack>
      </Box>
      <EditorButton marginTop="32px !important">Share Page Link</EditorButton>
    </Flex>
  );
};

export default EditorInfoSection;
