export interface Section {
    name: string;
    products: {
        name: string;
        description: string;
        price: string;
        image: string;
    }[];
}
