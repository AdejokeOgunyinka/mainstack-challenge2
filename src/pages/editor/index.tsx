import React, { useContext } from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Heading,
  Image,
  Tag,
  HStack,
  useDisclosure,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import EditorInfoSection from "../../components/editor/editorInfoSection";
import AvatarImage from "../../assets/avatar.png";
import HotAirBalloon from "../../assets/Hot_air_balloon.png";
import SocialMedia from "../../components/editor/socialMedia";
import EditorButton from "../../components/editor/button";
import { tags, controlStyles, controls } from "../../utils/editor";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routeUtils";
import "./styles.scss";
import AddElementDrawer from "../../components/editor/addElementDrawer";
import { LinkDrawerContext } from "../../contexts/linkDrawer";
import DragIndicator from "../../assets/drag_indicator_6_dots.svg";
import { sectionStyles, sectionHeaderStyles } from "../../utils/editor";
import LinkExternalButton from "../../components/editor/linkExternalButton";

const Editor = () => {
  const history = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleControlClick = (index: number) => {
    if (index === 1) {
      history(ROUTES.customization);
    } else if (index === 2) {
      onOpen();
    }
  };

  const { linkObjectArray } = useContext(LinkDrawerContext);

  return (
    <Flex width="100%" height="100%" boxSizing="border-box">
      <AddElementDrawer onClose={onClose} isOpen={isOpen} />
      <Flex
        width={{ base: "100%", lg: "60%" }}
        boxSizing="border-box"
        direction="column"
        justify="space-between"
        height={{ base: "90vh", lg: "unset" }}
      >
        <Box bg="#fff">
          <Flex
            justify="space-between"
            px={{ base: "20px", lg: "24px" }}
            pb={{ md: "14px" }}
            pt="15px"
            align="center"
            mb={{ base: "26px", lg: "41px" }}
            position="sticky"
            zIndex={1}
            top="0px"
            bg="#fff"
          >
            <Flex align="center">
              <Avatar src={AvatarImage} boxSize="32px" />
              <Box ml="12px">
                <Heading
                  fontSize="18px"
                  fontWeight="600"
                  lineHeight="24px"
                  color="#131316"
                  letterSpacing="-0.015em"
                >
                  Editor
                </Heading>
                <Text fontSize="12px" color="#4D5760" lineHeight="18px">
                  mainstack.me/blessingdaniels
                </Text>
              </Box>
            </Flex>
            <Button bg="#FF5403" borderRadius="100px" color="#fff" disabled>
              Publish
            </Button>
          </Flex>

          <Box px={{ base: "20px", lg: "60px" }} width="100%">
            <Flex
              direction="column"
              height={{ base: "382px", lg: "444px" }}
              border="1px solid #E5E8F0"
              borderRadius="12px"
              position="relative"
              align="center"
              width="100%"
            >
              <Image
                alt="hot air balloon"
                src={HotAirBalloon}
                height={{ base: "119px", lg: "175px" }}
                width="100%"
                borderTopRadius="inherit"
              />
              <Box
                width="100%"
                position="absolute"
                px={{ base: "16px", lg: "24px" }}
                top={{ base: "56px", lg: "90px" }}
              >
                <Flex
                  bg="#fff"
                  height={{ base: "326px", lg: "264px" }}
                  width="100%"
                  borderRadius={{ base: "8px", lg: "24px" }}
                  p={{ base: "16px", lg: "24px" }}
                  direction={{ base: "column", lg: "row" }}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    mb={{ base: "16px", lg: "unset" }}
                  >
                    <Avatar
                      src={AvatarImage}
                      boxSize={{ base: "74px", lg: "82px" }}
                    />
                    <Box display={{ lg: "none" }}>
                      <EditorButton>Edit Profile</EditorButton>
                    </Box>
                  </Flex>
                  <Box ml={{ lg: "18px" }}>
                    <Heading
                      fontSize="24px"
                      lineHeight="32px"
                      fontWeight="700"
                      letterSpacing="-0.015em"
                    >
                      Blessing Daniels
                    </Heading>
                    <Text
                      fontSize="14px"
                      lineHeight="22px"
                      mt={{ base: "12px", lg: "16px" }}
                      mb={{ base: "16px", lg: "14px" }}
                    >
                      Personal Trainer 💪 Dancer 💃 Meditator. I love all
                      animals 🐶 and donate a percentage of my income to marine
                      life 🐠
                    </Text>
                    <SocialMedia />
                    <HStack mt={{ base: "16px", lg: "24px" }} spacing="8px">
                      {tags.map((tag, index) => (
                        <Tag
                          key={index}
                          height="32px"
                          bg="#E5E8F0 !important"
                          fontSize="14px"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </HStack>
                    <Flex
                      width="100%"
                      ml="50px"
                      display={{ base: "none", lg: "inline" }}
                    >
                      <EditorButton marginTop="32px">Edit Profile</EditorButton>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>

          {/* Links on the editor main page */}
          {linkObjectArray && linkObjectArray?.length > 0 && (
            <Box px={{ base: "20px", lg: "60px" }}>
              <Accordion
                allowToggle
                width="100%"
                mb={{ base: "80px", md: "unset" }}
                mt="16px"
              >
                <AccordionItem {...sectionStyles}>
                  <AccordionButton
                    width="100%"
                    padding="unset !important"
                    _hover={{ outline: "none !important" }}
                  >
                    <Flex justify="space-between" width="100%">
                      <Flex>
                        <Image
                          alt="drag indicator"
                          src={DragIndicator}
                          mr="8px"
                        />
                        <Text {...sectionHeaderStyles}>Links</Text>
                      </Flex>
                      <AccordionIcon />
                    </Flex>
                  </AccordionButton>
                  <AccordionPanel px="unset !important" pt="32px !important">
                    {linkObjectArray?.map(
                      (
                        link: { title: string; link: string },
                        index: number
                      ) => (
                        <Box width="100%" mb="20px">
                          <LinkExternalButton
                            text={link.title}
                            link={link.link}
                            key={index}
                          />
                        </Box>
                      )
                    )}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          )}
        </Box>
        <Flex // desktop controls
          align="center"
          justify="center"
          pb="48px"
          display={{ base: "none", lg: "inline-flex" }}
          width="100%"
          position="sticky"
          bottom="48px"
        >
          <Flex {...controlStyles}>
            {controls.map((control, index) => (
              <Flex
                width="50%"
                height="100%"
                className="controlContainer"
                justify="center"
                align="center"
                cursor="pointer"
                onClick={() => handleControlClick(index + 1)}
                key={index}
              >
                <Image alt="control image" src={control.icon} boxSize="24px" />
                <Text color="#fff" ml="11px" fontSize="15px" fontWeight="600">
                  {control.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex //mobile controls
          width="100%"
          display={{ base: "inline-flex", lg: "none" }}
          justify="flex-end"
          columnGap="12px"
          pr="20px"
          pb="12px"
        >
          {controls.map((control, index) => (
            <Flex
              w="48px"
              h="48px"
              justify="center"
              align="center"
              bg="#131316"
              borderRadius="100%"
              cursor="pointer"
              key={index}
              onClick={() => handleControlClick(index + 1)}
            >
              <Image alt="control image" src={control.icon} boxSize="24px" />
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box
        width="40%"
        borderLeft="1px solid #E5E8F0"
        display={{ base: "none", lg: "inline" }}
      >
        <EditorInfoSection />
      </Box>
    </Flex>
  );
};

export default Editor;
