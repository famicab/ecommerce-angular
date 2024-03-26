export interface Store {
    categories: Category[];
    products:   Product[];
}

export interface Category {
    id:          string;
    name:        string;
    description: string;
}

export interface Product {
    id:          string;
    name:        string;
    description: string;
    price:       number;
    idCategory:  string;
}