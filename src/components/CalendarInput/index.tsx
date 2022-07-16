import {Button, Flex, Text} from "@chakra-ui/react"
import { FiCalendar  } from "react-icons/fi"
import {FaCaretDown  } from "react-icons/fa"

export const CalendarInput = () => {
  return (
    <Button borderRadius={20} colorScheme="#E5E8F0" variant="outline" border="1px solid #E5E8F0">
        <Flex py={4}>
            <FiCalendar />
            <Text px={3}>28, Mar 2022 - 28, Dec, 2022</Text>
            <FaCaretDown />
        </Flex>
    </Button>
  )
}
