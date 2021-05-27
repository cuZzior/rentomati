import React from 'react';

import shop from './shop.svg';

import styles from './styles.module.css';


const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <div className={styles.logoBg} />
                <div className={styles.logoBg2} />
                <img src={shop} width={30} />
                Rent-o-mati!
            </div>
        </div>
    );
}

export default Header;
