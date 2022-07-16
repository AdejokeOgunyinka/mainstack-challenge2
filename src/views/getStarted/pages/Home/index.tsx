import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Title } from "../../../../components/Title";
import GetStartedStep from "../../../../compositions/GetStartedStep";
import { Colors } from "../../../../constants";
import DashboardLayout from "../../../../layouts/dashboard/index";
import { getStartedSteps } from "./steps";

const GetStarted = () => {
  return (
    <DashboardLayout
      content={
        <Flex w={"calc(100vw - 2rem)"} flexDir={"column"}>
          <Title title="Get Started" />
          <Flex
            flexDir={"column"}
            alignItems={{ base: "flex-start", md: "center" }}
            my={12}
          >
            <Heading as="h4" fontSize="2xl" fontWeight="bold">
              Good morning, Blessing ⛅️
            </Heading>
            <Text
              fontSize={"14px"}
              lineHeight={"22px"}
              color={Colors.gray400}
              fontWeight={"light"}
            >
              Let's get started with Mainstack
            </Text>
          </Flex>
          <Grid
            gap={4}
            mb={4}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
          >
            {getStartedSteps.map((step) => (
              <GetStartedStep
                key={step.title}
                title={step.title}
                description={step.description}
                step={getStartedSteps.indexOf(step) + 1}
              />
            ))}
          </Grid>
        </Flex>
      }
    />
  );
};

export default GetStarted;
