import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { Input } from '../../../../components';
import Colors from '../../../../constants/Colors';

const InviteFriends = () => {
  return (
    <Box>
      <Box>
        <Text textAlign={'center'}>
          Invite by typing and separating the emails with commas or upload the
          csv files of the emails
        </Text>
      </Box>
      <Box>
        <Stack>
          <Input label={'Email'} handleChange={() => ''} />
          <Text fontSize={'14px'} color={Colors.gray400} mt={'8px'}>
            Press the comma to enter multiple emails.
          </Text>
        </Stack>
      </Box>
      <Stack h={3}>
        <Input label={'Upload a CSV email file'} handleChange={() => ''} />
      </Stack>
    </Box>
  );
};

export default InviteFriends;
