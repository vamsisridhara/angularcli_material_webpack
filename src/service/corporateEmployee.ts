export class CorporateEmployee {
    name: string;
    gender: string;
    company: string;
    age: number;

    constructor(name: string, gender: string, company: string, age: number){
        this.name = name;
        this.gender = gender;
        this.company = company;
        this.age = age;
    }
}

export class Page {
    //The number of elements in the page
    size: number = 0;
    //The total number of elements
    totalElements: number = 0;
    //The total number of pages
    totalPages: number = 0;
    //The current page number
    pageNumber: number = 0;
}

/**
 * An array of data with an associated page object used for paging
 */
export class PagedData<T> {
    data = new Array<T>();
    page = new Page();
}