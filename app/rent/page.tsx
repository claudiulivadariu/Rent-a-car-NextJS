"use client";

import { CarFilters } from "@/components/filters/carFilters";
import CarsTable from "./[cars]/cars";
import { Suspense, useState, useEffect } from "react";
import { emptyCarFilters, ICarFilters } from "@/components/filters/ICarFilters";
import { getCars, getFilteredCars } from "./[cars]/CarsTable.server"; // Import the server function
import LoadingCard from "./[cars]/loading";
import { OtherFilters } from "@/components/filters/otherFilters";
import { emptyOtherFilters, IOtherFilters } from "@/components/filters/IOtherFilters";
import { parse } from "querystring";

export default function RentPage() {
    const [carFilters, setCarFilters] = useState<ICarFilters>(emptyCarFilters);
    const [otherFilters, setOtherFilters] = useState<IOtherFilters>(emptyOtherFilters);
    const [cars, setCars] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [loadingParams, setLoadingParams] = useState(true);
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
            const carsData = carFilters ? await getFilteredCars(carFilters) : await getCars();
            setCars(carsData);
            setLoading(false);
        }
        if (!loadingParams) {
            fetchData();
        }
    }, [carFilters, loadingParams]);

    return (
        <main className="p-12">
            <div className="flex flex-col lg:flex-row xl:px-[10vw] justify-start items-center lg:items-start lg:pt-10">
                <div>
                    <Suspense fallback={<LoadingCard />}>
                        <CarFilters
                            carFilters={carFilters}
                            loadingParams={loadingParams}
                            setLoadingParams={setLoadingParams}
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
