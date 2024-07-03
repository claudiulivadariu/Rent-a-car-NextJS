"use client";

import CarCard, { CarCardProps } from "@/components/car-card/card";

export default function CarsTable({ cars }: { cars: CarCardProps[] }): JSX.Element {
    return (
        <div className="cars-grid-container">
            {cars.map((car) => (
                <CarCard key={car.id} {...car} />
            ))}
        </div>
    );
}
