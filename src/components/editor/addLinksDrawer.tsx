import React, { useContext } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Button,
  Accordion,
} from "@chakra-ui/react";
import { ArrowBackIcon, AddIcon } from "@chakra-ui/icons";
import AddLinksAccordion from "./addLinksAccordion";
import { Formik, FieldArray, Form } from "formik";
import * as Yup from "yup";
import { LinkDrawerContext } from "../../contexts/linkDrawer";

const AddLinksDrawer = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const initialValues = {
    links: [{ title: "", link: "" }],
  };

  const validation = Yup.object().shape({
    links: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required(),
          link: Yup.string().required(),
        })
      )
      .required(),
  });

  const { saveLinkObjectArray, saveMoreLinks } = useContext(LinkDrawerContext);

  const onSubmit = (values: { links: any }) => {
    saveLinkObjectArray(values.links);
    saveMoreLinks([values.links]);
    onClose();
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          maxWidth={{ base: "100% !important", lg: "40% !important" }}
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <ArrowBackIcon
              onClick={() => onClose()}
              mr="14px"
              cursor="pointer"
            />
            Add Links
          </DrawerHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={onSubmit}
            validateOnChange={false}
          >
            {({ values, handleChange, setFieldTouched, handleSubmit }) => (
              <Form
                onSubmit={handleSubmit}
                style={{
                  display: "inline-flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <DrawerBody overflowY="scroll" mb="150px">
                  <FieldArray name="links">
                    {({ push, remove }) => (
                      <>
                        <Accordion
                          allowToggle
                          width="100%"
                          mb={{ base: "80px", md: "unset" }}
                        >
                          {values.links &&
                            values.links.length > 0 &&
                            values.links.map((_, index: number) => (
                              <AddLinksAccordion
                                header={values.links[index].title || "Links"}
                                index={index}
                                handleChange={handleChange}
                                setFieldTouched={setFieldTouched}
                                removeLink={remove}
                                key={index}
                                values={values}
                              />
                            ))}
                        </Accordion>
                        <Button
                          leftIcon={<AddIcon ml="15px" />}
                          onClick={() => push({ title: "", link: "" })}
                          width="100%"
                          justifyContent="flex-start"
                          height={{ base: "40px", lg: "48px" }}
                          borderRadius="100px"
                          border="1px solid #E5E8F0"
                          bg="unset"
                          _hover={{ justifyContent: "center", bg: "#E5E8F0" }}
                        >
                          Add links
                        </Button>
                      </>
                    )}
                  </FieldArray>
                </DrawerBody>
                <DrawerFooter
                  position="fixed"
                  bottom="0"
                  width="100%"
                  bg="#fff"
                >
                  <Button
                    width="100%"
                    borderRadius="100px"
                    height={{ base: "40px", lg: "48px" }}
                    bg="#000"
                    color="#fff"
                    type="submit"
                  >
                    Save
                  </Button>
                </DrawerFooter>
              </Form>
            )}
          </Formik>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddLinksDrawer;
