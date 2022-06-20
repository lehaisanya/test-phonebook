import React, { FC, ReactNode, useRef } from 'react'

import styles from './styles.module.scss'

interface CollapsedProps {
    isOpen: boolean
    children: ReactNode
}

export const Collapsed: FC<CollapsedProps> = ({ isOpen, children }) => {
    const ref = useRef<HTMLDivElement>(null)

    return (
        <div
            className={styles.collapsed}
            ref={ref}
            style={{
                height: isOpen ? ref.current?.scrollHeight : 0,
            }}
        >
            {children}
        </div>
    )
}
