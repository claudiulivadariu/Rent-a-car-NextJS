"use client";

import { RentForm } from "@/components/rent-form/rent-form";
import Image from "next/image";
import { inter } from "@/components/ui/fonts";
export default function Home() {
    return (
        <main className="">
            <div className="flex lg:flex-row items-center flex-col justify-evenly p-12">
                <RentForm />
                <div>
                    <div className="lg:w-[600px] h-[400px] w-screen flex justify-center items-center flex-col">
                        <p
                            className={`${inter.className} leading-normal text-yellow-500 text-2xl md:leading-normal w-full text-center translate-y-10`}
                        >
                            Renting a car has never been easier!
                        </p>
                        <Image
                            src={"/car.png"}
                            alt="Car"
                            width={300}
                            height={300}
                            className="drop-shadow-3xl"
                        />
                    </div>
                </div>
            </div>
            <div className="border-t-2">
                <div className="flex justify-center items-center p-10">
                    <div className="w-full">
                        <div className="w-[400px] p-5">
                            <h1 className={`text-2xl leading-normal font-bold text-center`}>
                                Why rent a car from us?
                            </h1>
                            <p className=" text-justify mt-4">
                                &ensp; Renting a car has never been easier! We offer a wide range of cars for
                                rent at the best prices. No extra fees, no hidden costs. Rent a car from us!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
