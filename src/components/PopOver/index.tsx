import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';
import DrawerModal from 'components/Modal';
import ExitModal from 'components/ExitModal';
import React, { useState } from 'react';
import { IPopOverLinks } from 'views/tribe/pages/MyTribe/constants';
import LeaveTribe from 'views/tribe/pages/MyTribe/components/LeaveTribe';
import ShareTribe from 'views/tribe/pages/MyTribe/components/ShareTribe';
import ViewMembers from 'views/tribe/pages/MyTribe/components/ViewMembers';
import SendEmail from 'views/digitalShop/pages/components/SendEmail';
import ViewCustomers from 'views/digitalShop/pages/components/ViewCustomers';
import DeleteProduct from 'views/digitalShop/pages/components/DeleteProduct';
import EditDetails from 'views/digitalShop/pages/components/EditDetails';
import ShareProduct from 'views/digitalShop/pages/components/ShareProduct';
import DeleteClass from 'views/masterclass/pages/components/DeleteClass';
import EditClassDetails from 'views/masterclass/pages/components/EditClassDetails';
import ViewAttendees from 'views/masterclass/pages/components/ViewAttendees';
import ShareClass from 'views/masterclass/pages/components/ShareClass';
import ArchiveClass from 'views/masterclass/pages/components/ArchiveClass';

interface PopOverData {
  options: IPopOverLinks[];
  productData?: any;
  classData?: any;
}

const PopOver = ({ options, productData, classData }: PopOverData) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<number>(0);
  const [activeModalContent, setActiveModalContent] = useState<number>(0);

  const handleClick = (data: IPopOverLinks) => {
    if (data.type === 'modal') {
      setActiveModalContent(data.id);
      setIsModalOpen(true);
    } else {
      setActiveContent(data.id);
      onOpen();
    }
  };

  const activeModal: any = {
    66: { content: <DeleteClass onClose={() => setIsModalOpen(false)} /> },
    55: { content: <DeleteProduct onClose={() => setIsModalOpen(false)} /> },
    13: { content: <LeaveTribe onClose={() => setIsModalOpen(false)} /> },
  };
  const active: Record<number, { title: string; content: React.ReactNode }> = {
    11: {
      content: <ViewMembers />,
      title: 'View members',
    },
    12: {
      content: <ShareTribe />,
      title: 'Share Tribe Link',
    },
    1: {
      content: <EditDetails productData={productData} />,
      title: 'Edit Details',
    },
    2: {
      content: <ViewCustomers />,
      title: '50 members',
    },
    3: {
      content: <SendEmail />,
      title: 'Send email to customers',
    },
    4: {
      content: <ShareProduct productData={productData} />,
      title: 'Share Product Link',
    },
    6: {
      content: <EditClassDetails classData={classData} />,
      title: 'Edit Details',
    },
    7: {
      content: <ViewAttendees />,
      title: '50 attendees',
    },
    8: {
      content: <SendEmail />,
      title: 'Share Via Email',
    },
    9: {
      content: <ShareClass classData={classData} />,
      title: 'Share Class Link',
    },
    10: {
      content: <ArchiveClass />,
      title: 'Archive Class',
    },
  };

  return (
    <>
      <ExitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {activeModal[activeModalContent]?.content}
      </ExitModal>
      <DrawerModal
        isOpen={isOpen}
        onClose={onClose}
        headingText={active[activeContent]?.title}
        size="md"
      >
        {active[activeContent]?.content}
      </DrawerModal>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <IconButton
            aria-label="pop over"
            icon={
              <FiMoreVertical
                style={{
                  fontSize: '20px',
                  color: '#131316',
                  alignSelf: 'start',
                  alignItems: 'start',
                }}
              />
            }
            _focus={{ border: 'none', outline: 'none' }}
            _active={{ border: 'none', outline: 'none' }}
          />
        </PopoverTrigger>
        <PopoverContent
          _focus={{ border: 'none', outline: 'none' }}
          _active={{ border: 'none', outline: 'none' }}
          borderColor="none"
          bg="white"
          outline="none"
          border="none"
          borderRadius="6px"
          px="2px"
          py="6px"
          box-shadow="0px 8px 16px rgba(55, 62, 64, 0.15)"
          w="223px"
        >
          <PopoverBody>
            <Box>
              {options.map((data) => (
                <Flex
                  as="button"
                  onClick={() => handleClick(data)}
                  key={data.id}
                  css={{ '&:not(&:last-child)': { marginBottom: '28px' } }}
                  alignItems="center"
                >
                  <Image
                    textAlign="right"
                    src={data.popIcon}
                    alt="additional links"
                    mr="12px"
                    justifySelf="end"
                  />
                  <Text
                    textAlign="right"
                    color={data.id > 12 ? '#E11900' : '#131316'}
                    mr={data.id > 12 ? '14px' : '12px'}
                    fontSize="14px"
                  >
                    {data.text}
                  </Text>
                </Flex>
              ))}
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopOver;
