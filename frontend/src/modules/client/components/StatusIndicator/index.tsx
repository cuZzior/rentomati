import React from 'react';

import { Status } from '../../types';

import styles from './styles.module.css';


interface Props {
    status: Status;
}

const StatusIndicator = ({status}: Props) => {
    if (status === Status.AVAILABLE) {
        return (
            <div className={styles.available}>
                AVAILABLE
            </div>
        );
    }

    return (
        <div className={styles.unavailable}>
            UNAVAILABLE
        </div>
    );
}

export default StatusIndicator;
