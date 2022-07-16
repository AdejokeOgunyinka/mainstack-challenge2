import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Box
  } from '@chakra-ui/react'
  import { Colors } from '../../constants';



  interface ContactListInterface{
    headerOne: string | number;
    headerTwo: string | number;
    infos: any[];
}               

const ContactList: React.FC<ContactListInterface> = ({headerOne, headerTwo, infos}) => {
  return (
    <TableContainer  
    overflowX={'auto'}
    css={{
      WebkitOverflowScrolling: 'touch',
      msOverflowStyle: '-ms-autohiding-scrollbar',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }}
  >
         <Table variant='unstyled' fontSize="14px" fontWeight="normal">
    <Thead color={Colors.gray300}>
      <Tr>
        <Th  textTransform='capitalize' fontWeight='normal'>{headerOne}</Th>
        <Th  textTransform='capitalize' fontWeight='normal'>{headerTwo}</Th>
      </Tr>
    </Thead>
    <Tbody color={Colors.gray400}>
      { infos.map((data: any) => (

          <Tr key={data.id}>
            <Td fontWeight='normal' textTransform='lowercase'><Flex alignItems="center" ><Flex alignItems="center" justifyContent="center" p={2} mr={2} w={8} h={8} bgColor={Colors.chartPurple} color="white" borderRadius="50%" textTransform="uppercase">{data.initials}</Flex><Box as="span">{data.columnOne}</Box></Flex></Td>
            <Td fontWeight='normal' textTransform='lowercase'>{data.columnTwo}</Td>
        </Tr>
              )
            )
     }
    </Tbody>
    </Table>
    </TableContainer>
  )
}
export default ContactList