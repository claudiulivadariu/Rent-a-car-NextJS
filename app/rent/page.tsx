"use client";

import { CarFilters } from "@/components/filters/carFilters";
import CarsTable from "./[cars]/cars";
import { Suspense, useState, useEffect } from "react";
import { emptyCarFilters, ICarFilters } from "@/components/filters/ICarFilters";
import { getCars, getFilteredCars } from "./[cars]/CarsTable.server"; // Import the server function
import LoadingCard from "./[cars]/loading";
import { OtherFilters } from "@/components/filters/otherFilters";
import { emptyOtherFilters, IOtherFilters } from "@/components/filters/IOtherFilters";
import { useSearchParams } from "next/navigation";

export default function RentPage() {
    const params = useSearchParams();
    const carType = params.get("carType");
    const pickUpLocation = params.get("pickUpLocation");
    const dropOffLocation = params.get("dropOffLocation");
    const startDate = params.get("startDate");
    const endDate = params.get("endDate");

    const [carFilters, setCarFilters] = useState<ICarFilters>({
        ...emptyCarFilters,
        carType: carType?.toLocaleLowerCase() ?? "",
    });
    const [otherFilters, setOtherFilters] = useState<IOtherFilters>({
        ...emptyOtherFilters,
        pickUpLocation: pickUpLocation ?? "",
        dropOffLocation: dropOffLocation ?? "",
        date:
            startDate && endDate
                ? {
                      from: new Date(startDate),
                      to: new Date(endDate),
                  }
                : undefined,
    });
    const [cars, setCars] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    const [showCarFilters, setShowCarFilters] = useState(true);
    const [showOtherFilters, setShowOtherFilters] = useState(true);

    const applyFilters = async () => {
        setLoading(true);
        const carsData = await getFilteredCars(carFilters);
        setCars(carsData);
        setLoading(false);
    };

    const handleClear = async () => {
        setLoading(true);
        setCarFilters(emptyCarFilters);
        const carsData = await getCars();
        setCars(carsData);
        setLoading(false);
    };

    useEffect(() => {
        async function fetchData() {
            const carsData = await getCars();
            setCars(carsData);
            setLoading(false);
        }
        if (carType) {
            applyFilters();
        } else {
            fetchData();
        }
    }, []);

    return (
        <main className="p-12">
            <div className="flex flex-col lg:flex-row xl:px-[10vw] justify-start items-center lg:items-start lg:pt-10">
                <div>
                    <CarFilters
                        carFilters={carFilters}
                        setCarFilters={setCarFilters}
                        applyFilters={applyFilters}
                        handleClear={handleClear}
                        collapsedContext={[showCarFilters, setShowCarFilters]}
                    />
                    <OtherFilters
                        otherFilters={otherFilters}
                        setOtherFilters={setOtherFilters}
                        collapsedContext={[showOtherFilters, setShowOtherFilters]}
                    />
                </div>
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
