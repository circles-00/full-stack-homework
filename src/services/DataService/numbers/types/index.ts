export interface IAdjacentNumberPair {
  id1: number;
  number1: number;
  id2: number;
  number2: number;
  sum: number;
}

export interface IFetchAdjacentNumberPairsResponse {
  data: IAdjacentNumberPair[];
}
