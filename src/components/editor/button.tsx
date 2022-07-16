import React from "react";
import { Button } from "@chakra-ui/react";

const EditorButton = ({
  children,
  marginTop,
  onClick,
}: {
  children: React.ReactNode;
  marginTop?: string;
  onClick?: () => void;
  //onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <Button
      bg="inherit !important"
      border="1px solid #E5E8F0"
      borderRadius="full"
      color="#131316"
      fontWeight="600"
      fontSize="15px"
      mt={marginTop}
      _hover={{ bg: "#E5E8F0 !important" }}
      onClick={onClick}
      variant="outline"
      p="3"
      display="flex"
    >
      {children}
    </Button>
  );
};

export default EditorButton;
