import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { IFormSingleSelect } from './types';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

export const FormSingleSelect = <T extends FieldValues>({
  name,
  options,
  label,
  ...props
}: IFormSingleSelect<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();
  const { field } = useController({ control, name });

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} error={!!errors[name]}>
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        labelId={name}
        id={name}
        {...field}
        {...props}
        value={field.value ?? ''}
      >
        {options.map(({ value, label }, index) => (
          <MenuItem key={index} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {errors[name] && (
        <FormHelperText>{errors[name]?.message?.toString()}</FormHelperText>
      )}
    </FormControl>
  );
};
