import React from 'react';
import ReactFlagsSelect from 'react-flags-select';

interface CountrySelectInterface {
  selected: string;
  onSelect(): void;
  disabled: boolean;
  searchPlaceholder: string;
  selectedSize: number;
  optionsSize: number;
  placeholder: string;
  searchable: boolean;
}

const CountrySelect: React.FC<CountrySelectInterface> = ({
  selected,
  onSelect,
  disabled,
  searchPlaceholder,
  selectedSize,
  optionsSize,
  placeholder,
  searchable,
}) => {
  return (
    <>
      <ReactFlagsSelect
        selected={selected}
        onSelect={onSelect}
        selectedSize={selectedSize}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        disabled={disabled}
      />
    </>
  );
};

export default CountrySelect;
