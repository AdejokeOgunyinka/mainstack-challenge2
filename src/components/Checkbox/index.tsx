import { Checkbox } from '@chakra-ui/react';
import { ICheck } from './types';
import { Colors } from '../../constants';

const CheckboxCmp: React.FC<ICheck> = ({
  label,
  isChecked,
  id,
  handleChange,
}) => {
  return (
    <>
      <Checkbox
        iconColor={Colors.white}
        colorScheme="orange"
        id={id}
        isChecked={isChecked}
        onChange={handleChange}
      >
        {label}
      </Checkbox>
    </>
  );
};

export default CheckboxCmp;
