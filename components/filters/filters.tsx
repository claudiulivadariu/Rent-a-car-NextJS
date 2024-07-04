"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { IFilters } from "./IFilters";

const emptyFilters: IFilters = {
    carType: "",
    fuelType: "",
    transmission: "",
    price: { min: 0, max: 1000 },
    seats: "",
};

export function Filters(props: {
    filters: IFilters;
    setFilters: Dispatch<SetStateAction<IFilters>>;
    applyFilters: any;
    handleClear: any;
}) {
    const { filters, setFilters, applyFilters, handleClear } = props;
    const [appliedFilters, setAppliedFilters] = useState<IFilters>(emptyFilters);
    return (
        <Card className="w-[350px] lg:mb-0 mb-10 border-gray-700 h-fit ">
            <CardHeader>
                <CardTitle className="flex justify-center items-center">Filters</CardTitle>
            </CardHeader>
            <CardContent>
                <>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="car-type">Car type</Label>
                            <Select
                                value={filters.carType}
                                onValueChange={(value) => {
                                    setFilters({ ...filters, carType: value });
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
                                value={filters.fuelType}
                                onValueChange={(value) => {
                                    setFilters({ ...filters, fuelType: value });
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
                                value={filters.transmission}
                                onValueChange={(value) => {
                                    setFilters({ ...filters, transmission: value });
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
                                value={filters.seats}
                                onValueChange={(value) => {
                                    setFilters({ ...filters, seats: value });
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
                                        setFilters({
                                            ...filters,
                                            price: { min: parseInt(e.target.value), max: filters.price.max },
                                        });
                                    }}
                                />
                                <p>-</p>
                                <Input
                                    type="number"
                                    placeholder="Max Price"
                                    className={"w-[130px]"}
                                    onChange={(e) => {
                                        setFilters({
                                            ...filters,
                                            price: { min: filters.price.min, max: parseInt(e.target.value) },
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid w-full items-center grid-flow-col mt-4 -ml-8">
                        <CardFooter>
                            <Button
                                type="button"
                                style={{ width: "130px" }}
                                onClick={() => {
                                    handleClear();
                                    setAppliedFilters(emptyFilters);
                                }}
                                className={`${
                                    JSON.stringify(filters) === JSON.stringify(emptyFilters)
                                        ? "bg-default-200 text-gray-600"
                                        : "bg-default-600 text-white"
                                }`}
                                disabled={JSON.stringify(filters) === JSON.stringify(emptyFilters)}
                            >
                                Clear!
                            </Button>
                        </CardFooter>
                        <CardFooter>
                            <Button
                                type="submit"
                                style={{ width: "130px" }}
                                onClick={() => {
                                    applyFilters();
                                    setAppliedFilters(filters);
                                }}
                                disabled={
                                    JSON.stringify(filters) === JSON.stringify(emptyFilters) ||
                                    JSON.stringify(filters) === JSON.stringify(appliedFilters)
                                }
                            >
                                Apply filters!
                            </Button>
                        </CardFooter>
                    </div>
                </>
            </CardContent>
        </Card>
    );
}
