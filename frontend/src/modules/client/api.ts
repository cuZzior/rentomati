import { Item, Status } from './types';


export function getItems (): Promise<Item[]> {
    return Promise.resolve([
        {
            id: 1,
            name: 'Google VR oculus 1500',
            status: Status.UNAVAILABLE,
            rentedBy: {
                id: 1,
                name: 'Piotr Nęcka',
            },
        },
        {
            id: 2,
            name: 'Solniczka',
            status: Status.AVAILABLE,
        },
        {
            id: 3,
            name: 'Dron Mavic Air 2',
            status: Status.UNAVAILABLE,
            rentedBy: {
                id: 2,
                name: 'Rafał Gasiński',
            },
        },
        {
            id: 3,
            name: 'Lodówko zamrażarka BEKA xD',
            status: Status.AVAILABLE,
        },
    ]);
}