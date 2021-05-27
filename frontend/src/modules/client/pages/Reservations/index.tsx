import React, { useEffect, useState } from 'react';

import { Reservation } from '../../types';
import { getReservations } from '../../api';
import { CURRENT_USER_ID } from '../../consts';

import ItemRow from '../../components/ItemRow';

import styles from './styles.module.css';


const Items = () => {

    const [reservations, setReservations] = useState<Reservation[]>([]);

    useEffect(() => {
        getReservations(CURRENT_USER_ID).then(reservations => {
            setReservations(reservations);
        });
    }, []);


    return (
        <div className={styles.wrapper}>
            <h2>My items:</h2>
            {reservations.map(reservation => (
                <ItemRow item={reservation} key={reservation.id} />
            ))}
        </div>
    );
}

export default Items;
