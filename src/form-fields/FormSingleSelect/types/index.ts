import { SelectProps } from '@mui/material';
import { FieldValues, Path } from 'react-hook-form';

export interface ISelectItem {
  label: string;
  value: string | number;
}

export interface IFormSingleSelect<T extends FieldValues>
  extends Omit<SelectProps, 'name'> {
  name: Path<T>;
  options: ISelectItem[];
}

