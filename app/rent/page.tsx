"use client";

import { Filters } from "@/components/filters/filters";
import CarsTable from "./[cars]/cars";
import { Suspense, useState, useEffect } from "react";
import { IFilters } from "@/components/filters/IFilters";
import { getCars } from "./[cars]/CarsTable.server"; // Import the server function
import LoadingCard from "./[cars]/loading";

export default function RentPage() {
    const [filters, setFilters] = useState<IFilters>({
        carType: "",
        fuelType: "",
        transmission: "",
        price: { min: 0, max: 1000 },
        seats: "",
    });

    const [cars, setCars] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const carsData = await getCars();
            setCars(carsData);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <main className="p-12">
            <div className="flex flex-col lg:flex-row">
                <Filters filters={filters} setFilters={setFilters} />
                {/* <div className="mx-10">{loading ? <LoadingCard /> : <CarsTable cars={cars} />}</div> */}
                <div className="mx-10 flex">
                    {loading ? (
                        <div className="cars-grid-container m-4">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <LoadingCard key={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="">
                            <CarsTable cars={cars} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
