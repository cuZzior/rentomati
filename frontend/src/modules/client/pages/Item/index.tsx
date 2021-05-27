import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Item, Status, Reservation } from '../../types';
import { getItem, getReservations, reserve, cancelReservation } from '../../api';
import { CURRENT_USER_ID } from '../../consts';

import Button from '../../components/Button';
import ItemPicture from '../../components/ItemPicture';
import Description from '../../components/Description';

import styles from './styles.module.css';


const Items = () => {

    const [item, setItem] = useState<Item>();
    const [reservations, setReservations] = useState<Reservation[]>([]);

    const params = useParams<any>();
    const history = useHistory();

    const isOwnedItem = item?.rentedBy?.id === CURRENT_USER_ID;
    const currentReservation = reservations.find(reservation => reservation.itemId === item?.id);

    useEffect(() => {
        loadItem();
    }, []);

    function loadItem () {

        getItem(params.itemId).then(item => {
            setItem(item);
        });

        getReservations(CURRENT_USER_ID).then(reservations => {
            setReservations(reservations);
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

                <Description item={item} currentReservation={currentReservation} />

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
