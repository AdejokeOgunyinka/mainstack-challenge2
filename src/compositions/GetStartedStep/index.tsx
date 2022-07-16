import { Flex, GridItem, Stack, Text } from '@chakra-ui/react';
import { Colors } from '../../constants';
import { IGetStartedStep } from '../../views/getStarted/pages/Home/types';

export interface IGetStartedStepCard extends IGetStartedStep {
  step: number;
}

const GetStartedStep: React.FC<IGetStartedStepCard> = ({
  title,
  description,
  step,
}) => {
  return (
    <GridItem
      p="6"
      borderRadius="12px"
      border="1px solid #E5E8F0"
      maxW={'full'}
      w={'full'}
      minH={'181px'}
    >
      <Stack flexDir={'column'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} mb={2}>
          <Text>Tick</Text>
          <Text fontSize={'12px'} lineHeight={'18px'} color={Colors.gray400}>
            Step {step}
          </Text>
        </Flex>
        <Flex flexDir={'column'}>
          <Text
            fontSize={'18px'}
            lineHeight={'24px'}
            color={Colors.primaryBlack}
          >
            {title}
          </Text>
          <Text fontSize={'14px'} lineHeight={'20px'} color={Colors.gray400}>
            {description}
          </Text>
        </Flex>
      </Stack>
    </GridItem>
  );
};

export default GetStartedStep;
