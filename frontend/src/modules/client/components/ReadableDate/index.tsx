import React from 'react';


interface Props {
    dateString: string;
}

const ReadableDate = ({dateString}: Props) => {

    if (!dateString) {
        return null;
    }

    const date = new Date(dateString);

    return (
        <span>
            {date.toLocaleDateString(undefined)}
        </span>
    );
}

export default ReadableDate;
