export interface IFilters {
    carType: string;
    fuelType: string;
    transmission: string;
    price: { min: number; max: number };
    seats: string;
}
