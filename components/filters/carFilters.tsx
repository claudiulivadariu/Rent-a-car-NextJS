"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ICarFilters } from "./ICarFilters";
import { ChevronDown, ChevronUp } from "react-feather";

const emptyFilters: ICarFilters = {
    carType: "",
    fuelType: "",
    transmission: "",
    price: { min: 0, max: 1000 },
    seats: "",
};

export function CarFilters(props: {
    carFilters: ICarFilters;
    setCarFilters: Dispatch<SetStateAction<ICarFilters>>;
    applyFilters: any;
    handleClear: any;
    collapsedContext: [boolean, Dispatch<SetStateAction<boolean>>];
}): any {
    const { carFilters, setCarFilters, applyFilters, handleClear } = props;
    const [show, setShow] = props.collapsedContext;
    const [appliedFilters, setAppliedFilters] = useState<ICarFilters>(emptyFilters);
    return (
        <Card className="w-[350px] lg:mb-4 mb-10 border-gray-700 h-fit ">
            <CardHeader
                className="cursor-pointer h-[20px] flex justify-center items-center"
                onClick={() => {
                    setShow(!show);
                }}
            >
                <div className="flex justify-between w-full">
                    <CardTitle className="flex justify-center items-center">Car Filters</CardTitle>
                    {show ? <ChevronUp /> : <ChevronDown />}
                </div>
            </CardHeader>
            {show ? (
                <CardContent>
                    <>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="car-type">Car type</Label>
                                <Select
                                    value={carFilters.carType}
                                    onValueChange={(value) => {
                                        setCarFilters({ ...carFilters, carType: value });
                                    }}
                                >
                                    <SelectTrigger id="car-type">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="small">Small</SelectItem>
                                        <SelectItem value="suv">SUV</SelectItem>
                                        <SelectItem value="luxury">Luxury</SelectItem>
                                        <SelectItem value="family">Family</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="fuel-type">Fuel type</Label>
                                <Select
                                    value={carFilters.fuelType}
                                    onValueChange={(value) => {
                                        setCarFilters({ ...carFilters, fuelType: value });
                                    }}
                                >
                                    <SelectTrigger id="fuel-type">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="diesel">Diesel</SelectItem>
                                        <SelectItem value="petrol">Petrol</SelectItem>
                                        <SelectItem value="electric">Electric</SelectItem>
                                        <SelectItem value="hybrid">Hybrid</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="transmission">Transmission type</Label>
                                <Select
                                    value={carFilters.transmission}
                                    onValueChange={(value) => {
                                        setCarFilters({ ...carFilters, transmission: value });
                                    }}
                                >
                                    <SelectTrigger id="transmission">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="manual">Manual</SelectItem>
                                        <SelectItem value="automatic">Automatic</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="seats">Seats</Label>
                                <Select
                                    value={carFilters.seats}
                                    onValueChange={(value) => {
                                        setCarFilters({ ...carFilters, seats: value });
                                    }}
                                >
                                    <SelectTrigger id="seats">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        <SelectItem value="5">5</SelectItem>
                                        <SelectItem value="7plus">7+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="price">Price range</Label>
                                <div className="grid grid-flow-col gap-4 items-center">
                                    <Input
                                        type="number"
                                        placeholder="Min Price"
                                        className={"w-[130px]"}
                                        onChange={(e) => {
                                            setCarFilters({
                                                ...carFilters,
                                                price: {
                                                    min: parseInt(e.target.value),
                                                    max: carFilters.price.max,
                                                },
                                            });
                                        }}
                                    />
                                    <p>-</p>
                                    <Input
                                        type="number"
                                        placeholder="Max Price"
                                        className={"w-[130px]"}
                                        onChange={(e) => {
                                            setCarFilters({
                                                ...carFilters,
                                                price: {
                                                    min: carFilters.price.min,
                                                    max: parseInt(e.target.value),
                                                },
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <Button
                                type="button"
                                style={{ width: "130px" }}
                                onClick={() => {
                                    handleClear();
                                    setAppliedFilters(emptyFilters);
                                }}
                                className={`${
                                    JSON.stringify(carFilters) === JSON.stringify(emptyFilters)
                                        ? "bg-default-200 text-gray-600"
                                        : "bg-default-600 text-white"
                                }`}
                                disabled={JSON.stringify(carFilters) === JSON.stringify(emptyFilters)}
                            >
                                Clear!
                            </Button>
                            <Button
                                type="submit"
                                style={{ width: "130px" }}
                                onClick={() => {
                                    applyFilters();
                                    setAppliedFilters(carFilters);
                                }}
                                disabled={
                                    JSON.stringify(carFilters) === JSON.stringify(emptyFilters) ||
                                    JSON.stringify(carFilters) === JSON.stringify(appliedFilters)
                                }
                            >
                                Apply Filters!
                            </Button>
                        </div>
                    </>
                </CardContent>
            ) : null}
        </Card>
    );
}
