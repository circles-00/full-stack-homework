import { TextFieldProps } from '@mui/material';
import { FieldValues, Path } from 'react-hook-form';

export interface IFormInput<T extends FieldValues>
  extends Omit<TextFieldProps, 'name'> {
  name: Path<T>;
}
