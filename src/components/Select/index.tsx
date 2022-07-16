import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { ISelect } from './types';
import Colors from '../../constants/Colors';
import { ReactComponent as ChevronDown } from '../../assets/svgs/chevronDown.svg';

const SelectComponent: React.FC<ISelect> = ({
  placeholder,
  id,
  isError,
  isRequired,
  handleChange,
  data,
  label,
  value,
}) => {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Select
        size={'lg'}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        _focusVisible={{
          border: `1px solid ${Colors.orange}`,
          boxShadow: '0px 0px 0px 2px #FFEEE7',
        }}
        color={Colors.primaryBlack}
        fontWeight={'lighter'}
        fontSize={'14px'}
        icon={<ChevronDown />}
      >
        {data.map((v, i) => {
          return <option value={v}>{v}</option>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
