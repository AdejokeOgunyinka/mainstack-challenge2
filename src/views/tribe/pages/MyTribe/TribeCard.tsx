import { GridItem, Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Button from 'components/Button';
import PopOver from 'components/PopOver';
import Colors from 'constants/Colors';
import { popOverLinks } from './constants';

interface TribeCardProps {
  data: any;
}

const TribeCard = ({ data }: TribeCardProps) => {
  return (
    <>
      <GridItem w="100%">
        <Box borderRadius="12px" height="149px" overflow="hidden">
          <Image
            src={data.image}
            alt="tribe"
            objectFit="cover"
            boxSize="100%"
          />
        </Box>

        <Flex justifyContent={'space-between'} alignItems="center" mt="20px">
          <Heading as="h3" fontSize={'16px'} textColor={Colors.primaryBlack}>
            {data.title}
          </Heading>
          <PopOver options={popOverLinks} />
        </Flex>
        <Text
          fontSize="14px"
          textColor={Colors.gray400}
          mt="10px"
          mb="10px"
        >{`${data.amount}`}</Text>
        <Flex marginBottom="20px" w="100%" alignItems="center">
          {data.membersImage.slice(0, 4).map((pic: any) => (
            <Image
              sx={{
                '&:not(&:last-child)': {
                  marginRight: '-8px',
                },
              }}
              width={6}
              h={6}
              src={pic}
              alt="user thumbnail"
            />
          ))}
          <Text
            textColor={Colors.primaryBlack}
            bgColor={Colors.gray100}
            fontSize={'12px'}
            borderRadius="100px"
            border="2px solid #FFFFFF"
            px="8px"
            py="6px"
            whiteSpace="nowrap"
          >
            {`${data.membersImage.length} members`}
          </Text>
        </Flex>
        <Button
          text={data.status}
          width="100%"
          bg="transparent"
          border={`1px solid ${Colors.gray100}`}
          py="12px"
          color={`${Colors.primaryBlack}`}
          fontSize="15px"
        />
      </GridItem>
    </>
  );
};
export default TribeCard;
