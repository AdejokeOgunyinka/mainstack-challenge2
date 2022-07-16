import { Flex } from '@chakra-ui/react';
import { Loader } from '../../components';

const PageLoader = () => {
  return (
    <Flex width={'100%'} h={'100vh'} justify={'center'} align={'center'}>
      <Loader />
    </Flex>
  );
};

export default PageLoader;
