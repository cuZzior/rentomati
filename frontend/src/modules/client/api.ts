import * as superagent from 'superagent'

import { Item, Reservation } from './types';


const agent = superagent.agent();

agent.use((request) => {
    request.url = `http://34.89.235.4/api/${request.url}`;
});

interface RequestOptions {
    method?: 'GET'|'POST'|'PUT'|'PATCH'|'DELETE';
}

export function request<T = any> (urlOrPath: string, payload?: Object, options?: RequestOptions): Promise<T> {
    const method = options?.method || (payload ? 'POST' : 'GET');
    const agentMethod: any = method.toLowerCase();
    // @ts-ignore
    const promise = payload ? agent[agentMethod](urlOrPath).send(payload) : agent[agentMethod](urlOrPath);

    return promise.then((response: Response) => {
        return response?.body;
    }).catch((error: string) => {
        throw new Error(error);
    });
}

export function getItems (): Promise<Item[]> {
    return request('items');
}

export function getItem (itemId: number): Promise<Item> {
    return request(`item/${itemId}`)
}

export function getReservations (userId: number): Promise<Reservation[]> {
    return request(`reservations/userId/${userId}`);
}

export function reserve (userId: number, itemId: number) {
    return request('reservations/reserve', {userId, itemId}, {method: 'POST'});
}

export function cancelReservation (itemId: number): Promise<Reservation[]> {
    return request('reservations/cancel', {itemId}, {method: 'POST'});
}