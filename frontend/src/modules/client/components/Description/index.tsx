import React from 'react';

import { Item, Reservation } from '../../types';

import StatusIndicator from '../StatusIndicator';

import styles from './styles.module.css';


interface Props {
    item: Item | Reservation
    showStatus?: boolean;
}

const Description = ({item, showStatus}: Props) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.title}>
                {item.name}
            </div>

            <div className={styles.row}>
                <div className={styles.label}>
                    status:
                </div>
                <StatusIndicator status={item.status} />
            </div>

            {item.rentedBy && (
                <div className={styles.row}>
                    <div className={styles.label}>
                        rented by:
                    </div>
                    {item.rentedBy?.name}
                </div>
            )}



        </div>
    );
}

export default Description;
