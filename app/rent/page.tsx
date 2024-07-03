import { Filters } from "@/components/filters/filters";
import CarsTable from "./[cars]/cars";

export default function RentPage() {
    return (
        <>
            <main className="p-12">
                <div className="flex flex-col lg:flex-row">
                    <Filters />
                    <div className="mx-10">
                        <CarsTable />
                    </div>
                </div>
            </main>
        </>
    );
}
