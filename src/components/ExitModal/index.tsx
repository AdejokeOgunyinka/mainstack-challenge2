import { Modal, ModalOverlay, Box } from '@chakra-ui/react';

interface IExitModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ExitModal = ({ isOpen, onClose, children }: IExitModalProps) => {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {children}
      </Modal>
    </Box>
  );
};

export default ExitModal;
