import React, { useEffect, useState } from 'react';

import { Item } from '../../types';
import { getItems } from '../../api';

import ItemRow from '../../components/ItemRow';

import styles from './styles.module.css';


const Items = () => {

    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        getItems().then(items => {
            setItems(items);
        });
    }, []);


    return (
        <div className={styles.wrapper}>
            {items.map(item => (
                <ItemRow item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Items;
