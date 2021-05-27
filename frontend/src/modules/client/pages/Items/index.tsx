import React, { useEffect, useState } from 'react';

import { Item, Reservation } from '../../types';
import { getItems, getReservations } from '../../api';
import { CURRENT_USER_ID } from "../../consts";

import ItemRow from '../../components/ItemRow';

import styles from './styles.module.css';


const Items = () => {

    const [items, setItems] = useState<Item[]>([]);
    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {

        getItems().then(items => {
            setItems(items);
        });

        getReservations(CURRENT_USER_ID).then(reservations => {
            setReservations(reservations);
        });

    }, []);

    const myItems = items.filter(item => reservations.some(reservation => reservation.itemId === item.id));
    const otherItems = items.filter(item => !reservations.some(reservation => reservation.itemId === item.id));


    return (
        <div className={styles.wrapper}>

            {myItems.length && (
                <div>
                    <h2>my items:</h2>
                    {myItems.map(item => (
                        <ItemRow item={item} key={item.id} />
                    ))}
                </div>
            )}

            {otherItems.length && (
                <div>
                    <h2>other items:</h2>
                    {otherItems.map(item => (
                        <ItemRow item={item} key={item.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Items;
