import type { FC } from 'react';

import { FormLabel, FormControl, Input, InputProps } from '@chakra-ui/react';

type Props = {
  label: string;
  isLabelRequier?: boolean;
} & InputProps;

export const TextFiled: FC<Props> = ({ label, isLabelRequier = false, ...rest }) => {
  return (
    <FormControl isRequired={isLabelRequier}>
      <FormLabel>{label}</FormLabel>
      <Input type="text" {...rest} />
      {/* <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage> */}
    </FormControl>
  );
};
