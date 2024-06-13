"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FaCarAlt } from "react-icons/fa";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle className="flex">
                        Rent a car!
                        <FaCarAlt className="ml-2 h-6 w-6"/>
                    </CardTitle>
                    <CardDescription>Please complete all fields!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="pick-up">Pick-up Location</Label>
                                <Select>
                                    <SelectTrigger id="pick-up">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="iasi-airport">Iasi, Airport</SelectItem>
                                        <SelectItem value="bucuresti-airport">Bucuresti, Airport</SelectItem>
                                        <SelectItem value="cluj-airport">Cluj, Airport</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="drop-off">Drop-off Location</Label>
                                <Select>
                                    <SelectTrigger id="drop-off">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="iasi-airport">Iasi, Airport</SelectItem>
                                        <SelectItem value="bucuresti-airport">Bucuresti, Airport</SelectItem>
                                        <SelectItem value="cluj-airport">Cluj, Airport</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="car-type">Car type</Label>
                                <Select>
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
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </main>
    );
}
