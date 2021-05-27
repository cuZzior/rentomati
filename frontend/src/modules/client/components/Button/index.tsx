import React from 'react';
import cn from 'clsx';

import styles from './styles.module.css';


interface Props {
    onClick?: Function;
    isPrimary?: boolean;
    children: React.ReactNode;
}

const Button = ({onClick = () => {}, isPrimary, children}: Props) => {
    return (
        <div
            className={cn(styles.wrapper, {
                [styles.isPrimary]: isPrimary,
            })}
            onClick={() => onClick()}
        >
            {children}
        </div>
    );
}

export default Button;
