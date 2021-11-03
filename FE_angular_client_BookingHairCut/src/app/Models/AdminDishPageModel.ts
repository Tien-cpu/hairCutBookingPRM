import { Dish } from './Dish';

export class dishpage {
    "metaData": {
        "currentPage": number,
        "totalPages": number,
        "pageSize": number,
        "totalCount": number,
        "hasPrevious": string,
        "hasNext": string,
        "nextPage": string,
        "previousPage": string,
        "firstPage": string,
        "lastPage": string,
        "currentPageUri" : string,
    };
    "items": Dish[]
}
