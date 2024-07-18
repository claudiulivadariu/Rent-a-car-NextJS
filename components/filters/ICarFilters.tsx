export interface ICarFilters {
    carType: string;
    fuelType: string;
    transmission: string;
    price: { min: number; max: number };
    seats: string;
}

export const emptyCarFilters = {
    carType: "",
    fuelType: "",
    transmission: "",
    price: { min: 0, max: 1000 },
    seats: "",
};
