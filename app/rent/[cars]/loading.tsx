import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function LoadingCard() {
    return (
        <Card className="w-[350px] h-[400px] space-y-5 p-4 bg-white shadow-lg rounded-lg" radius="lg">
            <Skeleton className="rounded-lg">
                <div className="h-[250px] w-[320px] rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3">
                <Skeleton className="w-full rounded-lg mt-2">
                    <div className="flex justify-between">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                        <div className="h-3 w-1/5 rounded-lg bg-default-200"></div>
                    </div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-full rounded-lg">
                    <div className="flex justify-between w-full">
                        <div className="w-full space-y-3">
                            <div className="h-3 w-3/5 rounded-lg bg-default-300"></div>
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </div>
                        <div className="w-2/3">
                            <div className="h-10 rounded-lg bg-default-300"></div>
                        </div>
                    </div>
                </Skeleton>
            </div>
        </Card>
    );
}
