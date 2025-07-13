import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { IFormInput } from './types';
import { TextField } from '@mui/material';

export const FormInput = <T extends FieldValues>({
  name,
  ...props
}: IFormInput<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();
  const { field } = useController({ control, name });

  return (
    <TextField
      {...field}
      {...props}
      value={field.value ?? ''}
      onChange={(e) => {
        if (props.type === 'number') {
          const value = e.target.value ? Number(e.target.value) : '';
          field.onChange(value);
          return;
        }
        field.onChange(e.target.value);
      }}
      error={!!errors[name]}
      helperText={errors[name]?.message?.toString()}
    />
  );
};
