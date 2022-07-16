import React from 'react';
import { Box, Heading, Text, Button as ChakraBtn } from '@chakra-ui/react';
import { tableData } from './dummyData';
import Colors from '../../../constants/Colors';

const ComparePlans = () => {
  return (
    <Box display={{ base: 'none', md: 'block' }}>
      <Box margin={'72px 0'}>
        <Heading
          textAlign={'center'}
          // background={Colors.primaryBlack}
          fontSize={'48px'}
        >
          Compare Plans
        </Heading>
      </Box>
      <Box display={{ base: 'none', md: 'block' }}>
        <table
          style={{
            width: '100%',
            border: '1px solid #D6D9E0',
            borderCollapse: 'collapse',
          }}
          cellPadding={'15px'}
        >
          <tr>
            <th style={{ border: '1px solid #D6D9E0' }}></th>
            <th style={{ border: '1px solid #D6D9E0' }}>
              <Box>
                <Text fontSize={'24px'} mb={'4px'}>
                  Free
                </Text>
                <Text color={Colors.primaryBlack} fontSize={'36px'}>
                  $0
                  <Text
                    as={'span'}
                    fontWeight={'lighter'}
                    fontSize={'18px'}
                    color={Colors.gray300}
                  >
                    /mo
                  </Text>
                </Text>

                <Box mt={'16px'}>
                  <ChakraBtn
                    color={Colors.primaryBlack}
                    // bg={}
                    height={'40px'}
                    width={'160px'}
                    borderRadius={'100px'}
                    border={'1px solid #E5E8F0'}
                  >
                    <Text fontWeight={'light'} fontSize={'15px'}>
                      Select Plan
                    </Text>
                  </ChakraBtn>
                </Box>
              </Box>
            </th>
            <th style={{ border: '1px solid #D6D9E0' }}>
              <Box>
                <Text fontSize={'24px'} mb={'4px'}>
                  Starter
                </Text>
                <Text color={Colors.primaryBlack} fontSize={'36px'}>
                  $5.99
                  <Text
                    as={'span'}
                    fontWeight={'lighter'}
                    fontSize={'18px'}
                    color={Colors.gray300}
                  >
                    /mo
                  </Text>
                </Text>

                <Box mt={'16px'}>
                  <ChakraBtn
                    color={Colors.white}
                    bg={Colors.primaryBlack}
                    height={'40px'}
                    width={'160px'}
                    borderRadius={'100px'}
                    border={'1px solid #E5E8F0'}
                  >
                    <Text fontWeight={'light'} fontSize={'15px'}>
                      Buy basic plan
                    </Text>
                  </ChakraBtn>
                </Box>
              </Box>
            </th>
            <th style={{ border: '1px solid #D6D9E0', background: '#AA3802' }}>
              <Box fontWeight={'lighter'} color={Colors.white}>
                <Text fontSize={'24px'} mb={'4px'}>
                  Premium
                </Text>
                <Text fontSize={'36px'}>
                  $9.99
                  <Text
                    as={'span'}
                    fontWeight={'lighter'}
                    fontSize={'18px'}
                    // color={Colors.gray300}
                  >
                    /mo
                  </Text>
                </Text>

                <Box mt={'16px'}>
                  <ChakraBtn
                    color={Colors.primaryBlack}
                    bg={Colors.white}
                    height={'40px'}
                    width={'160px'}
                    borderRadius={'100px'}
                    border={'1px solid #E5E8F0'}
                  >
                    <Text fontWeight={'light'} fontSize={'15px'}>
                      Buy basic plan
                    </Text>
                  </ChakraBtn>
                </Box>
              </Box>
            </th>
            <th style={{ border: '1px solid #D6D9E0' }}>
              <Box>
                <Text fontSize={'24px'} mb={'4px'}>
                  Agency
                </Text>
                <Text color={Colors.primaryBlack} fontSize={'36px'}>
                  $19.99
                  <Text
                    as={'span'}
                    fontWeight={'lighter'}
                    fontSize={'18px'}
                    color={Colors.gray300}
                  >
                    /mo
                  </Text>
                </Text>

                <Box mt={'16px'}>
                  <ChakraBtn
                    color={Colors.white}
                    bg={Colors.primaryBlack}
                    height={'40px'}
                    width={'160px'}
                    borderRadius={'100px'}
                    border={'1px solid #E5E8F0'}
                  >
                    <Text fontWeight={'light'} fontSize={'15px'}>
                      Buy Agency plan
                    </Text>
                  </ChakraBtn>
                </Box>
              </Box>
            </th>
          </tr>
          {tableData.map((el) => (
            <>
              <tr style={{ border: '1px solid #D6D9E0' }}>
                <td>
                  <Text fontWeight={'bold'} fontSize={'20px'}>
                    {el.title}
                  </Text>
                </td>
              </tr>
              {el.content.map((text) => (
                <tr style={{ border: '1px solid #D6D9E0' }}>
                  {text.rows.map((con) => (
                    <td style={{ border: '1px solid #D6D9E0' }}>
                      <Text fontWeight={'normal'} fontSize={'18px'}>
                        {' '}
                        {con}
                      </Text>
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ))}
        </table>
      </Box>
    </Box>
  );
};

export default ComparePlans;
