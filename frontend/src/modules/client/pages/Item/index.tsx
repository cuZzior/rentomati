import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Item } from '../../types';
import { getItem } from '../../api';

import Button from '../../components/Button';
import ItemPicture from '../../components/ItemPicture';
import Description from '../../components/Description';

import styles from './styles.module.css';


const Items = () => {

    const [item, setItem] = useState<Item>();
    const params = useParams<any>();
    const history = useHistory();

    useEffect(() => {
        getItem(params.itemId).then(item => {
            setItem(item);
        });
    }, []);

    if (!item) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.data}>
                <div className={styles.picture}>
                    <ItemPicture itemId={item.id} size={150} />
                </div>
                <Description item={item} />
            </div>
            <div className={styles.actions}>
                <Button onClick={() => history.push('/items')}>
                    Cancel
                </Button>
                <Button isPrimary={true}>
                    Book
                </Button>
            </div>
        </div>
    );
}

export default Items;
