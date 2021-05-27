import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';


const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link className={styles.logo} to="/">
                <div className={styles.logoBg} />
                <div className={styles.logoBg2} />
                <div className={styles.text}>
                    Rent-o-mati!
                </div>
            </Link>
        </div>
    );
}

export default Header;
