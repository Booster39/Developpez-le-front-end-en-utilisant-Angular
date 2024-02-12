/**
 * Interface: Participation
 * 
 * @remarks
 * Represents participation information in Olympic events.
 * 
 * Properties:
 * 
 * @param id: number - Unique identifier for the participation.
 * @param year: number - The year of the Olympic event.
 * @param city: string - The city where the Olympic event took place.
 * @param medalsCount: number - The total count of medals won by athletes in the event.
 * @param athleteCount: number - The count of athletes who participated in the event.
 */
export interface Participation {
    id: number
    year: number
    city: string
    medalsCount: number
    athleteCount: number
}
