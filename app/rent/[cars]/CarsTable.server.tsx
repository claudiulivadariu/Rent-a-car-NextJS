// CarsTable.server.tsx

"use server";

import { CarCardProps } from "@/components/car-card/card";
import { ICarFilters } from "@/components/filters/ICarFilters";
import { fetchCars, fetchFilteredCars } from "@/lib/data";

export async function getCars(): Promise<CarCardProps[]> {
    const cars: CarCardProps[] = await fetchCars();
    return cars;
}

export async function getFilteredCars(filters: ICarFilters) {
    const cars: CarCardProps[] = await fetchFilteredCars(filters);
    return cars;
}
