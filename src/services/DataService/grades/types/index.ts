export type TClass = 'Math' | 'Science' | 'History';

export interface IInsertGradePayload {
  grade: number;
  class: TClass;
}
export interface IFetchGradesResponse {
  id: number;
  grade: number;
  class: TClass;
}
