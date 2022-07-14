import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./drawerComponent.scss";

const DrawerComponent = ({
  icon,
  header,
  description,
  onClick,
}: {
  icon: string;
  header: string;
  description: string;
  onClick?: () => void;
}) => {
  return (
    <Flex
      width="100%"
      height="82px"
      border="1px solid #E5E8F0"
      borderRadius="10px"
      p="20px"
      align="center"
      justify="space-between"
      className="drawer_component"
      onClick={onClick}
    >
      <Flex align="center">
        <Image alt="drawer image" src={icon} boxSize="20px" />
        <Box ml="20px">
          <Text fontWeight="600" fontSize="16px" lineHeight="24px" mb="8px">
            {header}
          </Text>
          <Text fontSize="12px" color="#4D5760" lineHeight="18px">
            {description}
          </Text>
        </Box>
      </Flex>
      <Flex align="center" className="arrow">
        <ArrowForwardIcon />
      </Flex>
    </Flex>
  );
};

export default DrawerComponent;
