import {Box, Container, Flex} from '@chakra-ui/react';
import Photographer from '../../assets/images/photographer.png';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { ReactComponent as World } from '../../assets/svgs/world.svg';
import { Heading } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Container
      width={'100%'}
      h={'100vh'}
      borderRadius={'10px'}
      overflow={'hidden'}
      p={0}
      pos={'relative'}
    >
      <Box _before={{ content: '""', position:"absolute", height:"100%", width:"100%", background:"linear-gradient(0deg, rgba(2, 4, 9, 0.77) 17.12%, rgba(2, 4, 9, 0) 60.12%)" }}>
        <Image
          objectFit={'cover'}
          h={'100%'}
          src={Photographer}
          alt={'Photographer'}
          background={"linear-gradient(180deg, rgba(2, 4, 9, 0.77) 17.12%, rgba(2, 4, 9, 0) 60.12%)"}
        />
      </Box>
      <Box position={'absolute'} bottom={"32px"} marginLeft={'32px'}>
        <Box>
          <Heading fontWeight={100} color={'white'} fontSize={'24px'}>
            Dan the Creator
          </Heading>
          <Text fontWeight={"light"} cursor={'pointer'} color={'#B8BABB'} fontSize="16px">
            <World style={{ display: 'inline', marginRight: '5px' }} />
            mainstack
            <Text size={'16px'} textDecoration={'underline'} as={'span'}>
              .me/danthecreator
            </Text>
          </Text>
          <Box marginTop={'25px'} maxW={'465px'}>
            <Text fontWeight={"50"} fontSize={'16px'} color={'white'}>
              Very user friendly, very explanatory and was very easy to setup my
              webpage. Highly recommended for any content creator, business
              creator.
            </Text>
          </Box>
        </Box>
        <Flex>
          {
            [1,2,3].map((el, index) => (
                <Box mr={"4px"}  borderRadius={4} w={"16px"} h={"4px"}  background={ index === 1? "#ffffff" :"#98A0A6"} marginTop={'35px'}/>
            ))
          }
        </Flex>

      </Box>
    </Container>
  );
};

export default Banner;
