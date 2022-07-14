import React from "react";
import {
  Box,
  Flex,
  Text,
  Switch,
  Button,
  Heading,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import EditorInfoSection from "../../components/editor/editorInfoSection";
import BackArrowIcon from "../../assets/arrow_back.svg";
import {
  accordionHeaders,
  sectionStyles,
  sectionHeaderStyles,
  AccordionHeadersInterface,
} from "../../utils/editor";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Customization = () => {
  const history = useNavigate();
  return (
    <Flex width="100%" height="100%" boxSizing="border-box">
      <Box
        width={{ base: "100%", lg: "60%" }}
        boxSizing="border-box"
        px={{ base: "20px", lg: "24px" }}
      >
        <Flex
          justify="space-between"
          pt="14px"
          mb="39px"
          position="sticky"
          top="0px"
          bg="#fff"
          zIndex={1}
        >
          <Flex align="center">
            <Image
              src={BackArrowIcon}
              alt="arrow back"
              boxSize="15x"
              mr="20.78px"
              cursor="pointer"
              onClick={() => history(-1)}
            />
            <Heading fontSize="18px" fontWeight="800" letterSpacing="-0.015em">
              Edit Theme
            </Heading>
          </Flex>
          <Button bg="#FF5403" borderRadius="100px" color="#fff" w="90px">
            Save
          </Button>
        </Flex>
        <Box width="100%" overflowY="scroll">
          <Text
            fontSize="14px"
            lineHeight="22px"
            color="#4D5760"
            textAlign="center"
            mb="26px"
          >
            {" "}
            Customize your font, button color, text color to your choice
          </Text>
          <Box width="100%" px={{ lg: "60px" }}>
            <Flex width="100%" {...sectionStyles}>
              <Text {...sectionHeaderStyles}>Dark Mode</Text>
              <Switch size="sm" colorScheme="orange" />
            </Flex>
            <Accordion
              allowToggle
              width="100%"
              mb={{ base: "80px", md: "unset" }}
            >
              {accordionHeaders.map(
                (accordionHeader: AccordionHeadersInterface, index: number) => (
                  <AccordionItem {...sectionStyles} key={index}>
                    <AccordionButton
                      width="100%"
                      padding="unset !important"
                      _hover={{ outline: "none !important" }}
                    >
                      <Flex justify="space-between" width="100%">
                        <Text {...sectionHeaderStyles}>
                          {accordionHeader.header}
                        </Text>
                        <AccordionIcon />
                      </Flex>
                    </AccordionButton>
                    <AccordionPanel px="unset !important" pt="20px !important">
                      {accordionHeader.content}
                    </AccordionPanel>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </Box>
        </Box>
      </Box>
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

export default Customization;
