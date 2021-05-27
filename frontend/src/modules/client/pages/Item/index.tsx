import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Item, Status } from '../../types';
import { getItem } from '../../api';
import { CURRENT_USER_ID } from '../../consts';

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

                <Button onClick={() => history.goBack()}>
                    Cancel
                </Button>

                {item.status === Status.AVAILABLE && (
                    <Button isPrimary={true}>
                        Book
                    </Button>
                )}

                {item.rentedBy?.id === CURRENT_USER_ID && (
                    <Button isPrimary={true}>
                        Mark as returned
                    </Button>
                )}

            </div>
        </div>
    );
}

export default Items;
