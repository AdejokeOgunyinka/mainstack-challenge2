import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Button from '../../../../../components/Button';

interface ILeaveTribeProps {
  onClose?: () => void;
}

const LeaveTribe = ({ onClose }: ILeaveTribeProps) => {
  return (
    <>
      <ModalContent>
        <ModalHeader>Delete tribe?</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody fontSize="14px" textColor="#4D5760">
          Are you sure you want to delete? Deleting this will permanently remove
          all the tribe details.
        </ModalBody>

        <ModalFooter>
          <Button
            handleClick={onClose}
            text={'Delete'}
            px={'1.5rem'}
            py={{ base: '12px', md: '16px' }}
            bg={'#E11900'}
            color={'white'}
            width="full"
            borderRadius="100px"
          />
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default LeaveTribe;
