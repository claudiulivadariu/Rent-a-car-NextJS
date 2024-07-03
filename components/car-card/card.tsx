"use client";

import Image from "next/image";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faGasPump } from "@fortawesome/free-solid-svg-icons";
import Icon from "@mdi/react";
import { mdiSeat } from "@mdi/js";
import { Button as ShadButton } from "@/components/ui/button";

export interface CarCardProps {
    id: string;
    image: string;
    seats: number;
    fueltype: string;
    transmissiontype: string;
    price: number;
    isonsale: boolean;
    cartype: string;
    oldprice?: number;
    newprice?: number;
}
const GradientButton = styled(Button)({
    background: "linear-gradient(45deg, #4CAF50, #2E7D32)",
    border: 0,
    borderRadius: 8,
    color: "white",
    maxHeight: "40px",
    padding: "8px 12px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    transition: "background-color 0.3s",
    "&:hover": {
        background: "linear-gradient(45deg, #2E7D32, #4CAF50)",
    },
});
export default function CarCard(props: CarCardProps) {
    const { image, seats, fueltype, cartype, transmissiontype, price, isonsale, oldprice, newprice } = props;
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-[300px] h-[400px] max-w-[20rem] ">
            <div className="h-[15rem] flex items-center">
                <Image
                    src={image}
                    alt={"Car Image"}
                    width={260}
                    height={260}
                    className="w-full h-auto max-h-[260px] p-4 mt-10 rounded-3xl rounded-t-3xl"
                />
            </div>
            <div className="p-4">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold mb-2">
                        {cartype} <span className="text-sm text-gray-500">(or similiar)</span>
                    </h2>
                    <div className="text-slate-800 text-lg font-semibold flex items-center">
                        {isonsale ? (
                            <div className="flex flex-row">
                                <span className="line-through px-1">${oldprice} </span>
                                <span className="text-red-500">${newprice}/day</span>
                            </div>
                        ) : (
                            <>
                                ${price}
                                <span className="text-slate-500">/day</span>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="flex">
                            <span className="pr-2 items-center text-slate-600 w-[20px] h-[20px]">
                                <FontAwesomeIcon icon={faGear} />
                            </span>
                            <p className="text-slate-700 pt-[2px]">{transmissiontype}</p>
                        </div>
                        <div className="flex">
                            <span className="pr-2 items-center text-slate-500 w-[20px] h-[20px]">
                                <FontAwesomeIcon icon={faGasPump}/>
                            </span>
                            <p className="text-slate-700 pt-[2px]">{fueltype}</p>
                        </div>
                        <div className="flex items-center">
                            <span className="pr-2 -ml-1 items-center text-slate-600">
                                <Icon path={mdiSeat} size="20px" />
                            </span>
                            <p className="text-slate-700">{seats}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        {/* <GradientButton variant="contained" className="items-center ">
                        View deal!
                    </GradientButton> */}
                        <ShadButton
                            variant="default"
                            className="items-center bg-green-700 hover:bg-green-900"
                        >
                            View deal!
                        </ShadButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
