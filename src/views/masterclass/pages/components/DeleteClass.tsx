import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useMediaQuery,
} from '@chakra-ui/react';
import Button from 'components/Button';

interface IDeleteClassProps {
  onClose?: () => void;
}

const DeleteClass = ({ onClose }: IDeleteClassProps) => {
  const [isLargerThan768px] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <ModalContent>
        <ModalHeader>Delete Class?</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody fontSize="14px" textColor="#4D5760">
          Are you sure you want to delete? Deleting this class will permanently
          remove all the product details.
        </ModalBody>

        {isLargerThan768px ? (
          <ModalFooter>
            <Button
              handleClick={onClose}
              text={'Cancel'}
              px={'1.5rem'}
              py={{ base: '12px', md: '16px' }}
              bg={'#E5E8F0'}
              color={'#131316'}
              width="full"
              borderRadius="100px"
              fontSize="15px"
              mr={4}
            />
            <Button
              handleClick={onClose}
              text={'Delete'}
              px={'1.5rem'}
              py={{ base: '12px', md: '16px' }}
              bg={'#E11900'}
              color={'white'}
              width="full"
              borderRadius="100px"
              fontSize="15px"
            />
          </ModalFooter>
        ) : (
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
              fontSize="15px"
            />
          </ModalFooter>
        )}
      </ModalContent>
    </>
  );
};

export default DeleteClass;
