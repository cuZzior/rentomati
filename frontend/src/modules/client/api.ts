import * as superagent from 'superagent'

import { Item } from './types';


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
    return request(`items/${itemId}`)
}