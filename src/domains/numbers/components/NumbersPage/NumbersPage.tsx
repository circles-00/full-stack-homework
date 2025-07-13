import { useMemo, type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  numbersValidationSchema,
  TNumbersValidationSchema,
} from './utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '@/form-fields';
import { Button } from '@mui/material';
import { StyledContainer, StyledFormContainer } from './NumbersPage.styled';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IAdjacentNumberPair } from '@/services/DataService';
import { useMutation, useQuery } from '@tanstack/react-query';
import { DataService } from '@/services';
import { random } from 'lodash';
import { Toast } from '@/components';
import { getAxiosErrorMessage } from '@/services/DataService/utils';

export const NumbersPage: FC = () => {
  const methods = useForm<TNumbersValidationSchema>({
    resolver: zodResolver(numbersValidationSchema),
    mode: 'onBlur',
  });

  const { data, refetch, isLoading, isFetching } = useQuery({
    queryFn: DataService.fetchAdjacentNumberPairs,
    queryKey: DataService.fetchAdjacentNumberPairs.queryKey,
  });

  const {
    mutate,
    isSuccess,
    isError,
    error,
    reset,
    data: insertResponse,
  } = useMutation({
    mutationFn: DataService.insertNumber,
    mutationKey: DataService.insertNumber.queryKey,
    onSuccess: () => {
      methods.reset();
      refetch();
    },
  });

  const onSubmit = (data: TNumbersValidationSchema) => {
    mutate(data.number);
  };

  const columns = useMemo<GridColDef<IAdjacentNumberPair>[]>(
    () => [
      { field: 'id1', headerName: 'ID 1', flex: 1 },
      { field: 'number1', headerName: 'Number 1', flex: 1 },
      { field: 'id2', headerName: 'ID 2', flex: 1 },
      { field: 'number2', headerName: 'Number 2', flex: 1 },
      { field: 'sum', headerName: 'Sum', flex: 1 },
    ],
    [],
  );

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
      <StyledContainer sx={{ mt: 4 }}>
        <StyledFormContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <FormInput<TNumbersValidationSchema>
            name="number"
            type="number"
            placeholder="e.g. 42"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </StyledFormContainer>
        <DataGrid
          rows={data?.data ?? []}
          columns={columns}
          getRowId={({ id1, id2 }) => id1 + id2 + random(1000)}
          hideFooterPagination
          loading={isLoading || isFetching}
        />
      </StyledContainer>
    </FormProvider>
  );
};
