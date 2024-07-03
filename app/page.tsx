"use client";

import { RentForm } from "@/components/rent-form/rent-form";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            <div className="flex lg:flex-row items-center flex-col justify-evenly p-12 max-w-screen">
                <RentForm />
                <div>
                    <div className="lg:w-[600px] h-[400px] w-screen flex justify-center items-center flex-col">
                        <p
                            className={`font-bold leading-normal text-yellow-500 text-2xl md:leading-normal w-full text-center translate-y-10`}
                        >
                            Renting a car has never been easier!
                        </p>
                        <Image
                            src={"/car.png"}
                            alt="Car"
                            width={300}
                            height={300}
                            className="drop-shadow-3xl"
                            priority={true}
                        />
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray-700">
                <div className="flex justify-evenly lg:flex-row flex-col items-center p-10 min-w-full">
                    <div>
                        <div className="w-[400px] p-5">
                            <h1 className={`text-2xl leading-normal font-bold text-center text-gray-700`}>
                                Why rent a car from us?
                            </h1>
                            <p className=" text-justify mt-4">
                                &ensp; Renting a car has never been easier! We offer a wide range of cars for
                                rent at the best prices.
                            </p>
                            <ul className="mt-4">
                                <li className="flex items-center">
                                    <span className="text-xl text-gray-700">✓</span>
                                    <span className="ml-2">Wide range of cars</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-xl text-gray-700">✓</span>
                                    <span className="ml-2">Best prices</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-xl text-gray-700">✓</span>
                                    <span className="ml-2">
                                        <span className="font-bold">Fast</span> and{" "}
                                        <span className="font-bold text-green-700">easy</span> process
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-xl text-gray-700">✓</span>
                                    <span className="ml-2">
                                        <span className="font-bold">No</span> hidden{" "}
                                        <span className="font-bold text-red-700">fees</span>
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-xl text-gray-700">✓</span>
                                    <span className="ml-2">
                                        <span className="font-bold">No</span> credit card needed
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:w-[560px]">
                        <div className="z-20 border-x-[30px] border-gray-700 rounded-full">
                            <Image src={"/cars3.jpeg"} alt="Car" width={400} height={400} priority={true} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
