import React from 'react';

import styles from './styles.module.css';


interface Props {
    itemId: number;
}

const ItemPicture = ({itemId}: Props) => {
    return (
        <div className={styles.wrapper}>
            <img src={`${process.env.PUBLIC_URL}/picture-${itemId}.jpg`} />
        </div>
    );
}

export default ItemPicture;
