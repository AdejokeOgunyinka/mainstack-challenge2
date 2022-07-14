import React, { useState } from "react";
import { Flex, Text, Button, Image } from "@chakra-ui/react";
import { buttonFormats, colorScheme } from "../../utils/editor";
import CheckIcon from "../../assets/check.svg";

const ButtonFormatAccordionContent = () => {
  const [buttonFormatIndex, setButtonFormatIndex] = useState(1);
  const [colorIndex, setColorIndex] = useState(1);

  return (
    <Flex width="100%" direction="column">
      <Flex
        width="100%"
        wrap="wrap"
        rowGap="8px"
        columnGap={{ base: "7px", md: "8px" }}
      >
        {buttonFormats.map((buttonFormat, index) => (
          <Flex
            direction="column"
            width={{ base: "93px", md: "unset" }}
            height={{ base: "93px", md: "98px" }}
            justify="center"
            align="center"
            cursor="pointer"
            bg={buttonFormatIndex === index + 1 ? "#FFEEE7" : "unset"}
            border={
              buttonFormatIndex === index + 1
                ? "1px solid #FFAA81"
                : "1px solid #E5E8F0"
            }
            borderRadius="8px"
            key={index}
            onClick={() => setButtonFormatIndex(index + 1)}
            px="10px"
          >
            <Button
              {...buttonFormat}
              width="61px"
              height="30px"
              fontSize="12px"
              bg={
                (index + 1) % 2 !== 0 && buttonFormatIndex === index + 1
                  ? "#AA3802"
                  : (index + 1) % 2 !== 0 && buttonFormatIndex !== index + 1
                  ? "#000"
                  : "#fff"
              }
              color={
                (index + 1) % 2 !== 0 && buttonFormatIndex === index + 1
                  ? "#fff"
                  : (index + 1) % 2 !== 0 && buttonFormatIndex !== index + 1
                  ? "#fff"
                  : (index + 1) % 2 === 0 && buttonFormatIndex !== index + 1
                  ? "#000"
                  : "#AA3802"
              }
              border={
                (index + 1) % 2 !== 0 && buttonFormatIndex === index + 1
                  ? "none"
                  : (index + 1) % 2 !== 0 && buttonFormatIndex !== index + 1
                  ? "1px solid #000"
                  : (index + 1) % 2 === 0 && buttonFormatIndex !== index + 1
                  ? "1px solid #000"
                  : "1px solid #AA3802"
              }
            >
              Button
            </Button>
          </Flex>
        ))}
      </Flex>
      <Text mt="24px" fontSize="12px" mb="12px">
        Solid Colors
      </Text>
      <Flex width="100%" wrap="wrap" rowGap="24px" columnGap="24px">
        {colorScheme.map((color, index) => (
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

export default ButtonFormatAccordionContent;
