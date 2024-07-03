"use server";

import CarCard, { CarCardProps } from "@/components/car-card/card";
import { fetchCars } from "@/lib/data";

export default async function CarsTable(): Promise<JSX.Element> {
    const cars: CarCardProps[] = await fetchCars();
    const multipliedCars = [...cars, ...cars, ...cars];
    return (
        <>
            <div className="cars-grid-container">
                {multipliedCars.map((car) => (
                    <CarCard key={car.id} {...car} />
                ))}
            </div>
        </>
    );
}
