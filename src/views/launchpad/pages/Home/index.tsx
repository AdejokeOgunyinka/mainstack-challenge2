import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  blackTick,
  contentDoc,
  download,
  launchpad,
  toc,
  view_module,
} from "../../../../assets/images";
import { Button } from "../../../../components";
import { Colors } from "../../../../constants";
import DashboardLayout from "../../../../layouts/dashboard/index";
import ProcessModal from "./ProcessModal";

const LaunchpadHome = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [page, setPage] = useState("home");
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [view, setView] = useState("Grid");

  const handleProcessClick = () => {
    setIsProcessOpen(!isProcessOpen);
  };
  const features = [
    "Formation of a company in US",
    "US filing fees",
    "Signed documents to establish company by-laws and protect IP",
    "First year of registered agent fees",
    "Tax ID (EIN) filing",
    "Templates for post-formation legal needs",
  ];

  const DocGrid: React.FC<{
    date: string;
  }> = ({ date }) => {
    return (
      <Box
        // px={'1rem'}
        p="1.5rem"
        m="8px"
        borderRadius="8px"
        border={`1px solid ${Colors.gray100}`}
        textAlign="center"
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        justifyContent={"center"}
      >
        <chakra.img src={contentDoc} alt="Company" marginBottom={"1rem"} />
        <Heading
          as="h2"
          color={Colors.black}
          fontSize={"1rem"}
          fontWeight="500"
        >
          Registeration Document
        </Heading>
        <Text my="1rem" textColor={Colors.gray400} fontSize="sm">
          {date}
        </Text>
        <Box
          border={`1px solid ${Colors.gray100}`}
          cursor="pointer"
          width="45px"
          height="45px"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <chakra.img src={download} alt="Company" />
        </Box>
      </Box>
    );
  };

  const DocList: React.FC<{
    date: string;
  }> = ({ date }) => {
    return (
      <Box
        // px={'1rem'}
        my="8px"
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Flex>
          <chakra.img src={contentDoc} alt="Company" marginBottom={"1rem"} />
          <Box ml="1rem">
            <Heading
              as="h2"
              color={Colors.black}
              fontSize={"1rem"}
              fontWeight="500"
            >
              Registeration Document
            </Heading>
            <Text my="4px" textColor={Colors.gray400} fontSize="sm">
              {date}
            </Text>
          </Box>
        </Flex>
        <Box
          border={`1px solid ${Colors.gray100}`}
          cursor="pointer"
          width="45px"
          height="45px"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <chakra.img src={download} alt="Company" />
        </Box>
      </Box>
    );
  };
  return (
    <DashboardLayout
      content={
        <Box px={2} w="100%">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            marginTop={2}
          >
            <Box>
              <Heading
                as="h4"
                // display={{ base: 'none', md: 'block' }}
                fontSize="2xl"
                fontWeight="bold"
              >
                Launchpad
              </Heading>
            </Box>
            <Box>
              <Button
                text={
                  windowDimensions.width < 500 ? (
                    <FaPlus color="white" />
                  ) : (
                    "Register company"
                  )
                }
                px={"1rem"}
                handleClick={handleProcessClick}
              />
            </Box>
          </Flex>
          <Flex alignItems="center" justifyContent="flex-start" marginTop={8}>
            <Box mr={"20px"}>
              <Heading
                as="h2"
                onClick={() => {
                  setPage("home");
                }}
                color={page === "home" ? Colors.orange : Colors.primaryBlack}
                cursor="pointer"
                // display={{ base: 'none', md: 'block' }}
                fontSize="medium"
                fontWeight="normal"
              >
                Home
              </Heading>
            </Box>
            <Box>
              <Heading
                onClick={() => {
                  setPage("documents");
                }}
                as="h2"
                color={
                  page === "documents" ? Colors.orange : Colors.primaryBlack
                }
                cursor="pointer"
                // display={{ base: 'none', md: 'block' }}
                fontSize="medium"
                fontWeight="normal"
              >
                Documents
              </Heading>
            </Box>
          </Flex>
          {page === "home" ? (
            <>
              <Box
                backgroundColor="#FFEEE7"
                borderRadius="20px"
                px="2rem"
                py="2rem"
                my="1.5rem"
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <Box mr="1rem">
                    <Heading fontSize="large" fontWeight="bold">
                      Register your business in the US
                    </Heading>
                    <Text
                      my="0.2rem"
                      textColor={Colors.primaryBlack}
                      fontSize="sm"
                    >
                      Get your startup registered in the US from anywhere in the
                      world
                    </Text>
                    <Box my="0.8rem">
                      <Button
                        text={"Learn more"}
                        px={"1.5rem"}
                        color={Colors.black}
                        bg={Colors.white}
                        border={`1px solid ${Colors.gray100}`}
                        handleClick={handleProcessClick}
                      />
                    </Box>
                  </Box>
                  <Box display={{ lg: "block", sm: "none", base: "none" }}>
                    <chakra.img src={launchpad} alt="Launchpad Banner" />
                  </Box>
                </Flex>
              </Box>
              <Box pb={{ lg: "1rem", sm: "5rem", base: "4rem" }}>
                <Heading
                  as="h2"
                  color={Colors.black}
                  fontSize="large"
                  fontWeight="bold"
                >
                  Pricing
                </Heading>
                <Flex
                  py="0.8rem"
                  alignItems="flex-end"
                  justifyContent="flex-start"
                >
                  <Heading
                    as="h2"
                    color={Colors.black}
                    fontSize={{ lg: "30px", sm: "20px" }}
                    fontWeight="bold"
                  >
                    $800
                  </Heading>
                  <Heading
                    as="h2"
                    color={Colors.gray100}
                    fontSize={"small"}
                    fontWeight="bold"
                  >
                    /ONE TIME FEE
                  </Heading>
                </Flex>
                <Box>
                  <Text
                    my="0.2rem"
                    fontWeight={"normal"}
                    textColor={Colors.gray400}
                    fontSize="sm"
                  >
                    This price gets you access to below listed values only
                  </Text>
                  <Box mt="0.8rem">
                    {features.map((v, i) => {
                      return (
                        <Flex
                          alignItems="center"
                          justifyContent="flex-start"
                          my="0.4rem"
                        >
                          <chakra.img src={blackTick} alt="Tick" mr="8px" />
                          <Text
                            fontWeight={"normal"}
                            textColor={Colors.gray400}
                            fontSize="sm"
                          >
                            {v}
                          </Text>
                        </Flex>
                      );
                    })}
                  </Box>
                  <Box mt="1rem" mb={{ base: "1rem" }}>
                    <Button
                      text={"Register Company"}
                      px={"1rem"}
                      handleClick={handleProcessClick}
                    />
                  </Box>
                </Box>
              </Box>
            </>
          ) : (
            <Box my="1.5rem">
              <Flex alignItems={"center"} justifyContent="space-between">
                <Heading
                  as="h2"
                  color={Colors.black}
                  fontSize={"1rem"}
                  fontWeight="500"
                >
                  All document(s)
                </Heading>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  maxWidth="90px"
                  border={`1px solid ${Colors.gray100}`}
                  borderRadius={"30px"}
                  textAlign="center"
                >
                  <Box
                    py={"4px"}
                    width="45px"
                    cursor={"pointer"}
                    borderRadius="30px"
                    backgroundColor={
                      view === "Grid" ? "#e1e4eb" : "transparent"
                    }
                    onClick={() => {
                      setView("Grid");
                    }}
                  >
                    <chakra.img
                      display={"inline"}
                      src={view_module}
                      alt="Grid"
                    />
                  </Box>
                  <Box
                    py={"4px"}
                    width="45px"
                    cursor={"pointer"}
                    borderRadius="30px"
                    backgroundColor={
                      view === "List" ? "#e1e4eb" : "transparent"
                    }
                    onClick={() => {
                      setView("List");
                    }}
                  >
                    <chakra.img display={"inline"} src={toc} alt="List" />
                  </Box>
                </Flex>
              </Flex>
              {view === "Grid" && (
                <>
                  <Flex mt="1rem" justifyContent={"center"} flexWrap="wrap">
                    <DocGrid date="05 May 2022" />
                    <DocGrid date="05 May 2022" />
                    <DocGrid date="05 May 2022" />
                    <DocGrid date="05 May 2022" />
                    <DocGrid date="05 May 2022" />
                    <DocGrid date="05 May 2022" />
                    <DocGrid date="05 May 2022" />
                    <DocGrid date="05 May 2022" />
                  </Flex>
                </>
              )}
              {view === "List" && (
                <>
                  <Box mt="1rem">
                    <DocList date="05 May 2022" />
                    <DocList date="05 May 2022" />
                    <DocList date="05 May 2022" />
                    <DocList date="05 May 2022" />
                    <DocList date="05 May 2022" />
                    <DocList date="05 May 2022" />
                    <DocList date="05 May 2022" />
                    <DocList date="05 May 2022" />
                  </Box>
                </>
              )}
            </Box>
          )}
          <ProcessModal
            isOpen={isProcessOpen}
            onClose={() => {
              setIsProcessOpen(false);
            }}
          />
        </Box>
      }
    />
  );
};

export default LaunchpadHome;
