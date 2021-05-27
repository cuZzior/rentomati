import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Item, Status } from '../../types';
import { getItem, reserve, cancelReservation } from '../../api';
import { CURRENT_USER_ID } from '../../consts';

import Button from '../../components/Button';
import ItemPicture from '../../components/ItemPicture';
import Description from '../../components/Description';

import styles from './styles.module.css';


const Items = () => {

    const [item, setItem] = useState<Item>();
    const params = useParams<any>();
    const history = useHistory();

    const isOwnedItem = item?.rentedBy?.id === CURRENT_USER_ID;

    useEffect(() => {
        loadItem();
    }, []);

    function loadItem () {
        getItem(params.itemId).then(item => {
            setItem(item);
        });
    }

    function onReserve () {
        if (!item?.id) {
            return;
        }

        reserve(CURRENT_USER_ID, item?.id).then(() => {
            loadItem();
        })
    }

    function onCancel () {
        if (!item?.id) {
            return;
        }

        cancelReservation(item?.id).then(() => {
            loadItem();
        })
    }

    if (!item) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.data}>
                <div className={styles.picture}>
                    <ItemPicture itemId={item.id} size={150} />
                </div>
                <Description item={item} showStatus={!isOwnedItem} />
            </div>
            <div className={styles.actions}>

                <Button onClick={() => history.goBack()}>
                    Go back
                </Button>

                {item.status === Status.AVAILABLE && (
                    <Button isPrimary={true} onClick={() => onReserve()}>
                        Book
                    </Button>
                )}

                {isOwnedItem && (
                    <Button isPrimary={true} onClick={() => onCancel()}>
                        Mark as returned
                    </Button>
                )}

            </div>
        </div>
    );
}

export default Items;
