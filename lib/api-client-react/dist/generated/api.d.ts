import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { DashboardSummary, ErrorResponse, HealthStatus, ListStudentsParams, Student, StudentInput, StudentUpdate } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListStudentsUrl: (params?: ListStudentsParams) => string;
/**
 * Returns all student records, optionally filtered by name, email, or department.
 * @summary List students
 */
export declare const listStudents: (params?: ListStudentsParams, options?: Parameters<typeof customFetch>[1]) => Promise<Student[]>;
export declare const getListStudentsQueryKey: (params?: ListStudentsParams) => readonly ["/api/students/", ...ListStudentsParams[]];
export declare const getListStudentsQueryOptions: <TData = Awaited<ReturnType<typeof listStudents>>, TError = ErrorType<unknown>>(params?: ListStudentsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listStudents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listStudents>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListStudentsQueryResult = NonNullable<Awaited<ReturnType<typeof listStudents>>>;
export type ListStudentsQueryError = ErrorType<unknown>;
/**
 * @summary List students
 */
export declare function useListStudents<TData = Awaited<ReturnType<typeof listStudents>>, TError = ErrorType<unknown>>(params?: ListStudentsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listStudents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateStudentUrl: () => string;
/**
 * @summary Create student
 */
export declare const createStudent: (studentInput: StudentInput, options?: Parameters<typeof customFetch>[1]) => Promise<Student>;
export declare const getCreateStudentMutationKey: () => readonly ["createStudent"];
export declare const getCreateStudentMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createStudent>>, TError, CreateStudentMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createStudent>>, TError, CreateStudentMutationVariables, TContext>;
export type CreateStudentMutationResult = NonNullable<Awaited<ReturnType<typeof createStudent>>>;
export type CreateStudentMutationBody = BodyType<StudentInput>;
export type CreateStudentMutationError = ErrorType<ErrorResponse>;
export type CreateStudentMutationVariables = {
    data: BodyType<StudentInput>;
};
/**
* @summary Create student
*/
export declare const useCreateStudent: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createStudent>>, TError, CreateStudentMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createStudent>>, TError, CreateStudentMutationVariables, TContext>;
export declare const getGetStudentUrl: (id: number) => string;
/**
 * @summary Get student
 */
export declare const getStudent: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<Student>;
export declare const getGetStudentQueryKey: (id: number) => readonly [`/api/students/${number}/`];
export declare const getGetStudentQueryOptions: <TData = Awaited<ReturnType<typeof getStudent>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStudent>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStudent>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStudentQueryResult = NonNullable<Awaited<ReturnType<typeof getStudent>>>;
export type GetStudentQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get student
 */
export declare function useGetStudent<TData = Awaited<ReturnType<typeof getStudent>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStudent>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateStudentUrl: (id: number) => string;
/**
 * @summary Replace student
 */
export declare const updateStudent: (id: number, studentInput: StudentInput, options?: Parameters<typeof customFetch>[1]) => Promise<Student>;
export declare const getUpdateStudentMutationKey: () => readonly ["updateStudent"];
export declare const getUpdateStudentMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateStudent>>, TError, UpdateStudentMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateStudent>>, TError, UpdateStudentMutationVariables, TContext>;
export type UpdateStudentMutationResult = NonNullable<Awaited<ReturnType<typeof updateStudent>>>;
export type UpdateStudentMutationBody = BodyType<StudentInput>;
export type UpdateStudentMutationError = ErrorType<ErrorResponse>;
export type UpdateStudentMutationVariables = {
    id: number;
    data: BodyType<StudentInput>;
};
/**
* @summary Replace student
*/
export declare const useUpdateStudent: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateStudent>>, TError, UpdateStudentMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateStudent>>, TError, UpdateStudentMutationVariables, TContext>;
export declare const getPatchStudentUrl: (id: number) => string;
/**
 * @summary Partially update student
 */
export declare const patchStudent: (id: number, studentUpdate: StudentUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<Student>;
export declare const getPatchStudentMutationKey: () => readonly ["patchStudent"];
export declare const getPatchStudentMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof patchStudent>>, TError, PatchStudentMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof patchStudent>>, TError, PatchStudentMutationVariables, TContext>;
export type PatchStudentMutationResult = NonNullable<Awaited<ReturnType<typeof patchStudent>>>;
export type PatchStudentMutationBody = BodyType<StudentUpdate>;
export type PatchStudentMutationError = ErrorType<ErrorResponse>;
export type PatchStudentMutationVariables = {
    id: number;
    data: BodyType<StudentUpdate>;
};
/**
* @summary Partially update student
*/
export declare const usePatchStudent: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof patchStudent>>, TError, PatchStudentMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof patchStudent>>, TError, PatchStudentMutationVariables, TContext>;
export declare const getDeleteStudentUrl: (id: number) => string;
/**
 * @summary Delete student
 */
export declare const deleteStudent: (id: number, options?: Parameters<typeof customFetch>[1]) => Promise<void>;
export declare const getDeleteStudentMutationKey: () => readonly ["deleteStudent"];
export declare const getDeleteStudentMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteStudent>>, TError, DeleteStudentMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteStudent>>, TError, DeleteStudentMutationVariables, TContext>;
export type DeleteStudentMutationResult = NonNullable<Awaited<ReturnType<typeof deleteStudent>>>;
export type DeleteStudentMutationError = ErrorType<ErrorResponse>;
export type DeleteStudentMutationVariables = {
    id: number;
};
/**
* @summary Delete student
*/
export declare const useDeleteStudent: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteStudent>>, TError, DeleteStudentMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteStudent>>, TError, DeleteStudentMutationVariables, TContext>;
export declare const getGetDashboardSummaryUrl: () => string;
/**
 * Returns aggregate statistics for the current student records.
 * @summary Get dashboard summary
 */
export declare const getDashboardSummary: (options?: Parameters<typeof customFetch>[1]) => Promise<DashboardSummary>;
export declare const getGetDashboardSummaryQueryKey: () => readonly ["/api/dashboard/summary/"];
export declare const getGetDashboardSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardSummary>>>;
export type GetDashboardSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard summary
 */
export declare function useGetDashboardSummary<TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map