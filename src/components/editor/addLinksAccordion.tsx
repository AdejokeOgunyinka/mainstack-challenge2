import React from "react";
import {
  AccordionPanel,
  Text,
  Input,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Flex,
  Image,
} from "@chakra-ui/react";
import { sectionStyles, sectionHeaderStyles } from "../../utils/editor";
import DragIndicator from "../../assets/drag_indicator_6_dots.svg";
import TrashIcon from "../../assets/trashIcon.svg";
import { Field, getIn } from "formik";

const AddLinksAccordion = ({
  header,
  index,
  handleChange,
  setFieldTouched,
  removeLink,
  values,
}: {
  header: string;
  index: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldTouched: (val: string) => void;
  removeLink: (val: number) => void;
  values: { links: { link: string; title: string }[] };
}) => {
  const ErrorMessage = ({ name }: { name: string }) => (
    <Field name={name}>
      {({ form }: { form: any }) => {
        const error = getIn(form.errors, name);
        const touch = getIn(form.touched, name);
        return touch && error ? (
          <Text fontSize="12px" color="red">
            {error.split(".")[1]}
          </Text>
        ) : null;
      }}
    </Field>
  );

  return (
    <AccordionItem {...sectionStyles}>
      <AccordionButton
        width="100%"
        padding="unset !important"
        _hover={{ outline: "none !important" }}
      >
        <Flex justify="space-between" width="100%">
          <Flex justify="space-between" width="100%">
            <Flex>
              <Image alt="drag indicator" src={DragIndicator} mr="8px" />
              <Text {...sectionHeaderStyles}>{header}</Text>
            </Flex>
            {values.links.length > 1 && removeLink && (
              <Image
                alt="remove link"
                src={TrashIcon}
                onClick={() => removeLink(index)}
              />
            )}
          </Flex>
          <AccordionIcon />
        </Flex>
      </AccordionButton>
      <AccordionPanel px="unset !important" pt="32px !important">
        <Text mb="12px" fontSize="14px" fontWeight="600">
          Title
        </Text>
        <Input
          focusBorderColor="#FF5403"
          borderRadius="8px"
          height={{ base: "40px", lg: "48px" }}
          name={`links.${index}.title`}
          onChange={handleChange}
          onBlur={() => setFieldTouched(`links.${index}.title`)}
          value={values.links[index].title}
        />
        <ErrorMessage name={`links.${index}.title`} />

        <Text mb="12px" fontSize="14px" fontWeight="600" mt="16px">
          Link
        </Text>
        <Input
          focusBorderColor="#FF5403"
          borderRadius="8px"
          height={{ base: "40px", lg: "48px" }}
          name={`links.${index}.link`}
          onChange={handleChange}
          onBlur={() => setFieldTouched(`links.${index}.link`)}
          value={values.links[index].link}
        />
        <ErrorMessage name={`links.${index}.link`} />
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AddLinksAccordion;
