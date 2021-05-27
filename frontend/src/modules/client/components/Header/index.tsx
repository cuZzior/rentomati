import React from 'react';
import { Link } from 'react-router-dom';

import shop from './shop.svg';

import styles from './styles.module.css';


const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img src={shop} width={30} />
                Rent-o-mati!
            </div>
            <div className={styles.menu}>
                <Link to="/items" className={styles.link}>
                    Available items
                </Link>
                <Link to="/reservations" className={styles.link}>
                    My reservations
                </Link>
                <Link to="/account" className={styles.link}>
                    Account
                </Link>
            </div>
        </div>
    );
}

export default Header;
