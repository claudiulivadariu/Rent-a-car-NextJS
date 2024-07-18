import { DateRange } from "react-day-picker";

export interface IOtherFilters {
    date: DateRange | undefined;
    pickUpLocation: string;
    dropOffLocation: string;
}

export const emptyOtherFilters = {
    date: undefined,
    pickUpLocation: "",
    dropOffLocation: "",
};