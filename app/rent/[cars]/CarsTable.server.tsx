// CarsTable.server.tsx

"use server";

import { CarCardProps } from "@/components/car-card/card";
import { IFilters } from "@/components/filters/IFilters";
import { fetchCars, fetchFilteredCars } from "@/lib/data";

export async function getCars(): Promise<CarCardProps[]> {
    const cars: CarCardProps[] = await fetchCars();
    return cars;
}

export async function getFilteredCars(filters: IFilters){
    const cars: CarCardProps[] = await fetchFilteredCars(filters);
    return cars;
}
