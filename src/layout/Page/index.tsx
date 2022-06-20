import React, { FC, HTMLAttributes } from 'react'
import { classes } from 'utils/classes'

import styles from './styles.module.scss'

export const Page: FC<HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    const cls = classes([styles.page, className])

    return (
        <div className={cls} {...props}>
            {children}
        </div>
    )
}
