import React from 'react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type PhoneNumberInputPropType = {
  value: string;
  onChange: (value: string) => void;
  error?: string
};

export const PhoneNumberInput = ({
	value,
	onChange,
	error
}: PhoneNumberInputPropType) => {
	return (
		<FormControl isInvalid={!!error} >
			<PhoneInput
				enableSearch
				countryCodeEditable={false}
				country={'us'}
				value={value}
				onChange={onChange}
				containerClass="phone-input-container"
				inputClass="phone-input-field"
				buttonClass="phone-input-button"
				searchClass="phone-input-search"
                inputStyle={{
                    border: '1px solid #E5E8F0'
                }}
                buttonStyle={{
                    border: '1px solid #E5E8F0',
                }}
			/>
			{!!error && <FormErrorMessage fontSize="xs" >{error}</FormErrorMessage>}
		</FormControl>
	);
};
