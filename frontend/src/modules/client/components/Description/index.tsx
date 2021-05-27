import React from 'react';

import { Item, Reservation } from '../../types';
import { CURRENT_USER_ID } from '../../consts';

import StatusIndicator from '../StatusIndicator';
import ReadableDate from '../ReadableDate';

import styles from './styles.module.css';


interface Props {
    item: Item;
    showStatus?: boolean;
    currentReservation?: Reservation;
}

const Description = ({item, showStatus = true, currentReservation}: Props) => {

    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                {item.name}
            </div>

            {showStatus && (
                <div className={styles.row}>
                    <StatusIndicator status={item.status} userId={item.rentedBy?.id} />
                </div>
            )}

            {item.rentedBy && item.rentedBy.id !== CURRENT_USER_ID && (
                <div className={styles.row}>
                    <div className={styles.label}>
                        rented by:
                    </div>
                    {item.rentedBy?.name}
                </div>
            )}

            {currentReservation && (
                <div className={styles.row}>
                    <ReadableDate dateString={currentReservation.startDate} /> &nbsp;-&nbsp; <ReadableDate dateString={currentReservation.endDate} />
                </div>
            )}

        </div>
    );
}

export default Description;
