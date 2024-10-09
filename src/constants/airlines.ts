// types.ts
export interface FlightSegment {
    date: string;
    flightName: string;
    departureTime: string;
    arrivalTime: string;
    originCode: string;
    destinationCode: string;
    duration: string;
    stops: number;
    stopLocation?: string;
    price: number;
    currency: string;
    logo:string
}

export const flightData: FlightSegment[] = [
    {
        date: "Thu 25 Jun",
        flightName: "Emirates · AT 4334",
        departureTime: "9:45 AM",
        arrivalTime: "11:45 AM",
        originCode: "CDG",
        destinationCode: "DXB",
        duration: "7h 10min",
        stops: 0,
        price: 1456.90,
        currency: "AED",
        logo:"/images/i2.png"
    },
    {
        date: "Sat 2 Jul",
        flightName: "Emirates · AT 4334",
        departureTime: "11:45 PM",
        arrivalTime: "6:45 AM",
        originCode: "CDG",
        destinationCode: "DXB",
        duration: "19h 10min",
        stops: 1,
        stopLocation: "1h 10 min, Lisbon",
        price: 1456.90,
        currency: "AED",
        logo:"/images/i1.png"
    }
];