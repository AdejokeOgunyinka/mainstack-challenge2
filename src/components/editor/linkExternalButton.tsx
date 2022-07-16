import React from "react";
import { ArrowUpSlantIcon } from "../../assets/svgs";
import { Link, Button, Text } from "@chakra-ui/react";

const LinkExternalButton = ({
  text,
  link,
}: {
  text?: string;
  link: string;
}) => {
  return (
    <Button
      as={Link}
      height="56px"
      borderRadius="100px"
      bg="#242429"
      href={link}
      width="100%"
      color="#fff"
      _hover={{ textDecoration: "none" }}
      isExternal
      display="flex"
      justifyContent="space-between"
      px="24px"
    >
      <Text>{text}</Text>
      <ArrowUpSlantIcon />
    </Button>
  );
};

export default LinkExternalButton;
