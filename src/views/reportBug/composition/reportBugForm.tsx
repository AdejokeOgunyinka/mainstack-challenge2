import React from 'react';
import {
  Box,
  Button as ChakraBtn,
  Stack,
  Textarea,
  Heading,
} from '@chakra-ui/react';
import { Input } from '../../../components';
import Select from '../../../components/Select';
import Colors from '../../../constants/Colors';
// import Textarea from '../../../components/Textarea';

const ReportBugForm = () => {
  let [value, setValue] = React.useState('');

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  // @ts-ignore
  return (
    <Box>
      <form>
        <Stack minWidth={{ base: '335px', md: '246px' }} marginRight={'12px'}>
          <Input
            label="Title"
            id="firstName"
            placeholder="E.g Text Overlapping"
            handleChange={() => ''}
          />
        </Stack>
        <Stack>
          <Select
            label={'Type of Bug'}
            data={[]}
            placeholder="Select bug type"
          />
        </Stack>
        <Stack>
          <Select
            label={'App Experience'}
            data={[]}
            placeholder="Rate your Experience"
          />
        </Stack>
        <Stack>
          <Textarea
            placeholder="Description of the Bug"
            size={'md'}
            value={value}
          />
        </Stack>
        <ChakraBtn width={'100%'} h={'40px'} bg={Colors.primaryBlack}>
          Submit
        </ChakraBtn>

        <Box my={6}>
          <Heading fontSize={'14px'} mb="12px" textColor="primaryBlack">
            Description of the Bug
          </Heading>
          <Textarea
            value={value}
            height="120px"
            pt="14px"
            pl="16px"
            onChange={(e) => handleInputChange(e)}
            placeholder="E.g A group interested in marketing"
            size="xl"
            sx={{ '&::placeholder': { fontSize: '14px' } }}
            borderRadius="8px"
          />
        </Box>
      </form>
    </Box>
  );
};

export default ReportBugForm;
