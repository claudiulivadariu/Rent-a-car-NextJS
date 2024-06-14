"use client";

import { RentForm } from "@/components/rent-form/rent-form";
import Image from "next/image";
import { inter } from "@/components/ui/fonts";
export default function Home() {
    return (
        <main className="flex lg:flex-row items-center flex-col justify-evenly p-24">
            <RentForm />
            <div>
                <div className=" lg:w-[600px] h-[400px] p-10 w-screen flex justify-center items-center flex-col">
                    <p className={`${inter.className} leading-normal text-yellow-500 text-2xl md:leading-normal w-full text-center translate-y-10`}>
                        Renting a car has never been easier!
                    </p>
                    <Image src={"/car.png"} alt="Car" width={300} height={300} className="drop-shadow-3xl" />
                </div>
            </div>
        </main>
    );
}
