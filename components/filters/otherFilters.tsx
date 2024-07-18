"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { IOtherFilters } from "./IOtherFilters";
import { FormErrors } from "../rent-form/rent-form";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@nextui-org/theme";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "react-feather";

export function OtherFilters(props: {
    otherFilters: IOtherFilters;
    setOtherFilters: Dispatch<SetStateAction<IOtherFilters>>;
    collapsedContext: [boolean, Dispatch<SetStateAction<boolean>>];
}): any {
    const { otherFilters, setOtherFilters } = props;
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [show, setShow] = props.collapsedContext;

    const [sameDropOffLocation, setSameDropOffLocation] = useState(false);
    const errors: FormErrors = {};
    if (!otherFilters.pickUpLocation) errors.pickUpLocation = "Pick-up location is required.";
    if (!otherFilters.dropOffLocation) errors.dropOffLocation = "Drop-off location is required.";

    const handleSameDropOffLocationChange = (e: any) => {
        setSameDropOffLocation(e.target.checked);
        if (e.target.checked) {
            setOtherFilters((prev) => ({ ...prev, dropOffLocation: prev.pickUpLocation }));
        }
    };

    const handlePickUpLocationChange = (value: string) => {
        setOtherFilters((prev) => ({ ...prev, pickUpLocation: value }));
        if (sameDropOffLocation) {
            setOtherFilters((prev) => ({ ...prev, dropOffLocation: value }));
        }
    };

    return (
        <Card className="w-[350px] lg:mb-0 mb-10 border-gray-700 h-fit ">
            <CardHeader
                className="cursor-pointer h-[20px] flex justify-center items-center"
                onClick={() => {
                    setShow(!show);
                }}
            >
                <div className="flex justify-between w-full">
                    <CardTitle className="flex justify-center items-center">Other Filters</CardTitle>
                    {show ? <ChevronUp /> : <ChevronDown />}
                </div>
            </CardHeader>
            {show ? (
                <CardContent>
                    <>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="pick-up">Pick-up Location</Label>
                                <Select
                                    value={otherFilters.pickUpLocation}
                                    onValueChange={(value) => {
                                        handlePickUpLocationChange(value);
                                    }}
                                >
                                    <SelectTrigger id="pick-up">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="iasi-airport">Iasi, Airport</SelectItem>
                                        <SelectItem value="bucuresti-airport">Bucuresti, Airport</SelectItem>
                                        <SelectItem value="cluj-airport">Cluj, Airport</SelectItem>
                                    </SelectContent>
                                </Select>
                                {formErrors.pickUpLocation && (
                                    <span className="text-red-500 text-sm">{formErrors.pickUpLocation}</span>
                                )}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label
                                    htmlFor="drop-off"
                                    className={`${sameDropOffLocation ? "text-gray-300" : ""}`}
                                >
                                    Drop-off Location
                                </Label>
                                <Select
                                    value={otherFilters.dropOffLocation}
                                    onValueChange={(value) => {
                                        setOtherFilters((prev) => ({ ...prev, dropOffLocation: value }));
                                    }}
                                    disabled={sameDropOffLocation}
                                >
                                    <SelectTrigger id="drop-off">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="iasi-airport">Iasi, Airport</SelectItem>
                                        <SelectItem value="bucuresti-airport">Bucuresti, Airport</SelectItem>
                                        <SelectItem value="cluj-airport">Cluj, Airport</SelectItem>
                                    </SelectContent>
                                </Select>
                                {formErrors.dropOffLocation && (
                                    <span className="text-red-500 text-sm">{formErrors.dropOffLocation}</span>
                                )}
                            </div>
                            <div className="flex items-center">
                                <Checkbox
                                    id="same-location"
                                    checked={sameDropOffLocation}
                                    onCheckedChange={(checked) => {
                                        if (typeof checked === "boolean") {
                                            handleSameDropOffLocationChange({
                                                target: {
                                                    checked,
                                                },
                                            });
                                        }
                                    }}
                                />
                                <label
                                    htmlFor="same-location"
                                    className="text-sm font-medium ml-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Same as pick-up location
                                </label>
                            </div>
                            <div className={cn("grid gap-2")}>
                                <Label htmlFor="date">Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            id="date"
                                            variant={"outline"}
                                            className={cn(
                                                "w-[300px] justify-start text-left font-normal",
                                                !otherFilters.date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {otherFilters.date?.from ? (
                                                otherFilters.date.to ? (
                                                    <>
                                                        {format(otherFilters.date.from, "LLL dd, y")} -{" "}
                                                        {format(otherFilters.date.to, "LLL dd, y")}
                                                    </>
                                                ) : (
                                                    format(otherFilters.date.from, "LLL dd, y")
                                                )
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            initialFocus
                                            mode="range"
                                            defaultMonth={otherFilters.date?.from}
                                            selected={otherFilters.date}
                                            onSelect={(value) => {
                                                setOtherFilters((prev) => ({ ...prev, date: value }));
                                            }}
                                            numberOfMonths={2}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </>
                </CardContent>
            ) : null}
        </Card>
    );
}
