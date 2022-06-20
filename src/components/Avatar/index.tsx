import React, { FC, ReactNode } from 'react'
import { classes } from 'utils/classes'

import styles from './styles.module.scss'

interface AvatarProps {
    className?: string
    imageClassName?: string
    src?: string
    children?: ReactNode
}

export const Avatar: FC<AvatarProps> = ({
    className,
    imageClassName,
    src,
    children,
}) => {
    const cls = classes([styles.avatar, className])

    return (
        <div className={cls}>
            {src ? (
                <img src={src} alt="Avatar" className={imageClassName} />
            ) : (
                children
            )}
        </div>
    )
}
