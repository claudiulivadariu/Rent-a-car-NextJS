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
        try {
            const carsData = await getFilteredCars(carFilters);
            setCars(carsData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleClear = async () => {
        setLoading(true);
        setCarFilters(emptyCarFilters);
        try {
            const carsData = await getCars();
            setCars(carsData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        async function fetchData() {
            const carsData = carType ? await getCars() : await getFilteredCars(carFilters);
            setCars(carsData);
            setLoading(false);
        }
        fetchData();
    }, [carType, carFilters]);

    return (
        <main className="p-12">
            <div className="flex flex-col lg:flex-row xl:px-[10vw] justify-start items-center lg:items-start lg:pt-10">
                <div>
                    <Suspense fallback={<LoadingCard />}>
                        <CarFilters
                            carFilters={carFilters}
                            setCarFilters={setCarFilters}
                            applyFilters={applyFilters}
                            handleClear={handleClear}
                            collapsedContext={[showCarFilters, setShowCarFilters]}
                        />
                    </Suspense>
                    <Suspense fallback={<LoadingCard />}>
                        <OtherFilters
                            otherFilters={otherFilters}
                            setOtherFilters={setOtherFilters}
                            collapsedContext={[showOtherFilters, setShowOtherFilters]}
                        />
                    </Suspense>
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
