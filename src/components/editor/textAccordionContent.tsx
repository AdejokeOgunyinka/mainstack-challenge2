import React, { useState } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { textTypes, colorScheme } from "../../utils/editor";
import CheckIcon from "../../assets/check.svg";

const TextAccordionContent = () => {
  const [textTypeIndex, setTextTypeIndex] = useState(1);
  const [colorIndex, setColorIndex] = useState(1);

  return (
    <Flex width="100%" direction="column">
      <Flex width="100%" wrap="wrap" rowGap="8px" columnGap="8px">
        {textTypes.map((textType, index) => (
          <Flex
            direction="column"
            width="90px"
            height="98px"
            justify="center"
            align="center"
            cursor="pointer"
            bg={textTypeIndex === index + 1 ? "#FFEEE7" : "unset"}
            border={
              textTypeIndex === index + 1
                ? "1px solid #FF5403"
                : "1px solid #E5E8F0"
            }
            borderRadius="8px"
            key={index}
            onClick={() => setTextTypeIndex(index + 1)}
          >
            <Text
              fontSize="32px"
              letterSpacing="-0.015em"
              fontFamily={textType.font}
              fontWeight="800"
              color={textTypeIndex === index + 1 ? "#AA3802" : "#131316"}
            >
              Aa
            </Text>
            <Text
              fontSize="12px"
              fontFamily={textType.font}
              color={textTypeIndex === index + 1 ? "#AA3802" : "#131316"}
            >
              {textType.name}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Text mt="24px" fontSize="12px" mb="12px">
        Solid Colors
      </Text>
      <Flex width="100%" wrap="wrap" rowGap="24px" columnGap="24px">
        {[colorScheme[0]].map((color, index) => (
          <Flex
            bg={color}
            key={index}
            width="41px"
            height="41px"
            borderRadius="100%"
            cursor="pointer"
            onClick={() => setColorIndex(index + 1)}
            justify="center"
            align="center"
          >
            {index + 1 === colorIndex && (
              <Image alt="check-icon" src={CheckIcon} />
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default TextAccordionContent;
