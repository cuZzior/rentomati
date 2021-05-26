import React from 'react';
import shop from './shop.svg';

import styles from './styles.module.css';

const Demo = () => {
    return (
        <div className={styles.wrapper}>
            <img src={shop} width={150} />
            <div className={styles.title}>
                Rent-o-mati!
            </div>
        </div>
    );
}

export default Demo;
