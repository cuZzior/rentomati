import React from 'react';

import { Status } from '../../types';
import { CURRENT_USER_ID } from '../../consts';

import styles from './styles.module.css';


interface Props {
    status: Status;
    userId?: number;
}

const StatusIndicator = ({status, userId}: Props) => {

    if (userId === CURRENT_USER_ID) {
        return (
            <div className={styles.owned}>
                Currently owned
            </div>
        );
    }


    if (status === Status.AVAILABLE) {
        return (
            <div className={styles.available}>
                Available
            </div>
        );
    }

    return (
        <div className={styles.unavailable}>
            Unavailable
        </div>
    );
}

export default StatusIndicator;
