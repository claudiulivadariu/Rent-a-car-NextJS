import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FaCarAlt } from "react-icons/fa";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface FormErrors {
    pickUpLocation?: string;
    dropOffLocation?: string;
    carType?: string;
    termsAccepted?: string;
}

export function RentForm() {
    const [pickUpLocation, setPickUpLocation] = useState("");
    const [dropOffLocation, setDropOffLocation] = useState("");
    const [carType, setCarType] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [pickUpDate, setPickUpDate] = React.useState<Date>();
    const [dropOffDate, setDropOffDate] = React.useState<Date>();
    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const errors: FormErrors = {};
        if (!pickUpLocation) errors.pickUpLocation = "Pick-up location is required.";
        if (!dropOffLocation) errors.dropOffLocation = "Drop-off location is required.";
        if (!carType) errors.carType = "Car type is required.";
        if (!termsAccepted) errors.termsAccepted = "You must accept the terms and conditions.";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            setFormErrors({});
            // Proceed with form submission
            console.log({ pickUpLocation, dropOffLocation, carType, termsAccepted });
        }
    };

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className="flex">
                    Rent a car!
                    <FaCarAlt className="ml-2 h-6 w-6" />
                </CardTitle>
                <CardDescription>Please complete all fields!</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="pick-up">Pick-up Location</Label>
                            <Select value={pickUpLocation} onValueChange={setPickUpLocation}>
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
                            <Label htmlFor="drop-off">Drop-off Location</Label>
                            <Select value={dropOffLocation} onValueChange={setDropOffLocation}>
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
                            {formErrors.carType && (
                                <span className="text-red-500 text-sm">{formErrors.carType}</span>
                            )}
                        </div>
                        <div className="flex items-center pt-2 ">
                            <Checkbox
                                id="terms"
                                checked={termsAccepted}
                                onCheckedChange={(checked) => {
                                    if (typeof checked === "boolean") setTermsAccepted(checked);
                                }}
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium ml-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                        {formErrors.termsAccepted && (
                            <span className="text-red-500 text-sm -mt-2">{formErrors.termsAccepted}</span>
                        )}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !pickUpDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {pickUpDate ? format(pickUpDate, "PPP") : <span>Pick-up date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={pickUpDate}
                                    onSelect={setPickUpDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !dropOffDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {dropOffDate ? format(dropOffDate, "PPP") : <span>Drop-off date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={dropOffDate}
                                    onSelect={setDropOffDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <CardFooter className="flex justify-center items-center pt-4 -mb-4">
                        <Button type="submit" style={{ width: "300px" }}>
                            Search!
                        </Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}