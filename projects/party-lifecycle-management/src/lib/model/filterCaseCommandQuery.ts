export interface FilterCaseCommandQuery {
    partyName?: string;
    partyIdentificationNumber?: string;
     dateFrom?: Date;
     dateTo?: Date;
     createdBy?: string;
     limit?: number;
     page?: number;
     pageSize?: number;
     sortOrder?: FilterCaseCommandQuery.SortOrderEnum;
     sortBy?: string;
}

export namespace FilterCaseCommandQuery {
    export type SortOrderEnum = 'asc' | 'desc';
    export const SortOrderEnum = {
        Asc: 'asc' as SortOrderEnum,
        Desc: 'desc' as SortOrderEnum
    };
}