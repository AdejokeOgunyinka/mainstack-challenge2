import {
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  chakra,
  Text,
  Box,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { typeProcessModal } from './types';
import { Button } from '../../../../components';
import { Colors } from '../../../../constants';
import {
  contentCompany,
  contentDoc,
  contentPaste,
} from '../../../../assets/images';
import LaunchpadRegModal from './LaunchpadRegModal';

const ProcessModal: React.FC<typeProcessModal> = ({ isOpen, onClose }) => {
  const ProcessBox: React.FC<{
    title: string;
    desc: string;
    step: string;
    img: string;
  }> = ({ title, desc, step, img }) => {
    return (
      <Box
        px={'1rem'}
        py="1.5rem"
        m="1rem"
        borderRadius="8px"
        border={`1px solid ${Colors.gray100}`}
        height="250px"
        width="260px"
      >
        <chakra.img src={img} alt="Company" marginBottom={'1rem'} />
        <Heading
          as="h2"
          color={Colors.black}
          fontSize={'1rem'}
          fontWeight="500"
        >
          {title}
        </Heading>
        <Text my="1rem" textColor={Colors.gray400} fontSize="sm">
          {desc}
        </Text>
        <Text textColor={Colors.orange} fontSize="sm">
          {step}
        </Text>
      </Box>
    );
  };

  const [openReg, setOpenReg] = useState(false);
  return (
    <>
      <Modal
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
        size="full"
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <Flex
              alignItems={'center'}
              justifyContent="center"
              flexDirection={'column'}
              margin={{
                lg: '6rem auto',
                md: '5rem auto',
                sm: '4rem auto 2rem',
                base: '4rem auto 2rem',
              }}
            >
              <Box textAlign={'center'} maxWidth="600px" margin={'0 auto'}>
                <Heading
                  as="h2"
                  color={Colors.black}
                  fontSize={{ lg: '1.6rem', sm: '1.3rem' }}
                  fontWeight="500"
                >
                  How it works
                </Heading>
                <Text textColor={Colors.primaryBlack} fontSize="sm">
                  Launchpad is a powerful, safe, and easy-to-use platform for
                  registering a company. By removing lengthy paperwork, legal
                  complexity, and numerous fees.
                </Text>
              </Box>
              <Flex mt="1rem" justifyContent={'center'} flexWrap="wrap">
                <ProcessBox
                  img={contentCompany}
                  title="Company information"
                  desc="Fill and submit your company information"
                  step="Step One"
                />
                <ProcessBox
                  img={contentPaste}
                  title="Upload document"
                  desc="Sign and upload company documents"
                  step="Step Two"
                />
                <ProcessBox
                  img={contentDoc}
                  title="Get a registered company and tax identification number"
                  desc="Fill and submit your company information"
                  step="Step Three"
                />
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter
            marginBottom={{ lg: '0', md: '0', sm: '5rem', base: '6rem' }}
          >
            <Box
              mr={'1rem'}
              display={{ lg: 'unset', sm: 'none', base: 'none' }}
            >
              <Button
                text="Back"
                bg={Colors.gray100}
                color={Colors.primaryBlack}
                px={'3rem'}
                handleClick={onClose}
              />
            </Box>
            <Box
              width={{ lg: 'unset', md: 'unset', sm: 'unset', base: '100%' }}
            >
              <Button
                text="Proceed"
                width={{ lg: 'unset', md: 'unset', sm: 'unset', base: '100%' }}
                px={'3rem'}
                handleClick={() => {
                  setOpenReg(true);
                }}
              />
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <LaunchpadRegModal
        isOpen={openReg}
        onClose={() => {
          setOpenReg(false);
        }}
      />
    </>
  );
};

export default ProcessModal;
