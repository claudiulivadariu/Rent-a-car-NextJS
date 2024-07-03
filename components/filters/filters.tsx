"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function Filters() {
    const [carType, setCarType] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [transmission, setTransmission] = useState("");
    const [price, setPrice] = useState<{ min: number; max: number }>({ min: 0, max: 0 });
    const [seats, setSeats] = useState("");

    function handleClear(): void {
        setCarType("");
    }

    useEffect(() => {
        
    }, [carType, fuelType, transmission, seats, price]);

    return (
        <Card className="w-[350px] lg:mb-0 mb-10 border-gray-700 h-fit mx-10">
            <CardHeader>
                <CardTitle className="flex justify-center items-center">Filters</CardTitle>
            </CardHeader>
            <CardContent>
                <>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="car-type">Car type</Label>
                            <Select value={carType} onValueChange={setCarType}>
                                <SelectTrigger id="car-type">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="small">Small</SelectItem>
                                    <SelectItem value="SUV">SUV</SelectItem>
                                    <SelectItem value="luxury">Luxury</SelectItem>
                                    <SelectItem value="family">Family</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="fuel-type">Fuel type</Label>
                            <Select value={fuelType} onValueChange={setFuelType}>
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
                            <Select value={transmission} onValueChange={setTransmission}>
                                <SelectTrigger id="transmission">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="small">Manual</SelectItem>
                                    <SelectItem value="SUV">Automatic</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="seats">Seats</Label>
                            <Select value={seats} onValueChange={setSeats}>
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
                                    onChange={(e) => {
                                        setPrice({ ...price, min: parseInt(e.target.value) });
                                    }}
                                />
                                <p>-</p>
                                <Input
                                    type="number"
                                    placeholder="Max Price"
                                    onChange={(e) => {
                                        setPrice({ ...price, max: parseInt(e.target.value) });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <CardFooter className="flex justify-center items-center pt-4 -mb-4">
                        <Button type="button" style={{ width: "300px" }} onClick={handleClear}>
                            Clear!
                        </Button>
                    </CardFooter>
                </>
            </CardContent>
        </Card>
    );
}
