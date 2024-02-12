import { Participation } from "./Participation";
/**
 * Interface: Olympic
 * 
 * @remarks
 * Represents information about a country's participation in Olympic events.
 * 
 * Properties:
 * @param id: number - Unique identifier for the Olympic entry.
 * @param country: string - The name of the country.
 * @param participations: Participation[] - An array of Participation objects representing the country's participations in Olympic events.
 */
export interface Olympic {
    id: number;
    country: string;
    participations: Participation[];
}
