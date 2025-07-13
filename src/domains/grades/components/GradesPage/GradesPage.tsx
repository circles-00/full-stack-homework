'use client';

import { FC, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { gradesValidationSchema, TGradesValidationSchema } from './utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSingleSelect } from '@/form-fields/FormSingleSelect/FormSingleSelect';
import { FormInput } from '@/form-fields';
import {
  StyledContainer,
  StyledFormContainer,
  StyledInputContainer,
} from './GradesPage.styled';
import { Button } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { DataService } from '@/services';
import { Toast } from '@/components';
import { getAxiosErrorMessage } from '@/services/DataService';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IFetchGradesResponse } from '@/services/DataService/grades/types';

export const GradesPage: FC = () => {
  const methods = useForm<TGradesValidationSchema>({
    resolver: zodResolver(gradesValidationSchema),
    mode: 'onBlur',
  });

  const { data, refetch, isLoading, isFetching } = useQuery({
    queryFn: DataService.fetchGrades,
    queryKey: DataService.fetchGrades.queryKey,
  });

  const {
    mutate,
    data: insertResponse,
    isError,
    error,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: DataService.insertGrade,
    mutationKey: DataService.insertGrade.queryKey,
    onSuccess: () => {
      methods.reset();
      refetch();
    },
  });

  const options = useMemo(
    () => [
      { label: 'Math', value: 'Math' },
      { label: 'Science', value: 'Science' },
      { label: 'History', value: 'History' },
    ],
    [],
  );

  const columns = useMemo<GridColDef<IFetchGradesResponse>[]>(
    () => [
      { field: 'id', headerName: 'ID', flex: 1 },
      { field: 'class', headerName: 'Class', flex: 1 },
      { field: 'grade', headerName: 'Grade', flex: 1 },
    ],
    [],
  );

  const onSubmit = (data: TGradesValidationSchema) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <Toast
        variant={isError ? 'error' : 'success'}
        open={isSuccess || isError}
        onClose={reset}
        message={
          isError ? getAxiosErrorMessage(error) : insertResponse?.message
        }
      />
      <StyledContainer>
        <StyledFormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <FormSingleSelect<TGradesValidationSchema>
            name="class"
            options={options}
            label="Select Class"
          />
          <StyledInputContainer>
            <FormInput<TGradesValidationSchema>
              name="grade"
              fullWidth
              type="number"
              label="Enter Grade"
              slotProps={{ htmlInput: { min: 0, max: 100 } }}
            />
          </StyledInputContainer>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </StyledFormContainer>
        <DataGrid
          rows={data ?? []}
          columns={columns}
          loading={isLoading || isFetching}
          hideFooterPagination
        />
      </StyledContainer>
    </FormProvider>
  );
};
