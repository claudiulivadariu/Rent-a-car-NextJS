// CarsTable.server.tsx

"use server";

import { CarCardProps } from "@/components/car-card/card";
import { fetchCars } from "@/lib/data";

export async function getCars(): Promise<CarCardProps[]> {
    const cars: CarCardProps[] = await fetchCars();
    return cars;
}
