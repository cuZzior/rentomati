import React from 'react';

import styles from './styles.module.css';


interface Props {
    itemId: number;
    size?: number;
}

const ItemPicture = ({itemId, size = 100}: Props) => {
    return (
        <div className={styles.wrapper} style={{width: size, height: size}}>
            <img src={`${process.env.PUBLIC_URL}/picture-${itemId}.jpg`} />
        </div>
    );
}

export default ItemPicture;
