export enum Status {
    AVAILABLE = 'AVAILABLE',
    UNAVAILABLE = 'UNAVAILABLE',
}

export interface User {
    id: number;
    name: string;
}

export interface Item {
    id: number;
    name: string;
    status: Status;
    rentedBy?: User;
}

export interface Reservation extends Item {
    startDate: string;
}