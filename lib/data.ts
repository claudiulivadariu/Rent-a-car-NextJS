import { CarCardProps } from "@/components/car-card/card";
import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";
import { IFilters } from "@/components/filters/IFilters";

export async function fetchCars() {
    noStore();

    try {
        console.log("Fetching revenue data...");
        const data = await sql<CarCardProps>`SELECT * FROM cars LIMIT 8`;
        return data.rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch revenue data.");
    }
}

export async function fetchFilteredCars(filters: IFilters) {
    noStore();

    try {
        console.log("Fetching revenue data...");

        // Initialize the base query and parameters
        let queryString = `SELECT * FROM cars WHERE price >= $1 AND price <= $2`;
        let queryParams: any[] = [filters.price.min, filters.price.max];
        let paramCount = 3;

        if (filters.carType !== "") {
            queryParams.push(filters.carType);
            queryString += ` AND cartype = $${paramCount}`;
            paramCount++;
        }
        if (filters.fuelType !== "") {
            queryParams.push(filters.fuelType);
            queryString += ` AND fueltype = $${paramCount}`;
            paramCount++;
        }
        if (filters.transmission !== "") {
            queryParams.push(filters.transmission);
            queryString += ` AND transmissiontype = $${paramCount}`;
            paramCount++;
        }
        if (filters.seats !== "") {
            if (filters.seats === "7plus") {
                queryParams.push(7);
                queryString += ` AND seats >= $${paramCount}`;
            } else {
                queryParams.push(filters.seats);
                queryString += ` AND seats = $${paramCount}`;
            }
            paramCount++;
        }

        queryString += ` LIMIT 8;`;

        console.log(queryString);
        console.log(queryParams);

        // Using the sql tagged template for the final query
        const data = await sql.query<CarCardProps>(queryString, queryParams);
        return data ? data.rows : [];
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch revenue data.");
    }
}
