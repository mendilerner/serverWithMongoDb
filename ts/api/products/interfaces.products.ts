export interface tProduct{
    id?: number;
    title: string;
    category: string;
    price: string;
    image: string;
    description: string;
    rating: {rate: number; count: number}
    quantity: number
}