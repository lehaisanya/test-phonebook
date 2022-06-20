import React, { FC, HTMLAttributes } from 'react'
import { classes } from 'utils/classes'

import styles from './styles.module.scss'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    isActive?: boolean
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    isActive,
    ...props
}) => {
    const cls = classes([
        styles.button,
        className,
        isActive ? styles.active : null,
    ])

    return (
        <button className={cls} {...props}>
            {children}
        </button>
    )
}
