import React from 'react';
import { Link } from 'react-router-dom';

import { Item } from '../../types';

import ItemPicture from '../../components/ItemPicture';
import Description from '../../components/Description';

import styles from './styles.module.css';


interface Props {
    item: Item;
    showStatus?: boolean;
}

const ItemRow = ({item, showStatus}: Props) => {
    return (
        <Link to={`/items/${item.id}`} className={styles.wrapper}>
            <ItemPicture itemId={item.id} />
            <div className={styles.content}>
                <Description item={item} showStatus={showStatus} />
            </div>
        </Link>
    );
}

export default ItemRow;
