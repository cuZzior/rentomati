import React from 'react';


const DAY_IN_MS = 24 * 60 * 60 * 1000;

interface Props {
    dateString: string;
}

const TimeLeft = ({dateString}: Props) => {

    if (!dateString) {
        return null;
    }

    const dateTo = new Date(dateString);
    const date = new Date();

    return (
        <span>
            days left: <b>{Math.ceil((dateTo.getTime() - date.getTime()) / DAY_IN_MS)}</b>
        </span>
    );
}

export default TimeLeft;
