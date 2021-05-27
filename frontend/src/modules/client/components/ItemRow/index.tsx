import React from 'react';

import { Item } from '../../types';

import ItemPicture from '../../components/ItemPicture';

import styles from './styles.module.css';


interface Props {
    item: Item;
}

const ItemRow = ({item}: Props) => {
    return (
        <div className={styles.wrapper}>
            <ItemPicture itemId={item.id} />
            <div className={styles.content}>
                <ul>
                    <li>name: {item.name}</li>
                    <li>status: {item.status}</li>
                    {item.rentedBy && (
                        <li>rented by: {item.rentedBy.name}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ItemRow;
